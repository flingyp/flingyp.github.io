# JavaScript 设计模式

设计模式是在解决问题的时候针对特定问题**给出的简洁而优化的处理方案**

- [参考文章](https://juejin.cn/post/7072175210874535967#heading-25)

## 构造器模式

```ts
class Employee {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(this);
  }
}

// 通过构造器来创建多个不同的实例
const employeeOne = new Employee("flingyp", 23);
const employeeTwo = new Employee("Tom", 20);
```

## 工厂模式

由一个工对象决定创建某一种产品对象类的实例。主要用来创建同一类对象

```ts
class User {
  role;
  pages;
  constructor(role, pages) {
    this.role = role;
    this.pages = pages;
  }
  // 工厂函数，用于创建User实例
  static UserFactory(role) {
    switch (role) {
      case "Super-Admin":
        return new User("Super-Admin", [
          "Home",
          "User-Manage",
          "Right-Manage",
          "News-Manage",
        ]);
        break;
      case "Admin":
        return new User("Admin", ["Home", "User-Manage", "News-Manage"]);
        break;
      case "Editor":
        return new User("Editor", ["Home", "News-Manage"]);
        break;
      default:
        throw new Error("参数错误");
    }
  }
}

const SuperAdmin = User.UserFactory("Super-Admin");
console.log(SuperAdmin);
```

简单工厂模式的优点在于，你只需要一个正确的参数，就可以获取到你所需要的对象，而无需知道其创建的具体细节。但是在函数内包含了所有对象的创建逻辑和判断逻辑的代码，每增加新的构造函数还需要判断逻辑代码。当我们的对象不是上面的三个而是 10 个或者更多，这个函数会变成一个庞大的超级函数，使得难以维护。所以，简单工厂只能作**用于创建的对象数量较少，对象的创建逻辑不复杂时使用**

## 抽象工厂模式

抽象工厂模式并不直接生成实例，而是用于对产品类的创建

```ts
class User {
  role;
  pages;
  constructor(name, role, pages) {
    this.name = name;
    this.role = role;
    this.pages = pages;
  }
  welcome() {
    console.log("welcome->", this.name);
  }
  dataShow() {
    console.log("dataShow->", this.name);
  }
}

class SuperAdmin extends User {
  constructor(name) {
    super(name, "Super-Admin", [
      "Home",
      "User-Manage",
      "Right-Manage",
      "News-Manage",
    ]);
  }

  dataShow() {
    console.log("dataShow-Super-Admin", this.name);
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "Admin", ["Home", "User-Manage", "News-Manage"]);
  }

  dataShow() {
    console.log("dataShow-Admin", this.name);
  }
}

class Editor extends User {
  constructor(name) {
    super(name, "Editor", ["Home", "News-Manage"]);
  }

  dataShow() {
    console.log("dataShow-Editor", this.name);
  }
}
// 抽象工厂模式：是根据具体业务定义产品类，并且根据参数返回产品类而不是返回对应的产品类实例
const getAbstractUserFactory = (role) => {
  switch (role) {
    case "Super-Admin":
      return SuperAdmin;
      break;
    case "Admin":
      return Admin;
      break;
    case "Editor":
      return Editor;
    default:
      throw new Error("参数错误");
  }
};

const SuperAdminClass = getAbstractUserFactory("Super-Admin");
console.log(SuperAdminClass);
```

## 建造者模式

**建造者模式** 属于创建型模式的一种，提供一种创建复杂对象的方式。它将一个复杂的对象的构建与它表示分离，使得同样的构建过程可以创建不同的表示。

建造者模式是一步一步的创建一个复杂的对象，它允许用户只通过指定复杂的对象的类型和内容就可以构建它们，用户不需要指定内部的具体构造细节。

```ts
class NavBar {
  init() {
    console.log("NavBar-Init");
  }

  getData() {
    console.log("NavBar-GetData");
  }

  render() {
    console.log("NavBar-Render");
  }
}

class List {
  init() {
    console.log("List-Init");
  }

  getData() {
    console.log("List-GetData");
  }

  render() {
    console.log("List-Render");
  }
}
// 建造者模式关心的是整个实例化的过程
class Creator {
  async startBuild(builder) {
    await builder.init();
    await builder.getData();
    await builder.render();
  }
}

const op = new Creator();
op.startBuild(new NavBar());
op.startBuild(new List());
```

建造者模式将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。工厂模式主要是为了创建对象实例或类（抽象工厂），关心的是最终产物是什么，而不关心创建的过程。而建造者模式关心的是创建这个对象的整个过程，甚至于创建对象的每一个细节

## 单例模式

**单例模式** 保证一个类只能被**实例化一次**，每次获取的时候，如果类已经创建过则直接返回该实例，否则创建实例保存并返回

单例模式的核心就是创建一个唯一的对象，而在 JavaScript 中创建一个唯一的对象太简单了，为了获取一个对象而去创建一个类有点多此一举。如 `const obj = {}`，obj 就是独一无二的一个对象，在全局作用域的声明下，可以在任何地方对它访问，这就满足了单例模式的条件

**优点**：内存中只有一个实例，减少了内存的开销。 避免了资源多重的占用

**缺点**：违反单一职责，一个类应该只关心内部逻辑，而不用关系外部的实现

**例子**：我们常见到的弹窗，要么显示要么隐藏，不可能同时出现两个弹窗，下面我们通过一个类来模拟弹窗

```ts
class ModalFrame {
  static instance = null;
  constructor(state) {
    this.state = state;
  }
  show() {
    if (this.state === "show") {
      console.log("弹窗已显示");
      return;
    }
    this.state = "show";
    console.log("弹窗展示成功");
  }
  hide() {
    if (this.state === "hide") {
      console.log("弹窗已隐藏");
      return;
    }
    this.state = "hide";
    console.log("弹窗隐藏成功");
  }
  static getInstance(state) {
    if (!this.instance) {
      this.instance = new ModalFrame(state);
    }
    return this.instance;
  }
}
```

## 适配器模式

适配器模式的目的是为了解决对象之间的接口不兼容的问题，通过适配器模式可以不更改源代码的情况下，让两个原本不兼容的对象在调用时正常工作

**优点**：让任何两个没有关联的类可以同时有效运行，并且提高了复用性、透明度、以及灵活性

**缺点**：过多的使用适配器模式，会让系统变得零乱，不易整体把控。建议在无法重构的情况下使用适配器

**例子**：拿一个现实中的例子来说，杰克只会英语，小明只会中文，它们在交流上出现了障碍，小红同时会中英双语，通过小红将杰克的英语翻译成中文，让小明和杰克进行无障碍的沟通，这里小红就起到了适配器的角色。

```ts
class Jack {
  english() {
    return "I speak English";
  }
}
class XiaoMing {
  chinese() {
    return "我只会中文";
  }
}
// 适配器
class XiaoHong {
  constructor(person) {
    this.person = person;
  }
  chinese() {
    return `${this.person.english()} 翻译： "我会说英语"`;
  }
}
class Communication {
  speak(language) {
    console.log(language.chinese());
  }
}

const xiaoMing = new XiaoMing();
const xiaoHong = new XiaoHong(new Jack());
const communication = new Communication();
communication.speak(xiaoMing);
communication.speak(xiaoHong);
```

## 装饰器模式

装饰者模式能够在不更改源代码自身的情况下，对其进行职责添加。相比于继承装饰器的做法更轻巧。通俗的讲我们给心爱的手机上贴膜，带手机壳，贴纸，这些就是对手机的装饰

**优点**：装饰类和被装饰类它们之间可以相互独立发展，不会相互耦合，装饰器模式是继承的一个替代模式，它可以动态的扩展一个实现类的功能

**缺点**：多层的装饰会增加复杂度

**例子**：在编写飞机大战的游戏中，飞机对象的攻击方式只有普通子弹攻击，如何在不更改原代码的情况下，添加其他的攻击方式，如激光武器，导弹武器

```ts
class Aircraft {
  ordinary() {
    console.log("发射普通子弹");
  }
}
class AircraftDecorator {
  constructor(aircraft) {
    this.aircraft = aircraft;
  }
  laser() {
    console.log("发射激光");
  }
  guidedMissile() {
    console.log("发射导弹");
  }
  ordinary() {
    this.aircraft.ordinary();
  }
}
const aircraft = new Aircraft();
const aircraftDecorator = new AircraftDecorator(aircraft);
aircraftDecorator.ordinary(); // 发射普通子弹
aircraftDecorator.laser(); // 发射激光
aircraftDecorator.guidedMissile(); // 发射导弹
// 可以看到在不更改源代码的情况下对它进行了装饰扩展
```

## 代理模式

代理模式的关键是，当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。替身对象对请求做出一些处理之后，再把请求转交给本体对象

代理和本体接口需要一致性，代理和本体之间可以说是鸭子类型的关系，不在乎他怎么实现的，只要它们之间暴露的方法一致既可

**优点**：职责清晰，高扩展性，智能化

**缺点**：当对象和对象之间增加了代理可能会影响到处理的速度。实现代理需要额外的工作，有些代理会非常的复杂。

**例子**：都知道，领导拥有公司的最高权限，假设公司有员工 100 个，如果每个人都去找领导去处理事务，那领导肯定会崩溃，因此领导招聘了一个秘书帮他收集整理事务，秘书会在合适时间一次性将需要处理的业务交给老板处理，在这里秘书就是领导的一个代理角色

```ts
// 员工
class Staff {
  constructor(affairType) {
    this.affairType = affairType;
  }
  applyFor(target) {
    target.receiveApplyFor(this.affairType);
  }
}
// 秘书
class Secretary {
  constructor() {
    this.leader = new Leader();
  }
  receiveApplyFor(affair) {
    this.leader.receiveApplyFor(affair);
  }
}
//领导
class Leader {
  receiveApplyFor(affair) {
    console.log(`批准:${affair}`);
  }
}

const staff = new Staff("升职加薪");
staff.applyFor(new Secretary()); // 批准:升职加薪
```

## 外观模式

外观模式本质就是封装交互，隐藏系统的复杂性，提供一个可以访问的接口。由一个将子系统一组的接口集成在一起的高层接口，以提供一个一致的外观，减少外界与多个子系统之间的直接交互，从而更方便的使用子系统

**优点**：减少系统的相互依赖，以及安全性和灵活性

**缺点**：违反开放封闭原则，有变动的时候更改会非常麻烦，即使继承重构都不可行

**例子**：外观模式经常被用于处理高级游览器的和低版本游览器的一些接口的兼容处理

```ts
function addEvent(el, type, fn) {
  if (el.addEventlistener) {
    // 高级浏览器添加事件DOM API
    el.addEventlistener(type, fn, false);
  } else if (el.attachEvent) {
    // 低版本浏览器的添加事件API
    el.attachEvent(`on${type}`, fn);
  } else {
    //其他
    el[type] = fn;
  }
}
```

另一种场景，在某个函数中的某个参数可传可不传的情况下，通过函数重载的方式，让传参更灵活

```ts
function bindEvent(el, type, selector, fn) {
  if (!fn) {
    fn = selector;
  }
  // 其他代码
  console.log(el, type, fn);
}
bindEvent(document.body, "click", "#root", () => {});
bindEvent(document.body, "click", () => {});
```

## 发布订阅模式

发布订阅又称观察者模式，它定义对象之间的 1 对 N 的依赖关系，当其中一个对象发生变化时，所有依赖于它的对象都会得到通知

发布订阅模式经常出现在我们的工作场景中，如：当你给 DOM 绑定一个事件就已经使用了发布订阅模式，通过订阅 DOM 上的 click 事件，当被点击时会向订阅者发布消息

**优点**：观察者和被观察者它们之间是抽象耦合的。并且建立了触发机制

**缺点**：当订阅者比较多的时候，同时通知所有的订阅者可能会造成性能问题。在订阅者和订阅目标之间如果循环引用执行，会导致崩溃。发布订阅模式没有办法提供给订阅者所订阅的目标它是怎么变化的，仅仅只知道它变化了。

**例子**：比喻前段时间的冬奥会，项目还没有开始的时候可以提前预定，等到项目快开始的时，APP 会提前给我们发送通知即将开始的项目，而没到时间的不通知，另外在项目还没有开始的时候，可以取消订阅避免接受到通知。根据这个需求我们来写一个例子吧

```ts
class Subject {
  constructor() {
    this.observers = {};
    this.key = "";
  }
  add(observer) {
    const key = observer.project;
    if (!this.observers[key]) {
      this.observers[key] = [];
    }
    this.observers[key].push(observer);
  }
  remove(observer) {
    const _observers = this.observers[observer.project];
    console.log(_observers, 11);
    if (_observers.length) {
      _observers.forEach((item, index) => {
        if (item === observer) {
          _observers.splice(index, 1);
        }
      });
    }
  }
  setObserver(subject) {
    this.key = subject;
    this.notifyAllObservers();
  }
  notifyAllObservers() {
    this.observers[this.key].forEach((item, index) => {
      item.update();
    });
  }
}

class Observer {
  constructor(project, name) {
    this.project = project;
    this.name = name;
  }
  update() {
    console.log(
      `尊敬的:${this.name} 你预约的项目：【${this.project}】 马上开始了`
    );
  }
}

const subject = new Subject();
const xiaoming = new Observer("滑雪", "xiaoming");
const A = new Observer("大跳台", "A");
const B = new Observer("大跳台", "B");
const C = new Observer("大跳台", "C");
subject.add(xiaoming);
subject.add(A);
subject.add(B);
subject.add(C);
subject.remove(B); // 取消订阅
subject.setObserver("大跳台");
/** 执行结果
 * 尊敬的:A 你预约的项目：【大跳台】 马上开始了
 * 尊敬的:C 你预约的项目：【大跳台】 马上开始了
 */
```
