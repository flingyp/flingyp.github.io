---
outline: deep
---

## 首页底部导航栏组件

### 使用 PageView 实现页面左右切换

PageView 是 Flutter 中实现导航组件的高阶选择，尤其适合需要 ​手势交互、状态保留 和 ​动态内容展示 的场景。通过合理控制缓存策略和动画集成，可显著提升用户体验，适用于电商、社交、媒体等复杂应用场景。

```dart
class TabNavigator extends StatefulWidget {
  const TabNavigator({super.key});

  @override
  State<TabNavigator> createState() => _TabNavigatorState();
}

class _TabNavigatorState extends State<TabNavigator> {
  // initialPage 初始化页面默认显示哪个页面
  final PageController _controller = PageController(initialPage: 0);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: PageView(
        controller: _controller,
        /// physics: const NeverScrollableScrollPhysics(), // 禁止左右滚动
        children: [
          HomePage(),
          CategoryPage(),
          CartPage(),
          ProfilePage(),
        ]
      )
    )
  }
}
```

### 使用 PageView 的 `bottomNavigationBar` 实现底部 Tab 导航页面切换

```dart
class TabNavigator extends StatefulWidget {
  const TabNavigator({super.key});

  @override
  State<TabNavigator> createState() => _TabNavigatorState();
}

class _TabNavigatorState extends State<TabNavigator> {
  // initialPage 初始化页面默认显示哪个页面
  final PageController _controller = PageController(initialPage: 0);

  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: PageView(
        controller: _controller,
        physics: const NeverScrollableScrollPhysics(), // 禁止左右滚动
        children: [
          HomePage(),
          CategoryPage(),
          CartPage(),
          ProfilePage(),
        ]
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) {
          _controller.jumpToPage(index);
          setState(() {
            _currentIndex = index;
          });
        },
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(label: '首页', icon: Icon(Icons.home), activeIcon: Icon(Icons.home_filled)),
          BottomNavigationBarItem(label: '分类', icon: Icon(Icons.category), activeIcon: Icon(Icons.category_outlined)),
          BottomNavigationBarItem(label: '购物车', icon: Icon(Icons.shopping_cart), activeIcon: Icon(Icons.shopping_cart_outlined)),
          BottomNavigationBarItem(label: '我的', icon: Icon(Icons.person), activeIcon: Icon(Icons.person_outlined)),
        ]
      )
    )
  }
}
```

## 使用 `AutomaticKeepAliveClientMixin` 实现页面缓存

`AutomaticKeepAliveClientMixin` 是 Flutter 中的一个 Mixin，用于在页面切换时保留页面状态。它允许你创建一个可缓存的状态，以便在页面切换时保留数据。

```dart
class KeepAlivePage extends StatefulWidget {
  const KeepAlivePage({super.key});

  @override
  State<KeepAlivePage> createState() => _KeepAlivePageState();
}

class _KeepAlivePageState extends State<KeepAlivePage> with AutomaticKeepAliveClientMixin {
  @override
  Widget build(BuildContext context) {
    super.build(context);
    return Container();
  }

  @override
  bool get wantKeepAlive => true;
}
```

## Banner 轮播图组件

`carousel_slider` 是一个 Flutter 库，用于创建轮播图（也称为幻灯片）。它允许你在一个容器中显示多个子组件，并提供平滑的滑动过渡效果。

```dart
class BannerWidget extends StatefulWidget {
  final List<Widget> bannerList;

  const BannerWidget({super.key, required this.bannerList});

  @override
  State<BannerWidget> createState() => _BannerWidgetState();
}

class _BannerWidgetState extends State<BannerWidget> {
  int _current = 0
  final CarouselController _controller = CarouselController();
  final double width = MediaQuery.of(context).size.width;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        CarouselSlider(
          items: widget.bannerList.map(item => _tabImage(item, width)).toList(),
          carouselController: _controller,
          options: CarouselOptions(
            height: 200.px,
            autoPlay: true,
            viewportFraction: 1.0,
            onPageChanged: (index, reason) {
              setState(() {
                _current = index;
              });
            }
          )
        ),
      ]
    );
  }

  Widget _tabImage(String url, double width) {
    return GestureDetector(
      onTap: () {
        // 点击图片跳转
      },
      child: Image.network(url, width: width, fit: BoxFit.cover),
    );
  }
}
```

## 基于 Opacity 与 NatificationListener 实现 AppBar 滚动渐变效果

```dart
class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  double appBarAlpha = 0;
  final appBarScrollOffset = 100;

  get _appBar => Opacity(
    color: Colors.white,
    child: const Center(child: Padding(padding: EdgeInsets.only(top: 20), child: Text('首页')))
  )

  get _listView => ListView(
    children: [
      const SizeBox(height: 1000, child: ListTile(title: Text('首页')))
    ]
  )


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          /// 移除顶部 Padding
          MediaQuery.removePadding(
            removeTop: true,
            context: context,
            child: NotificationListener<ScrollNotification>(
              /// 监听滚动
              onNotification: (scrollNotification) {
                /// 通过 depth 来过滤指定 Widget 发出的滚动事件，0 表示最外层列表发出的滚动事件且是列表滚动的事件
                if (scrollNotification is ScrollUpdateNotification && scrollNotification.depth == 0) {
                  double pixels = scrollNotification.metrics.pixels;
                  double alpha = pixels / appBarScrollOffset;
                  if(alpha < 0) {
                    alpha = 0;
                  } else if (alpha > 1) {
                    alpha = 1;
                  }
                  setState(() {
                    appBarAlpha = alpha;
                  });
                }
                return false;
              },
              child: _listView
            )
          ),
          _appBar
        ]
      )
    )
  }
}
```
