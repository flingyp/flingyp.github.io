# Dart 基础语法

## 基础数据类型

```dart
void main(){
  // 数字类型
  int age = 2;  // 整型 age，表示年龄的数值
  double weight = 4.5; // 浮点型 weight，表示体重的数值

  // 字符串类型
  String hello1 = 'Hello, World!';
  String hello2 = "Hello, Flutter!";
  print(hello1 + hello2);

  // 通过 $变量名 可以在字符串内插入变量值
  double a = 2.3;
  double b = 4.5;
  double c = 2.5;
  double avg = (a + b + c) / 3;
  String output = '$a,$b,$c 的平均值是$avg';
  print(output);

  // 另外，也可以通过 ${表达式} 来嵌入表达式
  String output = '$a,$b,$c 的平均值是${(a + b + c) / 3}';

  // 布尔类型
  bool enable = true;  // 直接赋值
  double height = 1.18;
  bool free = height < 1.2;  // 布尔值可以通过运算获得
}
```

## 函数的定义和使用

```dart
double bmi(double height, double wight) {
  double result = wight / (height * height);
  return result;
}
```

### 命名参数

有些时候，函数的参数过多，在调用时需要记清顺序，是比较麻烦的。Dart 中支持命名参数，可以通过参数的名称来传参，不需要在意入参的顺序。通过 `{}` 包裹命名的参数，其中 required 关键字表示该入参必须传入; 另外，可以用 `=` 提供参数的默认值，使用者在调用时可以选填：

```dart
double bmi({required double height, double weight = 65}) {
  double result = weight / (height * height);
  return result;
}

void main() {
  double ll = bmi(weight: 70, height: 1.8);
  double ls = bmi(height: 1.79);
  double wy = bmi(height: 1.69, weight: 50);
}
```

### 位置参数

方括号 `[]` 包围参数列表，位置参数可以给默认值。在使用时必须要按照参数顺序传入，它和普通参数列表的区别在于：在调用时，可以省略若干个参数，省略的参数使用默认值：

```dart
double bmi([double height = 1.79, double weight = 65]) {
  double result = weight / (height * height);
  return result;
}

void main() {
  double ll = bmi(1.8,70);
  double ls = bmi();
  double wy = bmi(1.69);
}
```

## 面向对象

通过 `class` 关键字来定义一个类型，`{}` 内是类的具体内容；其中可以定义若干个属性，也称之为 成员属性

```dart
class Human {
  String name;
  int age;
  double height;

  // 构造函数
  Person(String name,int age,double height){
    this.name = name;
    this.age = age;
    this.height = height;
  }
  <!-- Person(this.name, this.age, this.height); -->

  // 方法
  void sayHello() {
    print('Hello, my name is $name, I\'m $age years old, and my height is $height');
  }
}

void main() {
  Person ll = Person('ll', 18, 1.8);
  ll.sayHello();
}
```

### 继承

通过 `extends` 关键字来继承一个类，子类会继承父类的所有属性和方法，子类也可以重写父类的方法。

在 Student 类中可以定义额外的成员属性 school， 另外 `super.name` 语法是：在入参中为父类中的成员赋值。

```dart
class Student extends Human {
  final String school;

  Student(super.name, super.weight, super.height, { required this.school });
}

void main() {
  Student ll = Student("测试", 70, 180,school: "XXXXX");
  print(ll.bmi());
}
```

注: 通过 `super`。 可调用父类方法; 一般子类覆写方法时，加 `@override` 注解进行示意 (非强制)

```dart
class Student extends Human {

  // 略同...

  @override
  String info() {
    String info = super.info() + "school: $school ";
    return info;
  }

}

void main() {
  Student ll = Student("测试", 70, 180,school: "XXXXX");
  print(ll.info());
}
```

## 聚合类型

### 列表 List

列表类型中可以盛放若干个同类型的对象，并且允许重复。在声明列表对象时，其中盛放的对象类型放在 `<>` 中，我们称之为 泛型 。如下定义 int 泛型的列表，就表示列表中只能盛放整数数据；可以通过 `[]` 便捷的创建列表对象，其中盛放初始的数据：

```dart
List<int> numList = [1,9,9,4,3,2,8];
```

### 集合 Set

集合类型也可以盛放若干个同类型的对象，它最大的区别是 不允许重复 ，它同样也支持一个泛型。如下定义 int 泛型的集合，就表示列表中只能盛放整数数据；可以通过 `{}` 便捷的创建集合对象，其中盛放初始的数据。

```dart
Set<int> numSet = {1, 9, 9, 4};
print(numSet); // 输出：{1, 9, 4}
```

集合最重要的特征是可以进行集合间的运算，这点 List 列表是无法做到的。两个集合间通过 difference、union 、intersection 方法可以分别计算差集、并集、交集。计算的结果也是一个集合：

```dart
Set<int> a = {1, 9, 4};
Set<int> b = {1, 9, 3};
print(a.difference(b));// 差集 {4}
print(a.union(b)); // 并集 {1, 9, 4, 3}
print(a.intersection(b)); // 交集 {1, 9}

// 遍历集合
Set<int> numSet = {1, 9, 4};
for(int value in numSet){
  print("元素值:$value");
}
```

### 映射 Map

地图上的一个点，和现实中的移除位置一一对应，这种就是映射关系。地图上的点可以称为 键 key ，实际位置称为 值 value ; Map 就是维护若干个键值对的数据类型。 日常生活中有很多映射关系，比如字典中的字和对应释义、书目录中的标题和对应的页数、钥匙和对应的锁等。
应用映射中的一个元素记录着两个对象，所以 Map 类型有两个泛型，分别表示 key 的类型和 value 的类型。如下所示，定义一个 `Map<int, String>` 的映射对象，其中维护数字和英文单词；remove 方法可以根据 key 移除元素:

```dart
Map<int, String> numMap = {
  0: 'zero',
  1: 'one',
  2: 'two',
};
print(numMap); // {0: zero, 1: one, 2: two}
numMap.remove(1);
print(numMap);  // {0: zero, 2: two}
```
