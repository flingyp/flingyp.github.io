# ES6 语法

## ES6 解构赋值+扩展运算符

### 数组的解构赋值

#### 基础

```js
let arr = [0, 1, 2];
let [a, b, c] = arr;
console.log(a, b, c); // 0 1 2
```

- 但是很多时候，数据并非一一对应的，并且我们希望得到一个默认值

```js
let arr = [, 1, 2];
let [a = "我是默认值", b, c] = arr;
console.log(a); // '我是默认值'
console.log(b); // 1
console.log(c); // 2
// 从这个例子可以看出，在解构赋值的过程中，a=undefined时，会使用默认值
// 那么当a=null时呢？当a=null时，那么a就不会使用默认值，而是使用null
```

#### 解构赋值-数组的拼接

```js
let a = [0, 1, 2];
let b = [3, 4, 5];
// 第一种： concat 方法
let c = a.concat(b);
console.log(c); // [0,1,2,3,4,5]
// 第二种： 解构赋值
let d = [...a, ...b];
console.log(d); // [0,1,2,3,4,5]
```

#### 解构赋值-数组的克隆

```js
// 数组的克隆
// 假如我们简单地把一个数组赋值给另外一个变量
let a = [0, 1, 2, 3];
let b = a;
b.push(4);
console.log(a); // [0,1,2,3,4]
console.log(b); // [0,1,2,3,4]
// 因为这只是简单的把引用地址赋值给b，而不是重新开辟一个内存地址，所以
// a和b共享了同一个内存地址，该内存地址的更改，会影响到所有引用该地址的变量
// 那么用下面的方法，把数组进行克隆一份，互不影响

let a = [0, 1, 2, 3];
let b = [...a];
b.push(4);
console.log(a); // [0,1,2,3]
console.log(b); // [0,1,2,3,4]
```

### 对象的解构赋值

> 对象的解构赋值和数组的解构赋值其实类似，但是数组的数组成员是有序的
> 而对象的属性则是无序的，所以对象的解构赋值简单理解是等号的左边和右边的结构相同

#### 基础

```js
let { name, age } = { name: "yp", age: 21 };
console.log(name); // 'yp'
console.log(age); // 21
// 对象的解构赋值是根据 key 值进行匹配
```

注： 如果变量已提前声明了

```js
let name, age;
// 需要用圆括号，包裹起来
({ name, age } = { name: "yp", age: 21 });
console.log(name); // 'yp'
console.log(age); // 21
```

- 对象解构赋值也可以设置默认值

```js
let { name = "yp", age } = { age: 21 };
console.log(name); // 'yp'
console.log(age); // 21
// 这里规则和数组的解构赋值一样，当name = undefined时，则会使用默认值
```

### 扩展运算符

```js
function sum(...args) {
  // 使用...扩展运算符
  console.log(args); // [ 1, 2, 3, 4, 5, 6 ] args是一个数组
  return eval(args.join("+"));
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
```

```js
// 正确的写法 扩展运算符只能放在最后一个参数
function sum(a,b,...args){
    console.log(a) // 1
    console.log(b) // 2
    console.log(args) // [ 3, 4, 5, 6 ]
}

sum(1,2,3,4,5,6)

// 错误的写法 扩展运算符只能放在最后一个参数
function sum(...args,a,b){
    // 报错
}

sum(1,2,3,4,5,6)
```

> 可以对比下扩展运算符的方便之处

```js
// 以往我们是这样拼接数组的
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 现在我们用扩展运算符看看
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]
```

```js
// 扩展运算符可以把argument转为数组
function max() {
  console.log(arguments); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
  let arr = [...arguments];
  console.log(arr); // [1,2,3,4,5,6]
}

max(1, 2, 3, 4, 5, 6);

// 但是扩展运算符不能把伪数组转为数组（除了有迭代器iterator的伪数组，如arguments）
let likeArr = { 0: 1, 1: 2, length: 2 };
let arr = [...likeArr]; // 报错 TypeError: likeArr is not iterable

// 但是可以用Array.from把伪数组转为数组
let likeArr = { 0: 1, 1: 2, length: 2 };
let arr = Array.from(likeArr);
console.log(arr); // [1,2]
```

#### 对象也可以使用扩展运算符

```js
// 使用扩展运算符
let name = { name: "yepeng" };
let age = { age: 28 };
let person = { ...name, ...age };
console.log(person); // { name: 'yepeng', age: 28 }
```

## Array

### ES5 中遍历数组的方式

```js
let arr = [1, 2, 3, 2, 4];
```

#### for 循环

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

#### forEach()

> 没有返回值， 只是每个元素都会调用 function

注意： forEach 的代码块中不能使用 **break、continue**，它会抛出异常

```js
[1, 2, 3, 4, 5].forEach(function (i) {
  if (i === 2) {
    return;
  } else {
    console.log(i);
  }
});
```

#### map()

> 返回新的数组， 每个元素为调用 function 的结果

```js
let result = arr.map(function (value) {
  value += 1;
  console.log(value);
  return value;
});
console.log(arr, result);
```

#### filter()

> 返回符合 function 条件的元素数组

```js
let result = arr.filter(function (value) {
  console.log(value);
  return value == 2;
});
console.log(arr, result);
```

#### some()

> 返回 boolean，判断是否有元素符合 func 条件

```js
let result = arr.some(function (value) {
  console.log(value);
  return value == 4;
});
console.log(arr, result);
```

#### every()

> 返回 boolean，判断每个元素都符合 func 条件, 元素都符合 返回 true ，有一个不符合就返回 false

## Function

### 默认参数

> 对于函数而言经常会用到参数。 在 ES5 的时候关于参数的默认值通常都是写在函数体中。但在 ES6 改变了这种写法。

