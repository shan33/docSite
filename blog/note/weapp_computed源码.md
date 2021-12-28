---
slug: study
title: miniprogram-computed源码注释
authors: [xulanshan]
tags: ['weapp', 'js', '源码', 'computed']
---

## computedBehavior
### 文件目录

### 文件目录
/node_modules/miniprogram-computed/src
> behaviors.ts
> data-path.ts
> data-tracer.ts
> index.ts

### data-tracer
3个方法：
**wrapData**、**create**、 **unwrap**

### data-path
7个方法：
**throwParsing**、**parseArrIndex**、**parseIndent**、**parseSinglePath**、**parseMultiPaths**、**parseEOF**、**parseMultiDataPaths**
```javascript
     /** 
     * 解析除当前确切的监听属性
     * @param path 组件watch属性中的key值
     * @param state 存储当前解析的字符串总长度和解析位置
     */
    const parseMultiPaths = function (path, state) {
      // 跳过\s空白符
      while (WHITE_SPACE_CHAR_REGEXP.test(path[state.index])) {
        state.index++;
      }
      // 调用parseSinglePath方法解析
      const ret = [parseSinglePath(path, state)];
      let splitted = false;
      while (state.index < state.length) {
        const ch = path[state.index];
        if (WHITE_SPACE_CHAR_REGEXP.test(ch)) {
          state.index++;
        } else if (ch === ",") {
          splitted = true;
          state.index++;
        } else if (splitted) {
          splitted = false;
          ret.push(parseSinglePath(path, state));
        } else {
          throwParsingError(path, state.index);
        }
      }
      return ret;
    };
    
    /** 
     * 解析单个完整属性路径(a, a.b, a.**, a[12]等) 
     */
    const parseSinglePath = function (path, state) {
      // 截取path的一个简单完整属性名称(类似a, _a, _v, $fd)一般父级别
      const paths = [parseIdent(path, state)];
      // 默认deep监听watch为false
      const options = {
        deepCmp: false,
      };
      // 如果还有字符串，继续解析
      // 遇到[]数组(类似target[1], target[name])解析出数字类型
      // 遇到.对象(类似target.name, target.**)
      while (state.index < state.length) {
        const ch = path[state.index];
        if (ch === "[") {
          state.index++;
          paths.push(parseArrIndex(path, state));
          const nextCh = path[state.index];
          if (nextCh !== "]") throwParsingError(path, state.index);
          state.index++;
        } else if (ch === ".") {
          state.index++;
          const ch = path[state.index];
          if (ch === "*") {
            state.index++;
            const ch = path[state.index];
            // target.** 表示深度监听对象
            if (ch === "*") {
              state.index++;
              options.deepCmp = true;
              break;
            }
            throwParsingError(path, state.index);
          }
          // 对象继续解析target.name 的name字段
          paths.push(parseIdent(path, state));
        } else {
          break;
        }
      }
      return { path: paths, options };
    };

```

