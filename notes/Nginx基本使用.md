# Nginx 基本使用

## 安装

1. 基于 Yum 的 方式安装 Nginx

先来查看 yum 是否存在
`yum list | grep nginx`
如果存在并且系统的 nginx 源 也存在，但是版本有些低。我们可以自己配置 yum 源

```nginx
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/
gpgcheck=0
enabled=1
```

复制上面的代码，然后在终端输入
`vim /etc/yum.repos.d/nginx.repo` 把上面的代码复制上去。
并且修改 baseurl。 我的是 centos 7 的版本，就修改对应自己的 linux 版本
例子： baseurl=http://nginx.org/packages/centos/7/$basearch/

然后 再次 `yum list | grep nginx` 查看 是否有更高的版本

再开始安装 `yum install nginx`

查看是否安装完成 `nginx -v`

## 查看 Nginx 的安装目录

`rpm -ql nginx`

主要关注的文件夹有这几个

1. `/etc/nginx/conf.d/default.conf` 文件是我们进行子配置的配置项存放处
2. `/etc/nginx/nginx.conf`主配置文件会默认把这个文件夹中所有子配置项都引入
3. `/usr/share/nginx/html/` 文件夹，通常静态文件都再这个文件夹

主配置文件`nginx.conf`

```
main        # 全局配置，对全局生效
├── events  # 配置影响 Nginx 服务器或与用户的网络连接
├── http    # 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置
│   ├── upstream # 配置后端服务器具体地址，负载均衡配置不可或缺的部分
│   ├── server   # 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块
│   ├── server
│   │   ├── location  # server 块可以包含多个 location 块，location 指令用于匹配 uri
│   │   ├── location
│   │   └── ...
│   └── ...
└── ...
```

子配置文件 大概 结构 `default.conf`

```
server {
    listen       80;   #配置监听端口
    server_name  localhost;  //配置域名

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;     #服务默认启动目录
        index  index.html index.htm;    #默认访问文件
    }

    #error_page  404              /404.html;   # 配置404页面

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;   #错误状态码的显示页面，配置后需要重启
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

Nginx 服务启动 、 停止 、 重启

### 启动

默认的情况下，Nginx 是不会自动启动的，需要我们手动进行启动，当然启动 Nginx 的方法也不是单一的。

#### 1. 直接启动

在 CentOS7.4 版本里（低版本是不行的），是可以直接直接使用`nginx`启动服务的。

- `nginx`

#### 2. 使用 systemctl 命令启动

- `systemctl start nginx.service`

输入命令后，没有任何提示，那我们如何知道 Nginx 服务已经启动了哪？可以使用 Linux 的组合命令，进行查询服务的运行状况。

- `ps aux | grep nginx`

- ```
  root     11482  0.0  0.0  46452   980 ?        Ss   12:41   0:00 nginx: master process nginx
  nginx    11483  0.0  0.0  46848  2168 ?        S    12:41   0:00 nginx: worker process
  root     11491  0.0  0.0 112708   984 pts/0    S+   12:44   0:00 grep --color=auto nginx
  ```

- 出现这 3 条命令，就代表启动成功了

**启动后就可以通过 公网 IP 访问了，访问前提是开放服务器的 80 端口**

### 停止

#### 1. 从容停止服务

这种方法比较温和，需要进程完成当前工作后再停止

- `nginx -s quit`

#### 2. 立即停止

这种方法比较强硬，无论进程是否再工作都停止

- `nginx -s stop`

#### 3. killall 方法杀死进程

这种方法也是比较野蛮的，我们直接杀死进程

- `killall nginx`

#### 4. systemctl 停止

- `systemctl stop nginx.service`

### 重启 Nginx 服务

- `systemctl restart nginx.service`

### 重新载入配置文件

在重新编写或者修改 Nginx 的配置文件后，都需要作一下重新载入，这时候可以用 Nginx 给的命令

- `nginx -s reload`

### 查看端口号

在默认情况下，Nginx 启动后会监听 80 端口，从而提供 HTTP 访问，如果 80 端口已经被占用则会启动失败。我么可以使用`netstat -tlnp`命令查看端口号的占用情况。

## Nginx 自定义错误页面设置 和 简介访问设置

### 自定义错误页面设置

在 `/etc/nginx/conf.d/default.conf` 是可以看到下面这条代码的

- `error_page 500 502 503 504 /50x.html;`

```
error_page指令用于自定义错误页面，500，502，503，504 这些就是HTTP中最常见的错误代码，/50.html 用于表示当发生上述指定的任意一个错误的时候，都是用网站根目录下的/50.html文件进行处理。
```

有些时候是要把这些错误页面单独的表现出来，**给用户更好的体验。**所以就要为每个错误码设置不同的页面。设置方法如下：

- 我们在 `error_page 500 502 503 504 /50x.html;` 下在添加一条 `error_page 404 /404_error.html;`

然后再 `/usr/share/nginx/html` 去写这个 404_error.html 文件

然后重启 Nginx 服务 `nginx -s reload`

### 简介访问设置

> 有时候我们的服务器只**允许特定主机访问**，比如内部 OA 系统，或者应用的管理后台系统，更或者是某些应用接口，这时候我们就需要控制一些 IP 访问，我们可以直接在`location`里进行配置。

可以直接在**default.conf 里进行配置**。

```
location / {
    deny   xxx.x.xx.xx;   禁止谁不能访问
    allow  xx.xx.xxx.xxx; 允许谁能访问
}
```

配置完成后，**重启一下服务器**就可以实现限制和允许访问了。

## Nginx 设置虚拟主机

> **虚拟主机**： 是指在一台物理主机服务器上划分出多个磁盘空间，每个磁盘空间都是一个虚拟主机，每台虚拟主机都可以对外提供 Web 服务，并且互不干扰。在外界看来，虚拟主机就是一台独立的服务器主机，这意味着用户能够利用虚拟主机把多个不同域名的网站部署在同一台服务器上，而不必再为简历一个网站单独购买一台服务器，既解决了维护服务器技术的难题，同时又极大地节省了服务器硬件成本和相关的维护费用。

配置虚拟主机 可以**基于端口号**、**基于 IP** 和**基于域名**

### 基于端口号设置虚拟主机

- 基于端口号来配置虚拟主机，算是 Nginx 中最简单的一种方式了。原理就是 Nginx 监听多个端口，根据不同的端口号，来区分不同的网站。

可以直接配置在主文件里`etc/nginx/nginx.conf`文件里， 也可以配置在子配置文件里`etc/nginx/conf.d/default.conf`。为了配置方便，配置在子文件较好。也可以直接在`conf.d`文件夹下 再创建一个 文件 (后缀必须为`.conf`)。分开独立配置更好维护。

```
例子： 再 conf.d 文件夹下 新建了一个为 8001nginx.conf 文件， 在文件配置一些基本信息 如下：

