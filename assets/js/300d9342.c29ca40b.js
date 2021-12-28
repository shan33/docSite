"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7327],{148:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"\u7b14\u8bb04","metadata":{"permalink":"/docSite/blog/\u7b14\u8bb04","editUrl":"https://github.com/shan33/docSite/tree/master/blog/note/this.md","source":"@site/blog/note/this.md","title":"this\u76f8\u5173","description":"this","date":"2021-12-28T07:40:12.062Z","formattedDate":"December 28, 2021","tags":[{"label":"JS","permalink":"/docSite/blog/tags/js"},{"label":"\u7b14\u8bb0","permalink":"/docSite/blog/tags/\u7b14\u8bb0"},{"label":"\u4f60\u4e0d\u77e5\u9053\u7684javascript","permalink":"/docSite/blog/tags/\u4f60\u4e0d\u77e5\u9053\u7684javascript"}],"readingTime":1.53,"truncated":false,"authors":[{"name":"xulanshan","title":"\u8bb2\u7a76","url":"https://github.com/shan33","imageURL":"/img/logo.png","key":"xulanshan"}],"nextItem":{"title":"miniprogram-computed\u6e90\u7801\u6ce8\u91ca","permalink":"/docSite/blog/study"}},"content":">this\\n\\n### this\u7ed1\u5b9a\u89c4\u5219\\n1. \u9ed8\u8ba4\u7ed1\u5b9a(\u51fd\u6570\u76f4\u63a5\u4f7f\u7528\u4e0d\u5e26\u4efb\u4f55\u4fee\u9970\u7684\u51fd\u6570\u5f15\u7528\u8fdb\u884c\u8c03\u7528)\\n2. \u9690\u5f0f\u7ed1\u5b9a(\u8c03\u7528\u4f4d\u7f6e\u662f\u5426\u6709\u4e0a\u4e0b\u6587\u5bf9\u8c61)\\n\\n>\u9690\u5f0f\u4e22\u5931\\n```javascript\\nfunction foo() {\\n  console.log(this.a);\\n}\\n\\nvar obj = {\\n  a: 2,\\n  foo: foo\\n};\\n\\nvar bar = obj.foo;\\nvar a = \'global\';\\nbar(); // global\\n```\\n\\n3. \u663e\u5f0f\u7ed1\u5b9a(apply,bind,call...)\\n4. new\u7ed1\u5b9a\\n> 1. \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\\n> 2. \u5bf9\u65b0\u7684\u5bf9\u8c61\u6267\u884c\u3010\u539f\u578b\u3011\u7ed1\u5b9a\\n> 3. \u65b0\u5bf9\u8c61\u4f1a\u7ed1\u5b9a\u5230\u51fd\u6570\u8c03\u7528\u7684this\\n> 4. \u5982\u679c\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u5176\u4ed6\u5bf9\u8c61\uff0c\u90a3\u4e48new\u8868\u8fbe\u5f0f\u51fd\u6570\u8c03\u7528\u4f1a\u8fd4\u56de\u8fd9\u4e2a\u65b0\u7684\u5bf9\u8c61\\n\\n### \u5224\u65adthis\\n1. \u51fd\u6570\u662f\u5426\u5728new\u4e2d\u8c03\u7528\uff08new\u7ed1\u5b9a\uff09\uff1f\u662f\u7684\u8bddthis\u7ed1\u5b9a\u7684\u662f\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\uff1b\\n``` javascript\\nvar bar = new foo();\\n```\\n\\n2. \u51fd\u6570\u662f\u5426\u901a\u8fc7call\u3001apply\u663e\u5f0f\u7ed1\u5b9a\u6216\u8005\u786c\u7ed1\u5b9a\u8c03\u7528\uff1f\u662f\u7684\u8bdd\uff0cthis\u7ed1\u5b9a\u7684\u662f\u6307\u5b9a\u7684\u5bf9\u8c61\u3002\\n```javascript\\nvar bar = foo.call(obj1);\\n```\\n\\n3. \u51fd\u6570\u662f\u5426\u5728\u67d0\u4e2a\u4e0a\u4e0b\u6587\u5bf9\u8c61\u4e2d\u8c03\u7528\uff08\u9690\u5f0f\u7ed1\u5b9a\uff09\uff1f\u662f\u7684\u8bdd\uff0cthis\u7ed1\u5b9a\u7684\u662f\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002\\n```javascript\\nvar bar = obj1.foo();\\n```\\n\\n4. \u90fd\u4e0d\u662f\uff0c\u4f7f\u7528\u9ed8\u8ba4\u7ed1\u5b9a\uff1b\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u7ed1\u5b9aundefined\uff0c\u5426\u5219\u7ed1\u5b9a\u5230\u5168\u5c40\u5bf9\u8c61\u3002\\n```javascript\\nvar bar = foo();\\n```"},{"id":"study","metadata":{"permalink":"/docSite/blog/study","editUrl":"https://github.com/shan33/docSite/tree/master/blog/note/weapp_computed\u6e90\u7801.md","source":"@site/blog/note/weapp_computed\u6e90\u7801.md","title":"miniprogram-computed\u6e90\u7801\u6ce8\u91ca","description":"computedBehavior","date":"2021-12-28T07:40:12.062Z","formattedDate":"December 28, 2021","tags":[{"label":"weapp","permalink":"/docSite/blog/tags/weapp"},{"label":"js","permalink":"/docSite/blog/tags/js"},{"label":"\u6e90\u7801","permalink":"/docSite/blog/tags/\u6e90\u7801"},{"label":"computed","permalink":"/docSite/blog/tags/computed"}],"readingTime":7.35,"truncated":false,"authors":[{"name":"xulanshan","title":"\u8bb2\u7a76","url":"https://github.com/shan33","imageURL":"/img/logo.png","key":"xulanshan"}],"prevItem":{"title":"this\u76f8\u5173","permalink":"/docSite/blog/\u7b14\u8bb04"},"nextItem":{"title":"A1","permalink":"/docSite/blog/language"}},"content":"## computedBehavior\\n### \u6587\u4ef6\u76ee\u5f55\\n\\n### \u6587\u4ef6\u76ee\u5f55\\n/node_modules/miniprogram-computed/src\\n> behaviors.ts\\n> data-path.ts\\n> data-tracer.ts\\n> index.ts\\n\\n### data-tracer\\n3\u4e2a\u65b9\u6cd5\uff1a\\n**wrapData**\u3001**create**\u3001 **unwrap**\\n\\n### data-path\\n7\u4e2a\u65b9\u6cd5\uff1a\\n**throwParsing**\u3001**parseArrIndex**\u3001**parseIndent**\u3001**parseSinglePath**\u3001**parseMultiPaths**\u3001**parseEOF**\u3001**parseMultiDataPaths**\\n```javascript\\n     /** \\n     * \u89e3\u6790\u9664\u5f53\u524d\u786e\u5207\u7684\u76d1\u542c\u5c5e\u6027\\n     * @param path \u7ec4\u4ef6watch\u5c5e\u6027\u4e2d\u7684key\u503c\\n     * @param state \u5b58\u50a8\u5f53\u524d\u89e3\u6790\u7684\u5b57\u7b26\u4e32\u603b\u957f\u5ea6\u548c\u89e3\u6790\u4f4d\u7f6e\\n     */\\n    const parseMultiPaths = function (path, state) {\\n      // \u8df3\u8fc7\\\\s\u7a7a\u767d\u7b26\\n      while (WHITE_SPACE_CHAR_REGEXP.test(path[state.index])) {\\n        state.index++;\\n      }\\n      // \u8c03\u7528parseSinglePath\u65b9\u6cd5\u89e3\u6790\\n      const ret = [parseSinglePath(path, state)];\\n      let splitted = false;\\n      while (state.index < state.length) {\\n        const ch = path[state.index];\\n        if (WHITE_SPACE_CHAR_REGEXP.test(ch)) {\\n          state.index++;\\n        } else if (ch === \\",\\") {\\n          splitted = true;\\n          state.index++;\\n        } else if (splitted) {\\n          splitted = false;\\n          ret.push(parseSinglePath(path, state));\\n        } else {\\n          throwParsingError(path, state.index);\\n        }\\n      }\\n      return ret;\\n    };\\n    \\n    /** \\n     * \u89e3\u6790\u5355\u4e2a\u5b8c\u6574\u5c5e\u6027\u8def\u5f84(a, a.b, a.**, a[12]\u7b49) \\n     */\\n    const parseSinglePath = function (path, state) {\\n      // \u622a\u53d6path\u7684\u4e00\u4e2a\u7b80\u5355\u5b8c\u6574\u5c5e\u6027\u540d\u79f0(\u7c7b\u4f3ca, _a, _v, $fd)\u4e00\u822c\u7236\u7ea7\u522b\\n      const paths = [parseIdent(path, state)];\\n      // \u9ed8\u8ba4deep\u76d1\u542cwatch\u4e3afalse\\n      const options = {\\n        deepCmp: false,\\n      };\\n      // \u5982\u679c\u8fd8\u6709\u5b57\u7b26\u4e32\uff0c\u7ee7\u7eed\u89e3\u6790\\n      // \u9047\u5230[]\u6570\u7ec4(\u7c7b\u4f3ctarget[1], target[name])\u89e3\u6790\u51fa\u6570\u5b57\u7c7b\u578b\\n      // \u9047\u5230.\u5bf9\u8c61(\u7c7b\u4f3ctarget.name, target.**)\\n      while (state.index < state.length) {\\n        const ch = path[state.index];\\n        if (ch === \\"[\\") {\\n          state.index++;\\n          paths.push(parseArrIndex(path, state));\\n          const nextCh = path[state.index];\\n          if (nextCh !== \\"]\\") throwParsingError(path, state.index);\\n          state.index++;\\n        } else if (ch === \\".\\") {\\n          state.index++;\\n          const ch = path[state.index];\\n          if (ch === \\"*\\") {\\n            state.index++;\\n            const ch = path[state.index];\\n            // target.** \u8868\u793a\u6df1\u5ea6\u76d1\u542c\u5bf9\u8c61\\n            if (ch === \\"*\\") {\\n              state.index++;\\n              options.deepCmp = true;\\n              break;\\n            }\\n            throwParsingError(path, state.index);\\n          }\\n          // \u5bf9\u8c61\u7ee7\u7eed\u89e3\u6790target.name \u7684name\u5b57\u6bb5\\n          paths.push(parseIdent(path, state));\\n        } else {\\n          break;\\n        }\\n      }\\n      return { path: paths, options };\\n    };\\n\\n```\\n\\n### behavior\\n\u5b9a\u4e49\u4e86\u4e09\u4e2ainterface.\\n**BehaviorExtend**\u3001**ObserversItem**\u3001**ComputedWatchInfo**\\n\u4e00\u4e2a\u65b9\u6cd5\uff1abehavior\\n\u4e00\u4e2a\u5c5e\u6027\uff1acomputedWatchDefIdInc(watchDefId\u4e3a\u5f53\u524dwatchInfo\u8d4b\u503ckey\u5e76\u81ea\u52a8\u7d2f\u52a0\uff09\\n\\n\u6dfb\u52a0data\u7684proxy\u4ee3\u7406\uff1b\\n\u5229\u7528observer\\n\\n```javascript\\n  const behavior = Behavior({\\n    lifetimes: {\\n      created(this) {\\n        this.setData({ _computedWatchInit: \'created\' });\\n      },\\n\\n      attached(this) {\\n        this.setData({ _computedWatchInit: \'attached\' });\\n      },\\n    },\\n\\n    /**\\n    * @description \\n    * @param defFields \u4f7f\u7528\u8be5\u884c\u4e3a\u7684\u8c03\u7528\u5bf9\u8c61\\n    */\\n    definition(defFields) {\\n      // \u83b7\u53d6watch\u548ccomputed\u81ea\u5b9a\u4e49\u5c5e\u6027\u5185\u5bb9\\n      const { computedDef, watchDef } = defFields;\\n      // observer\u6570\u7ec4\uff0c\u5b58\u50a8\u9700\u8981\u76d1\u542c\u7684\u5c5e\u6027\\n      const observersItems = []; // ObserverItem { fileds: String, observer: () => {} }\\n\\n      const computedWatchDefId = computedWatchDefIdInc++;\\n\\n      // \u6dfb\u52a0\u5f53\u524d\u7ec4\u4ef6\u72b6\u6001\u6539\u53d8\u76d1\u542c\\n      observersItems.push({\\n        fileds: \'_computedWatchInit\',\\n        observer(this) {\\n          const status = this.data._computedWatchInit;\\n          // \u7ec4\u4ef6\u521a\u88ab\u521b\u5efa\u7684\u65f6\u5019\uff0c\u521d\u59cb\u5316\u8be5behavior\u7684watchinfo\u4ee5\u53ca\u6709\u5173\u7684watch\u5c5e\u6027\u73b0\u6709\u503c\\n          if (status === \'created\') {\\n            // \u521d\u59cb\u5316\u8be5\u884c\u4e3a\u7684\u7a7a\u767d\u9ed8\u8ba4\u8ba1\u7b97\u76d1\u542c\u5bf9\u8c61\\n            const computedWatchInfo = {\\n              computedUpdaters: [],\\n              computedRelatedPathValues: [],\\n              watchCurVal: {},\\n            };\\n            // \u521d\u59cb\u5316\u8be5\u7ec4\u4ef6\u7684\u6574\u4f53\u76d1\u542c\u5bf9\u8c61\\n            if (!this._computedWatchInfo) {\\n              this._computedWatchInfo = {};\\n            }\\n            // \u5c06\u8be5behavior\u6302\u8f7d\u5230\u7ec4\u4ef6\u76d1\u542c\u5bf9\u8c61\u7684\u7279\u5b9aid\u4e2d\\n            this._computedWatchInfo[computedWatchDefId] = computedWatchInfo;\\n            // \u5904\u7406watch\u5c5e\u6027\u76d1\u542c\uff0c\u5c06watch\u7684\u73b0\u6709\u5c5e\u6027\u503c\u6302\u5230watchCurVal\u4e2d\\n            if (watchDef) {\\n              // \u904d\u5386watch\u5c5e\u6027\u7684key\u503c\\n              Object.keys(watchDef).forEach((watchPath) => {\\n                // \u8c03\u7528dataPath\u65b9\u6cd5\u83b7\u53d6\u5b8c\u6574\u5c5e\u6027key\u503c\uff08\u5177\u4f53\u89c1dataPath\uff09\\n                // \u7279\u522b\u662f\'target.b, target.**, target[1]\'\u7b49\u8fd9\u7c7b\u578b\\n                const paths = dataPata.parseMultiDataPaths(watchPath);\\n                // \u8bb0\u5f55watch\u7684\u5c5e\u6027\u539f\u59cb\u503c;\\n                // options\u4e3b\u8981\u662f.** \u8fd9\u7c7bdeepCmp\u6df1\u5ea6\u76d1\u542c\\n                const curVal = paths.map(({ path, options }) => {\\n                  const val = dataPath.getDataOnPath(this.data, path);\\n                  // \u6df1\u5ea6\u76d1\u542c\u9700\u8981\u6df1\u5ea6clone\u5f53\u671f\u90a3\u5c5e\u6027\u4fdd\u5b58\\n                  return options.deepComp ? deepClone(val) : val;\\n                });\\n                computedWatchInfo.watchCurVal[watchPath] = curVal;\\n              })\\n            } \\n          } else if (status === \'attached\') {\\n            // \u7ec4\u4ef6\u8fdb\u5165\u754c\u9762\u8282\u70b9\u6811\\n            // \u5904\u7406computed\u5b57\u6bb5\\n            const computedWatchInfo = this._computedWatchInfo[computedWatchDefId];\\n            if (computedDef) {\\n              Object.keys(computedDef).forEach((targetField) => {\\n                const updateMethod = computedDef[targetField];\\n                // \u8ba1\u7b97\u5c5e\u6027\u6709\u5173\u7684\u4f9d\u8d56\u6536\u96c6\\n                const relatedPathValuesOnDef = [];\\n\\n                // \u6b64\u5904\u8c03\u7528\u4e86data-tracer\u5185\u90e8\u7684create,\u5176\u5b9e\u5c31\u662f\u8f6c\u53d1\u5230\u4e86tracer\u7684wrapData\u51fd\u6570\\n                // wrapData\u8fd4\u56de\u4e86data\u7684proxy, \u5e76\u5728get\u65b9\u6cd5\u4e2d\u5c06get\u7684\u5c5e\u6027\u5185\u5bb9\u6dfb\u52a0\u5230\u4e86relatedPath..\u4f9d\u8d56\u4e2d\\n                // updateMethod\u65b9\u6cd5\u5185\u90e8\u4e3adata\u7684proxy\\n                const val = updateMethod(\\n                  dataTracer.create(this.data, relatedPathValuesOnDef)\\n                );\\n                // \u5bf9\u8be5\u8ba1\u7b97\u5c5e\u6027\u6709\u5173\u7684\u4f9d\u8d56\u52a0\u4e0a\u4f9d\u8d56\u5c5e\u6027\u7684\u503c\\n                const pathValues = relatedPathValuesOnDef.map(({ path }) => ({\\n                  path, \\n                  value: dataPath.getDataOnPath(this.data, path)\\n                }));\\n\\n                // \u5c06\u8ba1\u7b97\u5c5e\u6027\u6302\u8f7d\u5230data\u4e2d\\n                // \u6b64\u5904\u53ef\u4ee5\u505asetData\u52a8\u4f5c\u662f\u56e0\u4e3aobserver\u7684handlers\u4f1a\u5f3a\u5236\u5408\u5e76setDatas\u4e00\u8d77\u89e6\u53d1\\n                this.setData({\\n                  [targetField]: dataTracer.unwrap(val)\\n                });\\n\\n                // \u5c06\u8be5\u65b0\u589e\u8ba1\u7b97\u5c5e\u6027\u6dfb\u52a0\u5230watchInfo\u7684relatedPathValues\\n                // { key\uff1a\u8ba1\u7b97\u5c5e\u6027 value\uff1a\u4f9d\u8d56 }  \\n                computedWatchInfo.computedRelatedPathValues[targetField] = pathValues;\\n\\n                // setData\u89e6\u53d1\u7684\u65f6\u5019\u4f1a\u8c03\u7528\u89e6\u53d1\\n                const updateValueAndRelatedPaths = () => {\\n                  const oldPathValues = computedWatchInfo.computedRelatedPathValues[targetField];\\n\\n                  let needUpdate = false;\\n                  // \u6b64\u5904\u83b7\u53d6setData\u65f6\u5019\u8ba1\u7b97\u5c5e\u6027\u4f9d\u8d56\u7684data\u662f\u5426\u6709\u53d8\u52a8\uff0c\u6709\u7684\u8bdd\u9700\u8981\u66f4\u65b0\\n                  for (let i = 0; i < oldPathValues.length; i++) {\\n                    const { path, value:oldValue } = oldPathValues[i];\\n                    const curVal =  dataPath.getDataOnPath(this.data, path);\\n\\n                    if (oldValue !== curVal) {\\n                      needUpdate = true;\\n                      break;\\n                    }\\n                  }\\n                  if (!needUpdate) return false;\\t\\n                  \\n                  // setData\u65f6\u6709data\u66f4\u65b0\u9700\u8981\u66f4\u65b0\u8ba1\u7b97\u5c5e\u6027\uff0c\u5219\u91cd\u65b0\u8ba1\u7b97\u66f4\u65b0\u8be5\u8ba1\u7b97\u5c5e\u6027\u7684\u503c\u4ee5\u53ca\u4f9d\u8d56\u5c5e\u6027\u7684\u503c\\n                  const relatedPathValues = [];\\n                  const val = updateMethod(\\n                    dataTracer.create(this.data, relatedPathValues)\\n                  );\\n                  \\n                  this.setData({\\n                    [targetField]: dataTracer.unwrap(val)\\n                  })\\n\\n                  computedWatchInfo.computedRelatedPathValues[targetField] = relatedPathValues;\\n                  return true;\\n                }\\n\\n                computedWatchInfo.computedUpdaters.push(\\n                  updateValueAndRelatedPaths\\n                )\\n                \\n              })\\n            }\\n\\n          }\\n\\n        }\\n      });\\n\\n      // \u8ba1\u7b97\u5c5e\u6027\u4f1a\u5bf9data.** \u8fdb\u884cobserver\\n      if (computedDef) {\\n        observersItems.push({\\n          fileds: \'**\',\\n          observer(this) {\\n            if (!this._computedWatchInfo) return;\\n\\n            const computedWatchInfo = this._computedWatchInfo[computedWatchDefId];\\n\\n            if (!computedWatchInfo) return;\\n\\n            let changed = false;\\n            do {\\n              // \u67e5\u770b\u5f53\u524d\u8ba1\u7b97\u5c5e\u6027\u7684\u4f9d\u8d56\u662f\u5426\u5305\u542b\u66f4\u65b0\uff0c\u5e76\u53ca\u65f6\u66f4\u65b0\\n              changed = computedWatchInfo.computedUpdaters.some(\\n                (func) => func.call(this)\\n              );\\n            } while(changed)\\n          }\\n        })\\n      }\\n\\n      // watch\u5c5e\u6027\u4f1a\u5bf9watch\u7684\u5b57\u6bb5\u8fdb\u884cobserver\\n      if (watchDef) {\\n        Object.keys(watchDef).forEach(watchDef => {\\n          // \u83b7\u53d6\u5c5e\u6027\u89e3\u6790\u540e\u7684data\u201d\u8def\u5f84\u201c\\n          const paths = dataPath.parseMultiDataPaths(watchPath);\\n\\n          observersItems.push({\\n            fileds: watchDef,\\n            observer(this) {\\n              if (!this._computedWatchInfo) return;\\n              const computedWatchInfo = this._computedWatchInfo[computedWatchDefId];\\n              if (!computedWatchInfo) return;\\n\\n              // \u83b7\u53d6\u8001\u65e7\u5c5e\u6027\u503c\uff0c \u5e76\u66f4\u65b0\u7f13\u5b58\u4e2d\u7684\u6570\u636e\\n              const oldVal = computedWatchInfo.watchCurVal[watchPath];\\n              const originalCurValWithOptions = paths.map(({ path, options }) => {\\n                const val = dataPath.getDataOnPath(this.data, path);\\n                return { val, options };\\n              });\\n              const curVal = originalCurValWithOptions.map(({ val, options }) => \\n                options.deepComp ? deepClone(val) : val\\n              );\\n              computedWatchInfo.watchCurVal[watchPath] = curVal;\\n\\n\\n              // \u5bf9\u6bd4\u8001\u65e7\u5c5e\u6027\u503c\\n              let changed = false;\\n              for (let i = 0; i < curVal.length; i++) {\\n                const options = paths[i].options;\\n                const deepComp = options.deepComp;\\n                if (deepComp ? !deepEqual(oldVal[i], curVal[i]) : oldVal[i] !== curVal[i]) {\\n                  changed = true;\\n                  break;\\n                }\\n              }\\n\\n              if (changed) {\\n                // \u5c06watch\u7684\u5c5e\u6027\u73b0\u6709\u503c\u5168\u90e8\u4f20\u5165watch\u7684handler\u4e2d\uff0c\u5e76\u8c03\u7528\\n                watchDef[watchPath].apply(this, originalCurValWithOptions.map(({ val }) => val));\\n              }\\n            }\\n          })\\n        }) \\n      }\\n\\n      // \u76d1\u542c\u4e3b\u8981\u4f9d\u9760weapp\u7684observer\u5c5e\u6027\\n      // \u5c06observerItems\u91cc\u9762\u7684\u76d1\u542c\u6dfb\u52a0\u8fdb\u53bb\u7ec4\u4ef6\u7684observer\u5c5e\u6027\\n      if (typeof defFields.observers !== \'object\') {\\n        defFields.observers = {};\\n      }\\n      if (Array.isArray(defFields.observers)) {\\n        defFields.observers.push(...observersItems);\\n      } else {\\n        observersItems.forEach((item) => {\\n          const f = defFields.observers[item.fileds];\\n          if (!f) {\\n            defFields.observers[item.fileds] = item.observer;\\n          } else {\\n            defFields.observers[item.fileds] = function() {\\n              item.observer.call(this);\\n              f.call(this);\\n            }\\n          }\\n        })\\n      }\\n    },\\n\\n  })\\n\\n```"},{"id":"language","metadata":{"permalink":"/docSite/blog/language","editUrl":"https://github.com/shan33/docSite/tree/master/blog/\u82f1\u8bed/2021-12/16_1.md","source":"@site/blog/\u82f1\u8bed/2021-12/16_1.md","title":"A1","description":"","date":"2021-12-28T07:40:12.062Z","formattedDate":"December 28, 2021","tags":[{"label":"english","permalink":"/docSite/blog/tags/english"}],"readingTime":0,"truncated":false,"authors":[{"name":"xulanshan","title":"\u8bb2\u7a76","url":"https://github.com/shan33","imageURL":"/img/logo.png","key":"xulanshan"}],"prevItem":{"title":"miniprogram-computed\u6e90\u7801\u6ce8\u91ca","permalink":"/docSite/blog/study"},"nextItem":{"title":"\u300a\u4f60\u4e0d\u77e5\u9053\u7684javascript\u300b \u7b14\u8bb01","permalink":"/docSite/blog/note"}},"content":""},{"id":"note","metadata":{"permalink":"/docSite/blog/note","editUrl":"https://github.com/shan33/docSite/tree/master/blog/note/1.md","source":"@site/blog/note/1.md","title":"\u300a\u4f60\u4e0d\u77e5\u9053\u7684javascript\u300b \u7b14\u8bb01","description":"note \u56fe\u7247","date":"2021-12-28T07:40:11.982Z","formattedDate":"December 28, 2021","tags":[{"label":"JS","permalink":"/docSite/blog/tags/js"},{"label":"\u7b14\u8bb0","permalink":"/docSite/blog/tags/\u7b14\u8bb0"},{"label":"\u4f60\u4e0d\u77e5\u9053\u7684javascript","permalink":"/docSite/blog/tags/\u4f60\u4e0d\u77e5\u9053\u7684javascript"}],"readingTime":0.02,"truncated":false,"authors":[{"name":"xulanshan","title":"\u8bb2\u7a76","url":"https://github.com/shan33","imageURL":"/img/logo.png","key":"xulanshan"}],"prevItem":{"title":"A1","permalink":"/docSite/blog/language"},"nextItem":{"title":"\u300a\u4f60\u4e0d\u77e5\u9053\u7684javascript\u300b \u7b14\u8bb02","permalink":"/docSite/blog/note2"}},"content":"![note \u56fe\u7247](./img/JS_HS.jpg)"},{"id":"note2","metadata":{"permalink":"/docSite/blog/note2","editUrl":"https://github.com/shan33/docSite/tree/master/blog/note/2.md","source":"@site/blog/note/2.md","title":"\u300a\u4f60\u4e0d\u77e5\u9053\u7684javascript\u300b \u7b14\u8bb02","description":"note \u56fe\u7247","date":"2021-12-28T07:40:11.982Z","formattedDate":"December 28, 2021","tags":[{"label":"JS","permalink":"/docSite/blog/tags/js"},{"label":"\u7b14\u8bb0","permalink":"/docSite/blog/tags/\u7b14\u8bb0"},{"label":"\u4f60\u4e0d\u77e5\u9053\u7684javascript","permalink":"/docSite/blog/tags/\u4f60\u4e0d\u77e5\u9053\u7684javascript"}],"readingTime":0.06,"truncated":false,"authors":[{"name":"xulanshan","title":"\u8bb2\u7a76","url":"https://github.com/shan33","imageURL":"/img/logo.png","key":"xulanshan"}],"prevItem":{"title":"\u300a\u4f60\u4e0d\u77e5\u9053\u7684javascript\u300b \u7b14\u8bb01","permalink":"/docSite/blog/note"},"nextItem":{"title":"JS\u4e25\u683c\u6a21\u5f0f","permalink":"/docSite/blog/\u7b14\u8bb03"}},"content":"![note \u56fe\u7247](./img/JS\u52a8\u6001\u4fee\u6539\u4f5c\u7528\u57df.jpg)"},{"id":"\u7b14\u8bb03","metadata":{"permalink":"/docSite/blog/\u7b14\u8bb03","editUrl":"https://github.com/shan33/docSite/tree/master/blog/note/3.md","source":"@site/blog/note/3.md","title":"JS\u4e25\u683c\u6a21\u5f0f","description":"use strict","date":"2021-12-28T07:40:11.982Z","formattedDate":"December 28, 2021","tags":[{"label":"JS","permalink":"/docSite/blog/tags/js"},{"label":"\u7b14\u8bb0","permalink":"/docSite/blog/tags/\u7b14\u8bb0"},{"label":"\u4f60\u4e0d\u77e5\u9053\u7684javascript","permalink":"/docSite/blog/tags/\u4f60\u4e0d\u77e5\u9053\u7684javascript"}],"readingTime":0.14,"truncated":false,"authors":[{"name":"xulanshan","title":"\u8bb2\u7a76","url":"https://github.com/shan33","imageURL":"/img/logo.png","key":"xulanshan"}],"prevItem":{"title":"\u300a\u4f60\u4e0d\u77e5\u9053\u7684javascript\u300b \u7b14\u8bb02","permalink":"/docSite/blog/note2"},"nextItem":{"title":"setCookie","permalink":"/docSite/blog/cookie"}},"content":">use strict\\n\\n1. LHS\u627e\u4e0d\u5230\u53d8\u91cf\uff0c\u4e0d\u4f1a\u4e3b\u52a8\u65b0\u589e\uff1bReferenceError\\n2. this\u4e0d\u4f1a\u9ed8\u8ba4\u7ed1\u5b9a\u5728window/self\u7b49\uff1bthis=undefined"},{"id":"cookie","metadata":{"permalink":"/docSite/blog/cookie","editUrl":"https://github.com/shan33/docSite/tree/master/blog/note/cookie.md","source":"@site/blog/note/cookie.md","title":"setCookie","description":"debug setCookie\u6d4b\u8bd5\u73af\u5883\u4e3a\u7a7a\u4e86...","date":"2021-12-28T07:40:11.982Z","formattedDate":"December 28, 2021","tags":[{"label":"JS","permalink":"/docSite/blog/tags/js"},{"label":"\u7b14\u8bb0","permalink":"/docSite/blog/tags/\u7b14\u8bb0"},{"label":"\u4f60\u4e0d\u77e5\u9053\u7684javascript","permalink":"/docSite/blog/tags/\u4f60\u4e0d\u77e5\u9053\u7684javascript"}],"readingTime":0.065,"truncated":false,"authors":[{"name":"xulanshan","title":"\u8bb2\u7a76","url":"https://github.com/shan33","imageURL":"/img/logo.png","key":"xulanshan"}],"prevItem":{"title":"JS\u4e25\u683c\u6a21\u5f0f","permalink":"/docSite/blog/\u7b14\u8bb03"},"nextItem":{"title":"finally...","permalink":"/docSite/blog/life"}},"content":">debug setCookie\u6d4b\u8bd5\u73af\u5883\u4e3a\u7a7a\u4e86...\\n\\n\u6655\u4e86\u6655\u4e86"},{"id":"life","metadata":{"permalink":"/docSite/blog/life","editUrl":"https://github.com/shan33/docSite/tree/master/blog/2021-12-16/code.md","source":"@site/blog/2021-12-16/code.md","title":"finally...","description":"\u7ec8\u4e8e\u641e\u5b9a\u4e86github page; \u914d\u7f6e\u5b8c\u6210\u4e86github actions~","date":"2021-12-16T00:00:00.000Z","formattedDate":"December 16, 2021","tags":[{"label":"dailylife","permalink":"/docSite/blog/tags/dailylife"}],"readingTime":0.135,"truncated":false,"authors":[{"name":"xulanshan","title":"\u8bb2\u7a76","url":"https://github.com/shan33","imageURL":"/img/logo.png","key":"xulanshan"}],"prevItem":{"title":"setCookie","permalink":"/docSite/blog/cookie"},"nextItem":{"title":"\u968f\u60f3","permalink":"/docSite/blog/welcome"}},"content":"\u7ec8\u4e8e\u641e\u5b9a\u4e86github page; \u914d\u7f6e\u5b8c\u6210\u4e86github actions~~~\\n\u62e5\u6709\u4e86\u81ea\u5df1\u7684\u4e00\u7247\u65b0\u5929\u5730~\\naha ~~~"},{"id":"welcome","metadata":{"permalink":"/docSite/blog/welcome","editUrl":"https://github.com/shan33/docSite/tree/master/blog/2021-11-29-tip/index.md","source":"@site/blog/2021-11-29-tip/index.md","title":"\u968f\u60f3","description":"\u65e0\u804a\u8bb0\u4e8b\uff1a \u4eca\u5929\u676d\u5dde\u53c8\u4e0b\u96e8\u4e86~","date":"2021-11-29T00:00:00.000Z","formattedDate":"November 29, 2021","tags":[{"label":"dailylife","permalink":"/docSite/blog/tags/dailylife"}],"readingTime":0.06,"truncated":false,"authors":[{"name":"xulanshan","title":"\u8bb2\u7a76","url":"https://github.com/shan33","imageURL":"/img/logo.png","key":"xulanshan"}],"prevItem":{"title":"finally...","permalink":"/docSite/blog/life"}},"content":"\u65e0\u804a\u8bb0\u4e8b\uff1a \u4eca\u5929\u676d\u5dde\u53c8\u4e0b\u96e8\u4e86~"}]}')}}]);