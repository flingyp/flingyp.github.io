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

- 环境光源 `AmbientLight`
- 点光源 `PointLight`
- 聚光灯光源 `SpotLight`
- 平行光源 `DirectionalLight`

```javascript
// 添加一个环境光源
const ambientLight = new THREE.AmbientLight('#ffffff', 0.4);
scene.add(ambientLight);

// 创建一个点光源
const pointLight = new THREE.PointLight('#ffffff', 1);
pointLight.position.set(400, 200, 300); // 光源位置
scene.add(pointLight); // 将光源添加到场景中
// 点光源辅助观察
const pointLightHelper = new THREE.PointLightHelper(pointLight, 50);
scene.add(pointLightHelper);

// 添加一个平行光源
const directionalLight = new THREE.DirectionalLight('#ffffff', 1);
directionalLight.position.set(0, 100, -100);
scene.add(directionalLight);
// 平行光辅助观察
const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10, 'pink');
scene.add(dirLightHelper);
```

## 专业单词

- 摄像机：Camera
- 曲线：Curve
- 几何体：Geometry
- 材质：Material
- 阴影：Shadow
- 光源：Light