server{
    listen 8001;
    server_name localhost;
    root /usr/share/nginx/html/html8001;
    index index.html;
}
监听 8001端口 会自动访问 /usr/share/nginx/html/html8001 下的 index.html
```

### 基于 IP 的虚拟主机

- 基于 IP 和基于端口的配置几乎一样，只是把`server_name`选项，配置成 IP 就可以了

```
比如上面的配置 可以修改为
server{
    listen 80;
    server_name xxx.xx.xxx.xxx;
    root /usr/share/nginx/html/html8001;
    index index.html;
}
```

### 基于 Nginx 使用 域名设置虚拟主机 （常用）

首先必须先做**域名解析**，才能去 服务器上进行配置。

那 上面 **基于端口号设置虚拟主机** 的例子来说明：

如果是修改 `nginx` 下面的 `/etcnginx/conf.d/default.conf`文件， 它默认的 **监听端口就是 80**， 所以我们只需要修改一处配置就行。

```
server {
    listen       80;
    server_name  xxx.xxx.com/cn;  // 修改这处配置 为你配置的域名
    ... 其他配置
 }
```

如果修改的是 我们自己新建的 `xxx.conf`文件。 例如 **基于端口号设置虚拟主机** 时的例子 `8001nginx.conf 文件` 的一些配置信息

```
例子： 再 conf.d 文件夹下 新建了一个为 8001nginx.conf 文件， 在文件配置一些基本信息 如下：

server{
    listen 8001;             listen 80;         // 可以把 listen 监听端口 改成   80 端口
    server_name localhost;            // 修改这处配置 为你配置的域名
    root /usr/share/nginx/html/html8001;
    index index.html;
}
监听 8001端口 会自动访问 /usr/share/nginx/html/html8001 下的 index.html
```

```
注意：
	上面两个 可以同时存在的， 虽然监听的端口一样 但是 对应着不同的域名 和 root 服务默认启动目录 不一样
```
