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

## 专业单词

- 摄像机：Camera
- 曲线：Curve
- 几何体：Geometry
- 材质：Material
- 阴影：Shadow
- 光源：Light