### behavior
定义了三个interface.
**BehaviorExtend**、**ObserversItem**、**ComputedWatchInfo**
一个方法：behavior
一个属性：computedWatchDefIdInc(watchDefId为当前watchInfo赋值key并自动累加）

添加data的proxy代理；
利用observer

```javascript
  const behavior = Behavior({
    lifetimes: {
      created(this) {
        this.setData({ _computedWatchInit: 'created' });
      },

      attached(this) {
        this.setData({ _computedWatchInit: 'attached' });
      },
    },

    /**
    * @description 
    * @param defFields 使用该行为的调用对象
    */
    definition(defFields) {
      // 获取watch和computed自定义属性内容
      const { computedDef, watchDef } = defFields;
      // observer数组，存储需要监听的属性
      const observersItems = []; // ObserverItem { fileds: String, observer: () => {} }

      const computedWatchDefId = computedWatchDefIdInc++;

      // 添加当前组件状态改变监听
      observersItems.push({
        fileds: '_computedWatchInit',
        observer(this) {
          const status = this.data._computedWatchInit;
          // 组件刚被创建的时候，初始化该behavior的watchinfo以及有关的watch属性现有值
          if (status === 'created') {
            // 初始化该行为的空白默认计算监听对象
            const computedWatchInfo = {
              computedUpdaters: [],
              computedRelatedPathValues: [],
              watchCurVal: {},
            };
            // 初始化该组件的整体监听对象
            if (!this._computedWatchInfo) {
              this._computedWatchInfo = {};
            }
            // 将该behavior挂载到组件监听对象的特定id中
            this._computedWatchInfo[computedWatchDefId] = computedWatchInfo;
            // 处理watch属性监听，将watch的现有属性值挂到watchCurVal中
            if (watchDef) {
              // 遍历watch属性的key值
              Object.keys(watchDef).forEach((watchPath) => {
                // 调用dataPath方法获取完整属性key值（具体见dataPath）
                // 特别是'target.b, target.**, target[1]'等这类型
                const paths = dataPata.parseMultiDataPaths(watchPath);
                // 记录watch的属性原始值;
                // options主要是.** 这类deepCmp深度监听
                const curVal = paths.map(({ path, options }) => {
                  const val = dataPath.getDataOnPath(this.data, path);
                  // 深度监听需要深度clone当期那属性保存
                  return options.deepComp ? deepClone(val) : val;
                });
                computedWatchInfo.watchCurVal[watchPath] = curVal;
              })
            } 
          } else if (status === 'attached') {
            // 组件进入界面节点树
            // 处理computed字段
            const computedWatchInfo = this._computedWatchInfo[computedWatchDefId];
            if (computedDef) {
              Object.keys(computedDef).forEach((targetField) => {
                const updateMethod = computedDef[targetField];
                // 计算属性有关的依赖收集
                const relatedPathValuesOnDef = [];

                // 此处调用了data-tracer内部的create,其实就是转发到了tracer的wrapData函数
                // wrapData返回了data的proxy, 并在get方法中将get的属性内容添加到了relatedPath..依赖中
                // updateMethod方法内部为data的proxy
                const val = updateMethod(
                  dataTracer.create(this.data, relatedPathValuesOnDef)
                );
                // 对该计算属性有关的依赖加上依赖属性的值
                const pathValues = relatedPathValuesOnDef.map(({ path }) => ({
                  path, 
                  value: dataPath.getDataOnPath(this.data, path)
                }));

                // 将计算属性挂载到data中
                // 此处可以做setData动作是因为observer的handlers会强制合并setDatas一起触发
                this.setData({
                  [targetField]: dataTracer.unwrap(val)
                });

                // 将该新增计算属性添加到watchInfo的relatedPathValues
                // { key：计算属性 value：依赖 }  
                computedWatchInfo.computedRelatedPathValues[targetField] = pathValues;

                // setData触发的时候会调用触发
                const updateValueAndRelatedPaths = () => {
                  const oldPathValues = computedWatchInfo.computedRelatedPathValues[targetField];

                  let needUpdate = false;
                  // 此处获取setData时候计算属性依赖的data是否有变动，有的话需要更新
                  for (let i = 0; i < oldPathValues.length; i++) {
                    const { path, value:oldValue } = oldPathValues[i];
                    const curVal =  dataPath.getDataOnPath(this.data, path);

                    if (oldValue !== curVal) {
                      needUpdate = true;
                      break;
                    }
                  }
                  if (!needUpdate) return false;	
                  
                  // setData时有data更新需要更新计算属性，则重新计算更新该计算属性的值以及依赖属性的值
                  const relatedPathValues = [];
                  const val = updateMethod(
                    dataTracer.create(this.data, relatedPathValues)
                  );
                  
                  this.setData({
                    [targetField]: dataTracer.unwrap(val)
                  })

                  computedWatchInfo.computedRelatedPathValues[targetField] = relatedPathValues;
                  return true;
                }

                computedWatchInfo.computedUpdaters.push(
                  updateValueAndRelatedPaths
                )
                
              })
            }

          }

        }
      });

      // 计算属性会对data.** 进行observer
      if (computedDef) {
        observersItems.push({
          fileds: '**',
          observer(this) {
            if (!this._computedWatchInfo) return;

            const computedWatchInfo = this._computedWatchInfo[computedWatchDefId];

            if (!computedWatchInfo) return;

            let changed = false;
            do {
              // 查看当前计算属性的依赖是否包含更新，并及时更新
              changed = computedWatchInfo.computedUpdaters.some(
                (func) => func.call(this)
              );
            } while(changed)
          }
        })
      }

      // watch属性会对watch的字段进行observer
      if (watchDef) {
        Object.keys(watchDef).forEach(watchDef => {
          // 获取属性解析后的data”路径“
          const paths = dataPath.parseMultiDataPaths(watchPath);

          observersItems.push({
            fileds: watchDef,
            observer(this) {
              if (!this._computedWatchInfo) return;
              const computedWatchInfo = this._computedWatchInfo[computedWatchDefId];
              if (!computedWatchInfo) return;

              // 获取老旧属性值， 并更新缓存中的数据
              const oldVal = computedWatchInfo.watchCurVal[watchPath];
              const originalCurValWithOptions = paths.map(({ path, options }) => {
                const val = dataPath.getDataOnPath(this.data, path);
                return { val, options };
              });
              const curVal = originalCurValWithOptions.map(({ val, options }) => 
                options.deepComp ? deepClone(val) : val
              );
              computedWatchInfo.watchCurVal[watchPath] = curVal;


              // 对比老旧属性值
              let changed = false;
              for (let i = 0; i < curVal.length; i++) {
                const options = paths[i].options;
                const deepComp = options.deepComp;
                if (deepComp ? !deepEqual(oldVal[i], curVal[i]) : oldVal[i] !== curVal[i]) {
                  changed = true;
                  break;
                }
              }

              if (changed) {
                // 将watch的属性现有值全部传入watch的handler中，并调用
                watchDef[watchPath].apply(this, originalCurValWithOptions.map(({ val }) => val));
              }
            }
          })
        }) 
      }

      // 监听主要依靠weapp的observer属性
      // 将observerItems里面的监听添加进去组件的observer属性
      if (typeof defFields.observers !== 'object') {
        defFields.observers = {};
      }
      if (Array.isArray(defFields.observers)) {
        defFields.observers.push(...observersItems);
      } else {
        observersItems.forEach((item) => {
          const f = defFields.observers[item.fileds];
          if (!f) {
            defFields.observers[item.fileds] = item.observer;
          } else {
            defFields.observers[item.fileds] = function() {
              item.observer.call(this);
              f.call(this);
            }
          }
        })
      }
    },

  })

```
