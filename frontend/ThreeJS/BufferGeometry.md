# 几何体 BufferGeometry

`BoxGeometry` 和 `SphereGeometry` 等几何体都是基于 `BufferGeometry` 类创建。它是一个没有任何形状的空几何体，我们可以通过它自定义任何几何体形状，具体一点说的就是 **定义定点数据**

```javascript
// 创建一个空的几何体对象
const geometry = new THREE.BufferGeometry();
```

## 定义几何体的顶点数据

通过 `Float32Array` 创建一组 `X|Y|Z` 坐标数据用来表示几何体的顶点坐标

```javascript
// 创建顶点坐标数据
const vertices = new Float32Array([
  0,
  0,
  0, //顶点1坐标
  50,
  0,
  0, //顶点2坐标
  0,
  100,
  0, //顶点3坐标
  0,
  0,
  10, //顶点4坐标
  0,
  0,
  100, //顶点5坐标
  50,
  0,
  10, //顶点6坐标
]);
```

通过 `BufferAttribute` 表示几何体顶点数据

```javascript
// 创建属性缓冲区对象
// 3个为一组，表示一个顶点的xyz坐标
const attribute = new THREE.BufferAttribute(vertices, 3);
```

设置几何体的顶点 `.attributes.position` 属性

```javascript
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribute;

// 之后就可以通过 Geometry 和 Material 去生成对应的模型，例如下面的点模型 Points
```

## 点模型 `Points`

点模型和网格模型 `Mesh` 一样，都是模型对象，只是大部分情况下都是用 Mesh 表示物体

网格模型 `Mesh` 有自己对应的网格材质，同样点模型 `Points` 有自己对应的点材质 `PointsMaterial`

```javascript
// 点渲染模式
const material = new THREE.PointsMaterial({
  color: 0xffff00,
  size: 10.0, //点对象像素尺寸
});

const points = new THREE.Points(geometry, material); //点模型对象
// 将点模型添加到场景中
scene.add(points);
```

## 线模型 `Line`

线模型有三种 `Line`、`LineLoop` 和 `LineSegments`

```javascript
// 线材质对象
const material = new THREE.LineBasicMaterial({
  color: 0xff0000, //线条颜色
});
// 创建线模型对象
const line = new THREE.Line(geometry, material);
```

```javascript
// 闭合线条
const line = new THREE.LineLoop(geometry, material);
```

```javascript
// 非连续的线条
const line = new THREE.LineSegments(geometry, material);
```

区别在于：

- `Line` 表示线条，线条是首尾是不相连的，非闭合
- `LineLoop` 表示线条，线条是首尾相连的，闭合
- `LineSegments` 表示非连续线条，1和2连成线条，3和4连成线条

## 网格模型（三角形概念）

网格模型 `Mesh` 其实就一个一个三角形(面)拼接构成。使用网格模型Mesh渲染几何体Geometry，就是几何体所有顶点坐标三个为一组，构成一个三角形，多组顶点构成多个三角形，就可以用来模拟表示物体的表面

![](https://cdn.jsdelivr.net/gh/flingyp/ImageStorage/images/%E4%B8%89%E8%A7%92%E5%BD%A2.jpg)

网格模型三角形：正反面

- 正面：逆时针
- 反面：顺时针

空间中一个三角形有正反两面，那么Three.js的规则是如何区分正反面的？非常简单，你的眼睛(相机)对着三角形的一个面，如果三个顶点的顺序是逆时针方向，该面视为正面，如果三个顶点的顺序是顺时针方向，该面视为反面

Three.js 的材质 Material 默认正面可见，反面不可见，我们可以自由设置可见与否

```javascript
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff, //材质颜色
  side: THREE.FrontSide, //默认只有正面可见
});

const material = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide, //两面可见
});

const material = new THREE.MeshBasicMaterial({
  side: THREE.BackSide, //设置只有背面可见
});
```

## 构建一个矩形平面几何体

一个矩形平面，可以至少通过两个三角形拼接而成。而且两个三角形有两个顶点的坐标是重合的

注意三角形的正反面问题：保证矩形平面两个三角形的正面是一样的，也就是从一个方向观察，两个三角形都是逆时针或顺时针

```javascript
const vertices = new Float32Array([
  0,
  0,
  0, //顶点1坐标
  80,
  0,
  0, //顶点2坐标
  80,
  80,
  0, //顶点3坐标

  0,
  0,
  0, //顶点4坐标   和顶点1位置相同
  80,
  80,
  0, //顶点5坐标  和顶点3位置相同
  0,
  80,
  0, //顶点6坐标
]);
```

## 几何体顶点索引数据

网格模型Mesh对应的几何体BufferGeometry，拆分为多个三角后，很多三角形重合的顶点位置坐标是相同的，这时候如果你想减少顶点坐标数据量，可以借助几何体顶点索引 `geometry.index` 来实现

定义顶点位置坐标数据：每个三角形3个顶点坐标，矩形平面可以拆分为两个三角形，也就是6个顶点坐标

```javascript
const vertices = new Float32Array([
  0,
  0,
  0, //顶点1坐标
  80,
  0,
  0, //顶点2坐标
  80,
  80,
  0, //顶点3坐标
  0,
  0,
  0, //顶点4坐标   和顶点1位置相同
  80,
  80,
  0, //顶点5坐标  和顶点3位置相同
  0,
  80,
  0, //顶点6坐标
]);
```

如果有几何体有顶点索引 `geometry.index`，那么就可以把三角形重复的顶点位置坐标删除

```javascript
const vertices = new Float32Array([
  0,
  0,
  0, //顶点1坐标
  80,
  0,
  0, //顶点2坐标
  80,
  80,
  0, //顶点3坐标
  0,
  80,
  0, //顶点4坐标
]);
```

`BufferAttribute` 定义顶点索引 `.index` 数据

```javascript
// Uint16Array类型数组创建顶点索引数据
const indexes = new Uint16Array([
  // 下面索引值对应顶点位置数据中的顶点坐标
  0, 1, 2, 0, 2, 3,
]);
```

通过 Three.js 的属性缓冲区对象 `BufferAttribute` 表示几何体顶点索引 `.index` 数据

```javascript
// 索引数据赋值给几何体的index属性
geometry.index = new THREE.BufferAttribute(indexes, 1); //1个为一组
```
