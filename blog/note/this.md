---
slug: 笔记4
title: this相关
authors: [xulanshan]
tags: ['JS', '笔记', '你不知道的javascript']
---

>this

### this绑定规则
1. 默认绑定(函数直接使用不带任何修饰的函数引用进行调用)
2. 隐式绑定(调用位置是否有上下文对象)

>隐式丢失
```javascript
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo;
var a = 'global';
bar(); // global
```

3. 显式绑定(apply,bind,call...)
4. new绑定
> 1. 创建一个新的对象
> 2. 对新的对象执行【原型】绑定
> 3. 新对象会绑定到函数调用的this
> 4. 如果函数没有返回其他对象，那么new表达式函数调用会返回这个新的对象

### 判断this
1. 函数是否在new中调用（new绑定）？是的话this绑定的是新创建的对象；
``` javascript
var bar = new foo();
```

2. 函数是否通过call、apply显式绑定或者硬绑定调用？是的话，this绑定的是指定的对象。
```javascript
var bar = foo.call(obj1);
```

3. 函数是否在某个上下文对象中调用（隐式绑定）？是的话，this绑定的是上下文对象。
```javascript
var bar = obj1.foo();
```

4. 都不是，使用默认绑定；严格模式下，绑定undefined，否则绑定到全局对象。
```javascript
var bar = foo();
```


