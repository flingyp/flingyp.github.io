# Three.js

## 基本概念

Three.js 是一个用于 WebGL 的 JavaScript 3D 库。将 **物体 Mesh** 添加到实际的 **3D 场景 Scene** 中，再通过 **相机 Camera** 的概念进行拍照生成一张照片，最后通过结果 **渲染器 Renderer** 渲染到页面上。

1. 场景 Scene
2. 相机 Camera
3. 物体 Mesh
4. 渲染器 Renderer

### 入门代码

```javascript
import * as THREE from 'three';

// 第一步：创建一个场景
const scene = new THREE.Scene();

// 第二步：创建一个相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// 第三步：创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 第四步：创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 4.1 创建几何体的材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// 4.2 创建一个物体（几何体+材质）
const cube = new THREE.Mesh(geometry, material);

// 4.3 将物体添加到场景中
scene.add(cube);

// 第五步：设置相机位置
camera.position.z = 5;
camera.lookAt(0, 0, 0);

// 第六步：渲染（场景 + 相机）
renderer.render(scene, camera);

// 让物体动起来
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```

## 设置三维坐标轴辅助线

设置坐标轴辅助线可以帮助我们更好的感知 3D 环境

```javascript
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);
```

## 相机控件 - 轨道控制器 `OrbitControls`

平时开发调试代码，或者展示模型的时候，可以通过 OrbitControls 实现旋转缩放预览效果

```javascript
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// 创建一个相机控件对象
const controls = new OrbitControls(camera, renderer.domElement);
// 监听鼠标、滚轮事件，重新渲染相机
controls.addEventListener('change', () => {
  renderer.render(scene, camera);
});
```

## 光源对物体表面的影响

物体表面的明暗效果是会受到光照影响的。Three.js 中同样也要模拟光照对物体表面的影响

Three.js 提供了多种模拟生活中光源的 API

- 点光源 `PointLight`
- 环境光源 `AmbientLight`
- 聚光灯光源 `SpotLight`
- 平行光源 `DirectionalLight`

```javascript
// 创建一个点光源
const pointLight = new THREE.PointLight('#ffffff', 1);
pointLight.position.set(400, 200, 300); // 光源位置
scene.add(pointLight); // 将光源添加到场景中

// 添加一个环境光源
const ambientLight = new THREE.AmbientLight('#ffffff', 0.4);
scene.add(ambientLight);

// 添加一个平行光源
const directionalLight = new THREE.DirectionalLight('#ffffff', 1);
directionalLight.position.set(0, 100, -100);
scene.add(directionalLight);
```

- 点光源辅助观察 `PointLightHelper`

```javascript
const pointLightHelper = new THREE.PointLightHelper(pointLight, 50);
scene.add(pointLightHelper);
```

- 平行光辅助观察 `DirectionalLightHelper`

```javascript
const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10, 'pink');
scene.add(dirLightHelper);
```

## 动画渲染循环

Three.js 可以通过请求动画帧 `requestAnimationFrame()` 来实现循坏渲染，实现动画效果

```javascript
function render() {
  mesh.rotateY(0.01); // 让物体每次旋转0.01弧度
  renderer.render(scene, camera); // 重新渲染

  requestAnimationFrame(render);
}
render();
```

## Canvas 画布布局和全屏

渲染器 `WebGLRenderer` 通过属性 `.domElement` 可以获得渲染结果的 Canvas 画布

之后就可以随意将它插入到任何DOM中

```javascript
// renderer.domElement
document.body.appendChild(renderer.domElement);
```

Canvas 画布宽高度跟随浏览器窗口动态变化

```javascript
window.addEventListener('resize', () => {
  // 重置渲染器输出画布canvas尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 重新定义相机的观察范围的宽高比
  camera.aspect = window.innerWidth / window.innerHeight;
  // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix();
});
```

## Stats 查看Three.js 查看渲染帧率