```js
function foo(x, y = "world") {
  console.log(x, y);
}
foo("hello", 0);
```

如果想让具体的某个参数使用默认值，我们可以在调用函数时使用 undefined 进行赋值。

```js
function f(x, y = 7, z = 42) {
  return x + y + z;
}
console.log(f(1, undefined, 43)); // 51
```

在 ES6 中我们不仅可以给参数默认赋值具体的数值，同时参数赋值支持参数的逻辑运算进行赋值。

```js
function f(x, y = 7, z = x + y) {
  return z * 0.5;
}
console.log(f(1, 7)); // 4
```

### Length 属性

> 函数也有 Length 属性了， 将返回没有指定默认值的参数的个数

```js
function foo(x = 1, y = 2, z = 3) {
  console.log(x, y);
}
console.log(foo.length);
// 0
```

## Object

### 属性名表达式

> ES6 可以使用变量名 或者 表达式 来定义 Object 的 Key 名

```js
let name = "school";
let obj = {
  [name]: "ok",
  foo: "bar",
};
```

### Object.assign()

> Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。

```js
const target = {
  a: 1,
  b: 2,
};
const source = {
  b: 4,
  c: 5,
};

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

### 对象的遍历方式

怎么能够遍历出对象的每个 key 和 value 的值？

#### for...in

> 用于遍历对象的，不能遍历数组

```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

#### Object.keys()

> 用于返回对象所有 key 组成的数组。

```js
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
```

#### Object.getOwnPropertyNames()

> 用于返回对象所有 key 组成的数组。

```js
Object.getOwnPropertyNames(obj).forEach((key) => {
  console.log(key, obj[key]);
});
```

#### Reflect.ownKeys()

> 用于返回对象所有 key 组成的数组。

```js
Reflect.ownKeys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
```

## Class

### 声明类

首先先来说明在 JavaScript 世界里如何声明一个 “类”。在 ES6 之前都是这么做的：

```js
let Animal = function (type) {
  this.type = type;
  this.walk = function () {
    console.log(`I am walking`);
  };
};
let dog = new Animal("dog");
let monkey = new Animal("monkey");
// 定义了一个叫 Animal 的类
// 类中声明了一个属性 type、一个方法 walk
// 然后通过 new Animal 这个类生成实例
// 完成了类的定义和实例化
```

在 ES6 中类的定义就更专业化了，不需要 function 的方式了

```js
class Animal {
  constructor(type) {
    this.type = type;
  }
  walk() {
    console.log(`I am walking`);
  }
}
let dog = new Animal("dog");
let monkey = new Animal("monkey");
```

### constructor 方法

> constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}
// ES6 的类，完全可以看作构造函数的另一种写法
console.log(typeof Point); // "function"
Point === Point.prototype.constructor; // true
```

- constructor 方法 是构造方法
- this 指的是创建实例类对象

### prototype

构造函数的 prototype 属性，在 ES6 的“类”上面继续存在。
事实上，类的所有方法都定义在类的 prototype 属性上面

```js
class Point {
  constructor() {
    // ...
  }
  toString() {
    // ...
  }
  toValue() {
    // ...
  }
}
// (在类的实例上面调用方法，其实就是调用原型上的方法)
// 等同于
Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
```

### 静态方法

> 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

```js
class Foo {
  static classMethod() {
    return "hello";
  }
}
Foo.classMethod(); // hello
let foo = new Foo();
foo.classMethod(); // // TypeError: foo.classMethod is not a function
```

- 注意，如果静态方法包含 this 关键字，这个 this 指的是类，而不是实例。

- 父类的静态方法，可以被子类继承

```js
class Foo {
  static classMethod() {
    return "hello";
  }
}

class Bar extends Foo {}

Bar.classMethod(); // 'hello'
```

## Symbol

> ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）

Symbol 值通过 Symbol 函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突

### 声明方式

```js
let s = Symbol();
typeof s; // Symbol
```

变量 s 就是一个独一无二的值。typeof 的结果说明 s 是 Symbol 数据类型。

既然是独一无二的，那么两个 Symbol()就一定是不相等的：

```js
let s1 = Symbol();
let s2 = Symbol();
console.log(s1);
console.log(s2);
console.log(s1 === s2); // false
```

注意：
Symbol 函数不能使用 new 命令，不然就会报错

### Symbol.for()

> Symbol.for() 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

```js
let s1 = Symbol.for("foo");
let s2 = Symbol.for("foo");
console.log(s1 === s2); // true
```

**注意：**

Symbol.for()与 Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的 key 是否已经存在，如果不存在才会新建一个值

### Symbol.keyFor()

> Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的 key。

```js
const s1 = Symbol("foo");
console.log(Symbol.keyFor(s1)); // undefined
const s2 = Symbol.for("foo");
console.log(Symbol.keyFor(s2)); // foo
```

### 作为属性名

由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

比如在一个班级中，可能会有同学名字相同的情况，这时候使用对象来描述学生信息的时候，如果直接使用学生姓名作为 key 会有有问题。

```js
const grade = {
  张三: {
    address: "xxx",
    tel: "111",
  },
  李四: {
    address: "yyy",
    tel: "222",
  },
  李四: {
    address: "zzz",
    tel: "333",
  },
};
console.log(grade);
// 只会保留最后一个李四
```

如果使用 Symbol，同名的学生信息就不会被覆盖：

```js
const stu1 = Symbol("李四");
const stu2 = Symbol("李四");
const grade = {
  [stu1]: {
    address: "yyy",
    tel: "222",
  },
  [stu2]: {
    address: "zzz",
    tel: "333",
  },
};
console.log(grade);
console.log(grade[stu1]);
console.log(grade[stu2]);
```
