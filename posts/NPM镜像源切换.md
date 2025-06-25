# NPM 镜像源切换

已 PNPM 包管理器为例，其他包管理器执行命令是一样的。

- [cnpm 镜像站](https://npmmirror.com/)

## 查看源

```bash
pnpm get registry
```

## 临时修改

```bash
pnpm install packageName --registry sourceUrl
```

## 持久使用

```bash
pnpm config set registry sourceUrl

# 示例: 使用 CNPM 镜像源
pnpm config set registry https://registry.npmmirror.com
```

## 还原

```bash
pnpm config set registry https://registry.npmjs.org
```