```javascript
// 性能监视器
import Stats from 'three/addons/libs/stats.module.js';

const stats = new Stats();
document.body.appendChild(stats.domElement);

// 动画循环渲染下不断刷新
function rotateRender() {
  // 不断刷新渲染帧率
  stats.update();

  mesh.rotateY(0.01);
  renderer.render(scene, camera); // 执行渲染操作
  requestAnimationFrame(rotateRender);
}
rotateRender();
```

## 常见的几何体

- 矩形 `BoxGeometry`
- 球体 `SphereGeometry`
- 圆柱体 `CylinderGeometry`
- 矩形平面 `PlaneGeometry`
- 圆形平面 `CircleGeometry`

## WebGL 渲染器常用设置

抗锯齿属性

```javascript
const renderer = new THREE.WebGLRenderer({
  antialias: true, // 启用抗锯齿
});
```

设备像素比 `window.devicePixelRatio`，不同硬件设备的设备像素比不同

```javascript
// 告诉 Three.js 你的屏幕的设备像素比（固定配置）
renderer.setPixelRatio(window.devicePixelRatio);
```

```javascript
// 设置背景颜色
renderer.setClearColor(0xffffff, 1);
```

## Gui.js 库

借助 Gui.js 可以快速创建控制三维场景的UI交互界面

