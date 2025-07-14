# Cloudflare + Vercel 部署 NextJS 应用

整体流程：NextJS 应用部署在 Vercel 上，然后自定义域名。域名的 DNS 服务器指向 Cloudflare 的 DNS 服务器。利用 Cloudflare 的 CDN 加速。

## 在 Vercel 上部署 NextJS 应用

部署应用，然后自定义域名，然后我提供两端域名解析，一个是 A，一个是 CNAME 的

![](/images/250703/01.png)

## 在 Cloudflare 添加域

添加域名，然后添加域名解析记录，A 记录和 CNAME 记录都添加，A 记录是 Vercel 的 IP 地址，CNAME 记录是 Vercel 的域名。

![](/images/250703/02.png)

## 自定义域名（以阿里云为例）

修改 DNS 服务器地址，然后添加域名解析记录，A 记录和 CNAME 记录都添加，A 记录是 Vercel 的 IP 地址，CNAME 记录是 Vercel 的域名。（按理在 Cloudflare 上添加过了，应该不需要再添加了）但是没生效，我添加了以后，过了一会，就生效了。

![](/images/250703/03.png)

![](/images/250703/04.png)

上面的操作操作完以后，还要等一会，没事刷新一下看看，Cloudflare 域的状态是否为活动状态。
