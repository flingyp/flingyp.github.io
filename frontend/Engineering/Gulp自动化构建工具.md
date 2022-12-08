# Gulp 自动化构建工具

随着前端社区的快速发展，市面上已经出现了多种项目构建工具。如 Webpack、Rollup、Vite、ESBuild 等等

Gulp 感觉似乎好像被取代了。其实并没有，只不过它从台前退居到了幕后。现在 Gulp 更多的是做流程化的控制，而主要的项目打包任务交给现在主流的构建工具来做，而 Gulp 则可以充当一个管理者来管理构建执行的流程

## 快速体验

全局安装脚手架： `pnpm add gulp-cli -g`

在项目中安装 Gulp `pnpm add gulp -D`

创建 `gulpfile` 配置文件，编写如下代码

```javascript
function defaultTask(cb) {
  console.log("default");
  cb();
}
function buildTask(cb) {
  console.log("build");
  cb();
}

exports.default = defaultTask; // gulp
exports.build = buildTask; // gulp build
```

最后在终端运行命令：`gulp` 或者是 `gulp build`，如需运行多个任务，可以执行 `gulp <task> <othertask>`

## 创建任务 Task

每个 Gulp 任务都是一个异步的 JavaScript 函数。任务可以是公开或者是私有类型的

**公开任务**：被导出的，可以通过 `gulp` 命令调用的
**私有任务**：被设计为在内部使用，通常作为 `series()` 或 `parallel()` 组合的组成部分

```javascript
const { series } = require("gulp");

// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
function clean(cb) {
  // body omitted
  cb();
}

// `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
// 它也仍然可以被用在 `series()` 组合中。
function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(clean, build);
```

## 处理文件

Gulp 暴露了 `src()` 和 `dest()` 方法用来处理系统文件

`src()` 会从文件系统中读取文件生成一个 Node 流。**简单来说就是输入文件**

`pipe()` 用于连接转换流或者可写流。**简单来说就是在这里可以做一些自定义处理**。比如在这里我们就可以执行一些其他构建工具的打包命令或者服务启动命令等等

`dest()` 接受一个输出目录作为参数，并且它还是产生一个 Node 流。**简单来说就是输出文件**

```javascript
const { src, dest, watch } = require("gulp");
const babel = require("gulp-babel");

// 此示例需要安装依赖包  @babel/core @babel/preset-env gulp-babel
function defaultTask(cb) {
  return src("src/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(dest("output/"));
}

exports.default = defaultTask;
```

## 文件监控

Gulp 可以监控文件变化，重新执行任务

```javascript
const { src, dest, watch } = require("gulp");
const babel = require("gulp-babel");

// 此示例需要安装依赖包  @babel/core @babel/preset-env gulp-babel
function defaultTask(cb) {
  return src("src/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(dest("output/"));
}

// 可以进行文件监控，当文件发生变化时执行任务
watch("src/*.js", defaultTask);
// 或者关联一个任务组合
// watch('src/*.js', series(clean, javascript));

exports.default = defaultTask;
```

上面示例中运行 `gulp` 就会对匹配的文件进行监控，如果有文件被修改了就执行关联的任务

## `series()` 和 `parallel()`

`series()`：串行任务，依次执行任务

`parallel()`：并行任务，同时执行多个任务
