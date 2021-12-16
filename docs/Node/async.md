---
sidebar_position: 1
---

# CommonJS / AMD / CMD

事件驱动的非阻塞I/O

---
## CommonJS
## Module
``` JavaScript
    function Module(id, parent) {
        this.id = id;
        this.exports = {};
        this.parent = parent;
        if (parent && parent.children) {
            parent.children.push(this);
        }
        
        this.filename = null;
        this.loaded = false;
        this.children = [];
    }
    
```
---
## Module Compile
1.  定位具体文件之后，node会新建一个模块对象
2.  根据路径载入；
    2.1 .js  fs模块同步读取文件后编译执行
    2.2 .node 通过dlopen()加载最后编译的文件
    2.3 .json 通过fs模块同步读取文件，当做js载入
    2.4 others 当作js载入

*module._extension会赋值给require()的extensions属性。（require.extensions打印）*

### JS 模块编译
Node对获取的Javascript文件内容进行头尾包装
HEAD:
``` JavaScript
(function (exports, require, module, __filename, __dirname) {
    var Math = require('math');
    exports.area = function (radius) {
        return Math.PI * radius * radius;
    }
});
```
TAIL: 添加\n

包装之后通过vm原生模块的runInThisContext()方法执行（类似eval),返回一个具体的function对象；
将当前模块的exports属性、require方法、module（self)以及文件定位完整文件路径和文件目录作为参数传递给此function执行；
模块的exports属性被返回给了调用方；

***module.exports迂回的方案不改变形参的引用；***

**编译json文件：** fs同步模块读取json文件内容之后，调用JSON.parse()方法得到对象，然后将其赋值给模块的exports，供外部使用；

--- 
### 核心模块编译
#### 1.1 转存为C/C++代码
V8附带的js2c.py工具；将内置的JS代码src/node.js,lib/*.js转换为C++的数组，生成node_natives.h头文件；
此过程中，JS代码以字符串的形式存储在node命名空间中，是不可直接执行的；
启动NODE, JS代码直接加载进内存中；加载的过程中，JS核心模块经历标识符分析后直接定位到内存中，比普通的文件模块从磁盘中一处一处查看要快很多；

#### 1.2 编译JS核心模块
引入JS核心模块过程中，也经历了头尾包装过程，然后执行和到处exports对象。
**区别：**  *获取源代码的方式（核心模块从内存中加载），缓存执行结果的位置。*

**源文件通过process.binding('natives')取出，编译成功的模块缓存到NativeModule._cache对象上，文件模块则缓存到Module._cache对象上**

``` JavaScript
    function NativeModule(id) {
        this.filename = id + 'js';
        this.id = id;
        this.exports =  {};
        this.loaded = false;
    }
    NativeModule._source = process.binding('natives');
    NativeModule._cache = {};
```

----

### AMD
>CommonJS一个延伸。 define(id?, dependencies?, factory);  factory内容（实际代码内容）,声明模块时候指定所有依赖，形参传递
``` JavaScript
// define显示定义模块（作用域隔离) Node隐式声明  return导出
define([xx, xx], function(){
    const exports = {};
    exports.xxx = xxx;
    
    return exports;
})

```

----

### CMD
>define(factory)
``` JavaScript
// 支持动态获取模块
define(function(require, exports, module) {
    
})
```

----

### 兼容多种模块规范
``` JavaScript
(function (name, definition) {
    // 检测上下文环境是否为AMD/CMD
    let hasDefine = typeof define === 'function',
    // 检测上下文环境是否为Node
        hasExports = typeof module !== 'undefined' && module.exports;
    
    if (hasDefine) {
        define(definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})('hello', function() {
    let hello = function() {};
    return hello;
})
```
