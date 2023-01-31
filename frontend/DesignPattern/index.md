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
class Xiaoming {
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

const xiaoMing = new Xiaoming();
const xiaoHong = new XiaoHong(new Jack());
const communication = new Communication();
communication.speak(xiaoming);
communication.speak(xiaoHong);
```