文档：[dat.gui.js](https://github.com/dataarts/dat.gui)

```javascript
// 实例化对象
const gui = new GUI();
```

### 改变 Gui.js 界面的默认样式

通过 `gui.domElement` 属性可以获取 gui 界面的 DOM 元素，那就意味着你可以改变默认的样式，比如位置、宽度等。

```javascript
// 改变交互界面style属性
gui.domElement.style.right = '0px';
gui.domElement.style.width = '300px';
```

### `.add()` 方法

执行 Gui.js 的 `.add()` 方法可以快速创建一个UI交互界面，比如一个拖动条，可以用来改变一个JavaScript对象属性的属性值

格式：`.add(控制对象，对象的目标属性，其他参数)`

其他参数，可以一个或多个，数据类型也可以不同，会自动根据参数形式，自动生成对应的交互界面。

参数3和参数4，分别是一个数字，交互界面是一个鼠标可以拖动的拖动条，可以在一个区间改变属性的值

执行 `gui.add(obj, 'x', 0, 100);` 你可以发现右上角 Gui.js 界面增加了新的内容

```javascript
// 创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {
  x: 30,
};
// gui增加交互界面，用来改变obj对应属性
gui.add(obj, 'x', 0, 100);
```

### `.name()` 方法

`.add()` 创建的交互界面，会默认显示所改变属性的名字，为了通过交互界面更好理解你改变的某个对象属性，你可以通过 `.name()` 方法改变生成交互界面显示的内容

```javascript
const gui = new GUI(); //创建GUI对象
gui.add(ambient, 'intensity', 0, 2.0).name('环境光强度');
gui.add(directionalLight, 'intensity', 0, 2.0).name('平行光强度');
```

### `.step()` 方法

步长 `.step()` 方法可以设置交互界面每次改变属性值间隔是多少

```javascript
gui.add(ambient, 'intensity', 0, 2.0).name('环境光强度').step(0.1);
```

### `.onChange()` 方法

当 Gui.js 界面某个值的时候，`.onChange()`方法就会执行，这时候你可以根据需要通过.onChange()执行某些代码

```javascript
const obj = {
  x: 30,
};
// 当obj的x属性变化的时候，就把此时obj.x的值value赋值给mesh的x坐标
gui.add(obj, 'x', 0, 180).onChange(function (value) {
  mesh.position.x = value;
  // 你可以写任何你想跟着obj.x同步变化的代码
  // 比如mesh.position.y = value;
});
```

### `.addColor()` 颜色值改变

`.addColor()` 生成改变颜色值的交互界面

```javascript
const obj = {
  color: 0x00ffff,
};
gui.addColor(obj, 'color').onChange(function (value) {
  mesh.material.color.set(value);
});
```

### `.add()` 下拉菜单和单选框

格式：`.add(控制对象，对象具体属性，其他参数)`

其他参数，可以一个或多个，数据类型也可以不同，gui会自动根据参数形式，自动生成对应的交互界面

参数3是一个数组或对象，生成交互界面是下拉菜单

```javascript
const obj = {
  scale: 0,
};
// 参数3数据类型：数组(下拉菜单)
gui
  .add(obj, 'scale', [-100, 0, 100])
  .name('y坐标')
  .onChange(function (value) {
    mesh.position.y = value;
  });
```

```javascript
const obj = {
  scale: 0,
};
// 参数3数据类型：对象(下拉菜单)
gui
  .add(obj, 'scale', {
    left: -100,
    center: 0,
    right: 100,
    // 左: -100,//可以用中文
    // 中: 0,
    // 右: 100
  })
  .name('位置选择')
  .onChange(function (value) {
    mesh.position.x = value;
  });
```

如果 `.add()` 改变属性的对应的数据类型如果是布尔值，那么交互界面就是一个单选框

```javascript
const obj = {
  bool: false,
};
// 改变的obj属性数据类型是布尔值，交互界面是单选框
gui.add(obj, 'bool').name('是否旋转');

gui.add(obj, 'bool').onChange(function (value) {
  // 点击单选框，控制台打印obj.bool变化
  console.log('obj.bool', value);
});
```

案例：控制一个物体是否旋转

```javascript
gui.add(obj, 'bool').name('旋转动画');

// 渲染循环
function render() {
  // 当gui界面设置obj.bool为true,mesh执行旋转动画
  if (obj.bool) mesh.rotateY(0.01);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
```

### Gui.js 分组

Gui 交互界面不分组，只有一个默认的总的菜单

`.addFolder()` 分组

通过 `.addFolder()`方法可以创建一个子菜单，`.addFolder()` 返回的子文件夹对象，同样具有gui对象的`.add()`、`.onChange()`、`.addColor()` 等等属性

```javascript
const gui = new GUI(); //创建GUI对象
const obj = {
  color: 0x00ffff, // 材质颜色
};
// 创建材质子菜单
const matFolder = gui.addFolder('材质');
matFolder.close();
// 材质颜色color
matFolder.addColor(obj, 'color').onChange(function (value) {
  material.color.set(value);
});
// 材质高光颜色specular
matFolder.addColor(obj, 'specular').onChange(function (value) {
  material.specular.set(value);
});

// 环境光子菜单
const ambientFolder = gui.addFolder('环境光');
// 环境光强度
ambientFolder.add(ambient, 'intensity', 0, 2);

const dirFolder = gui.addFolder('平行光');
// 平行光强度
dirFolder.add(directionalLight, 'intensity', 0, 2);
// 平行光位置
dirFolder.add(directionalLight.position, 'x', -400, 400);
dirFolder.add(directionalLight.position, 'y', -400, 400);
dirFolder.add(directionalLight.position, 'z', -400, 400);
```

关闭 `.close()` 和展开 `.open()` 交互界面

```javascript
const gui = new GUI(); //创建GUI对象
gui.close(); //关闭菜单

// 创建材质子菜单
const matFolder = gui.addFolder('材质');
matFolder.close(); //关闭菜单
```

`.addFolder()` 套娃——子菜单嵌套子菜单

子菜单可以继续嵌套子菜单

```javascript
// 平行光子菜单
const dirFolder = gui.addFolder('平行光');
dirFolder.close(); //关闭菜单
// 平行光强度
dirFolder.add(directionalLight, 'intensity', 0, 2);
const dirFolder2 = dirFolder.addFolder('位置'); //子菜单的子菜单
dirFolder2.close(); //关闭菜单
// 平行光位置
dirFolder2.add(directionalLight.position, 'x', -400, 400);
dirFolder2.add(directionalLight.position, 'y', -400, 400);
dirFolder2.add(directionalLight.position, 'z', -400, 400);
```

## 专业单词

- 摄像机：Camera
- 曲线：Curve
- 几何体：Geometry
- 材质：Material
- 阴影：Shadow
- 光源：Light
