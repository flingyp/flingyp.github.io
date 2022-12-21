---
outline: deep
---

# Vitepress 添加 Algolia

## 注册 Algolia 账号

[Algolia 官网](https://www.algolia.com/doc/) 中注册一个账号，可以选择使用 Github 账号进行登录

登录之后进入 [仪表台](https://www.algolia.com/dashboard) 点击 `Create application`

![Algolia-1](/Algolia-1.jpg)

## 配置 Algolia

### 创建好应用后点击 `API Keys` 查看相关参数

![Algolia-2](/Algolia-2.jpg)

![Algolia-3](/Algolia-3.jpg)

### 在文档中填写对应的 KEY 值

```ts
algolia: {
  appId: '', // 对应 Application ID
  apiKey: '9302dbxxx', // 对应 Search Only API Key
  indexName: 'chodocs', // 应用名称
  placeholder: '请输入关键词', // 对应网站搜索的输入框的placeholder
  buttonText: '搜索', // 对应网站搜索按钮的placeholder
}
```

### 将私钥存放在 `Github Secrets`

![Algolia-4](/Algolia-4.jpg)

- `API_KEY` 对应 `Admin API Key`
- `APPLICATION_ID` 对应 `APPLICATION_ID`

### 在文档中创建文件 `crawlerConfig.json`

```ts
{
  "index_name": "", // 应用名称
  "start_urls": [""], // 文档网站地址
  "rateLimit": 8,
  "maxDepth": 10,
  "selectors": {
    "lvl0": {
      "selector": "",
      "defaultValue": "Documentation"
    },
    "lvl1": ".content h1",
    "lvl2": ".content h2",
    "lvl3": ".content h3",
    "lvl4": ".content h4",
    "lvl5": ".content h5",
    "content": ".content p, .content li"
  },
  "selectors_exclude": [
    "aside",
    ".page-footer",
    ".next-and-prev-link",
    ".table-of-contents"
  ],
  "js_render": true
}
```

### 编写 CI 脚本

在项目根目录 `.github/workflows` 文件夹下，创建 `algolia.yaml` 文件

```yaml
name: algolia
on:
  push:
    branches:
      - main
jobs:
  algolia:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Get the content of algolia.json as config
        id: algolia_config
        run: echo "config=$(cat crawlerConfig.json | jq -r tostring)" >> $GITHUB_OUTPUT
      - name: Push indices to Algolia
        uses: signcl/docsearch-scraper-action@master
        env:
          APPLICATION_ID: ${{ secrets.APPLICATION_ID }}
          API_KEY: ${{ secrets.API_KEY }}
          CONFIG: ${{ steps.algolia_config.outputs.config }}
```

之后把代码提交的仓库中，等待 Action 跑完文档更新后就有搜索功能了
