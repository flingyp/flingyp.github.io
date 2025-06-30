# 部署 Vitepress 项目到 Cloudflare

## 创建 Pages 项目

创建 Pages 项目，选择 Github 仓库，可以选择 Vitepress 项目，也可以选择其他项目。

![](/images/250630/01.png)

部署完以后， Cloudflare 会生成一个项目地址，这个地址就是你的网站地址。

## 配置自定义域名（以阿里云为例）

### 更改域名的 DNS 服务器为 Cloudflare

在 Cloudflare 的账号主页，添加域后，Cloudflare 会为你分配两个名称服务器（nameservers），例如 `ns1.cloudflare.com` 和 `ns2.cloudflare.com`。
记下这些名称服务器，需要将它们配置到阿里云。

首先需要到阿里云的域名管理页面，找到你的域名，点击管理，然后修改域名的 DNS 服务器为 Cloudflare 的 DNS 服务器。

![](/images/250630/02.png)

### 添加域名解析

添加对应的 DNS 记录

![](/images/250630/03.png)

然后到对应的 Pages 项目中，设置自定义域即可～

![](/images/250630/04.png)
