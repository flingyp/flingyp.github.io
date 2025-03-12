# 利用 Cursor 学习 Flutter

> 通过 [text-compare](https://www.diffchecker.com/zh-Hans/text-compare/) 对比文件代码差异

## 1. 新建一个 Home 页面，作为主页面，新建完成后，页面现在不需要过多的内容，只需要一个标题即可。然后引入在 main.dart 中。

入口文件：`main.dart`

```dart
import 'package:flutter/material.dart';
import './pages/home.dart';

void main() {
  // 这是应用程序的入口点，runApp函数接收一个widget作为参数，它将成为widget树的根。
  runApp(const MyApp());
}

// MyApp是一个StatelessWidget（无状态组件）
// 它设置了应用的基本主题和整体结构
// MaterialApp 是一个重要的widget，提供了许多Material Design的基础功能
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter 基础入门',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomePage(),
    );
  }
}

```

新增文件：`home.dart`

```dart
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('我是主页 Home'), // 应用栏的标题
      ),
      body: const Center(
        // 主内容区域
        child: Text('欢迎来到 Flutter 基础入门'), // 居中的文本
      ),
    );
  }
}
```

`Scaffold` 是 Flutter 中的一个核心部件，提供了应用的基本视觉结构框架。

## 2. 在 Home 页面添加一个生成随机数按钮，点击按钮后，随机数会显示在页面上。

实现添加随机数生成按钮的功能。由于需要管理状态（随机数），我们需要将 HomePage 改为 StatefulWidget。

```dart
import 'package:flutter/material.dart';
import 'dart:math'; // 导入随机数生成器

// 将 StatelessWidget 改为 StatefulWidget
class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // 存储随机数的状态变量
  int _randomNumber = 0;

  // 生成随机数的方法
  void _generateRandomNumber() {
    setState(() {
      _randomNumber = Random().nextInt(100); // 生成0-99之间的随机数
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('我是主页 Home'), // 应用栏的标题
      ),
      body: Center(
        // 主内容区域
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('欢迎来到 Flutter 基础入门'), // 居中的文本
            const SizedBox(height: 20), // 添加一些间距
            Text(
              '随机数: $_randomNumber',
              style: const TextStyle(fontSize: 24),
            ),
            const SizedBox(height: 20), // 添加一些间距
            ElevatedButton(
              onPressed: _generateRandomNumber,
              child: const Text('生成随机数'),
            ),
          ],
        ),
      ),
    );
  }
}
```

在 Flutter 中，`mainAxisAlignment: MainAxisAlignment.center` 是用来控制 `Column`（列）或 `Row`（行）中子组件排列方式的属性。

让我来详细解释一下：

- `mainAxisAlignment` 控制的是主轴（main axis）上的对齐方式：
  - 对于 `Column` 来说，主轴是垂直方向（从上到下）
  - 对于 `Row` 来说，主轴是水平方向（从左到右）
- `MainAxisAlignment.center` 表示将所有子组件在主轴方向上居中排列。

在你的代码中，由于使用的是 `Column`，所以这行代码的具体作用是：

- 将 `Column` 中的所有子组件（文本、按钮等）在垂直方向上居中排列
- 如果 `Column` 的高度大于所有子组件高度的总和，剩余空间会被平均分配到子组件的上下两侧

其他可用的 `MainAxisAlignment` 值包括：

- `MainAxisAlignment.start`：子组件靠近主轴起点对齐
- `MainAxisAlignment.end`：子组件靠近主轴终点对齐
- `MainAxisAlignment.spaceBetween`：子组件之间平均分配空间
- `MainAxisAlignment.spaceAround`：子组件周围平均分配空间
- `MainAxisAlignment.spaceEvenly`：所有空间均匀分配

如果你想尝试不同的效果，可以更换这些值来看看布局的变化。

## 3. 在主页面中，添加底部导航栏组件，并且添加三个页面，分别是 ListPage 列表页面，DetailPage 详情页面，MinePage 我的页面，然后点击对应 Tab 跳转到对应页面。并且将第二步的随机数按钮添加到 MinePage 页面中。

新增文件：`list_page.dart`

```dart
import 'package:flutter/material.dart';

class ListPage extends StatelessWidget {
  const ListPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text('列表页面'),
    );
  }
}
```

新增文件：`detail_page.dart`

```dart
import 'package:flutter/material.dart';

class DetailPage extends StatelessWidget {
  const DetailPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text('详情页面'),
    );
  }
}
```

新增文件：`mine_page.dart`

```dart
import 'package:flutter/material.dart';
import 'dart:math';

class MinePage extends StatefulWidget {
  const MinePage({super.key});

  @override
  State<MinePage> createState() => _MinePageState();
}

class _MinePageState extends State<MinePage> {
  int _randomNumber = 0;

  void _generateRandomNumber() {
    setState(() {
      _randomNumber = Random().nextInt(100);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('欢迎来到 Flutter 基础入门'), // 居中的文本
            const SizedBox(height: 20), // 添加一些间距
            Text(
              '随机数: $_randomNumber',
              style: const TextStyle(fontSize: 24),
            ),
            const SizedBox(height: 20), // 添加一些间距
            ElevatedButton(
              onPressed: _generateRandomNumber,
              child: const Text('生成随机数'),
            ),
          ],
        ),
      ),
    );
  }
}
```

修改文件：`home.dart`

```dart
import 'package:flutter/material.dart';
import './list_page.dart';
import './detail_page.dart';
import './mine_page.dart';

// 将 StatelessWidget 改为 StatefulWidget
class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // 存储随机数的状态变量
  int _currentIndex = 0;

  final List<Widget> _pages = [
    const ListPage(),
    const DetailPage(),
    const MinePage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('我是主页 Home'), // 应用栏的标题
      ),
      body: IndexedStack(
        index: _currentIndex,
        children: _pages,
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.list),
            label: '列表',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.details),
            label: '详情',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: '我的',
          ),
        ],
      ),
    );
  }
}
```

`IndexedStack` 是 Flutter 中的一个布局小部件，它根据索引值显示其子元素列表中的一个。这使得 `IndexedStack` 成为实现诸如滑动菜单、标签页切换等动态界面元素的理想选择。

`BottomNavigationBar` 是 Flutter 中一个常用的底部导航栏小部件，通常用于在多个页面之间切换。

## 4. 在列表页面中，添加一个列表组件，列表组件中包含 10 个 item，每个 item 包含一个标题和描述和一张图片，图片链接为：`https://flingyp.online/favicon.png`，并且每个 item 可以点击，点击后打印当前 Item 项，并且给出 Toast 提示。

修改文件：`list_page.dart`

```dart
import 'package:flutter/material.dart';

class ListPage extends StatelessWidget {
  const ListPage({super.key});

  void _showToast(BuildContext context, int index) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('点击了第 ${index + 1} 项'),
        duration: const Duration(seconds: 1),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10,
      padding: const EdgeInsets.all(8.0),
      itemBuilder: (context, index) {
        return Card(
          margin: const EdgeInsets.symmetric(vertical: 8.0),
          child: InkWell(
            onTap: () {
              print('点击了第 ${index + 1} 个item');
              _showToast(context, index);
            },
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                children: [
                  Image.network(
                    'https://flingyp.online/favicon.png',
                    width: 50,
                    height: 50,
                    errorBuilder: (context, error, stackTrace) {
                      return const Icon(
                        Icons.error_outline,
                        size: 50,
                        color: Colors.red,
                      );
                    },
                  ),
                  const SizedBox(width: 16.0),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '标题 ${index + 1}',
                          style: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 8.0),
                        Text(
                          '这是第 ${index + 1} 个项目的描述信息，描述了一些具体的内容。',
                          style: const TextStyle(
                            color: Colors.grey,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
```

## 5. 点击每一项的时候，给出的 Toast 提示居中显示。

修改文件：`list_page.dart`

```dart
import 'package:flutter/material.dart';

class ListPage extends StatelessWidget {
  const ListPage({super.key});

  void _showToast(BuildContext context, int index) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          '点击了第 ${index + 1} 项',
          textAlign: TextAlign.center,
          style: const TextStyle(
            fontSize: 16,
          ),
        ),
        duration: const Duration(seconds: 1),
        behavior: SnackBarBehavior.floating,
        margin: EdgeInsets.only(
          bottom: MediaQuery.of(context).size.height * 0.5,
          left: 50,
          right: 50,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10,
      padding: const EdgeInsets.all(8.0),
      itemBuilder: (context, index) {
        return Card(
          margin: const EdgeInsets.symmetric(vertical: 8.0),
          child: InkWell(
            onTap: () {
              print('点击了第 ${index + 1} 个item');
              _showToast(context, index);
            },
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                children: [
                  Image.network(
                    'https://flingyp.online/favicon.png',
                    width: 50,
                    height: 50,
                    errorBuilder: (context, error, stackTrace) {
                      return const Icon(
                        Icons.error_outline,
                        size: 50,
                        color: Colors.red,
                      );
                    },
                  ),
                  const SizedBox(width: 16.0),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '标题 ${index + 1}',
                          style: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 8.0),
                        Text(
                          '这是第 ${index + 1} 个项目的描述信息，描述了一些具体的内容。',
                          style: const TextStyle(
                            color: Colors.grey,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
```
