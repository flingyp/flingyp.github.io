# JavaScript 设计模式

设计模式是在解决问题的时候针对特定问题**给出的简洁而优化的处理方案**

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
