import{_ as n,c as s,o as a,V as e}from"./chunks/framework.CK8YuoVq.js";const u=JSON.parse('{"title":"Nginx 基本使用","description":"","frontmatter":{},"headers":[],"relativePath":"posts/Nginx基本使用.md","filePath":"posts/Nginx基本使用.md","lastUpdated":1710741013000}'),p={name:"posts/Nginx基本使用.md"},l=e(`<h1 id="nginx-基本使用" tabindex="-1">Nginx 基本使用 <a class="header-anchor" href="#nginx-基本使用" aria-label="Permalink to &quot;Nginx 基本使用&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ol><li>基于 Yum 的 方式安装 Nginx</li></ol><p>先来查看 yum 是否存在 <code>yum list | grep nginx</code> 如果存在并且系统的 nginx 源 也存在，但是版本有些低。我们可以自己配置 yum 源</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[nginx]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> repo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baseurl=http://nginx.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">org/packages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/OS/OSRELEASE/$basearch/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gpgcheck=0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled=1</span></span></code></pre></div><p>复制上面的代码，然后在终端输入 <code>vim /etc/yum.repos.d/nginx.repo</code> 把上面的代码复制上去。 并且修改 baseurl。 我的是 centos 7 的版本，就修改对应自己的 linux 版本 例子： baseurl=<a href="http://nginx.org/packages/centos/7/$basearch/" target="_blank" rel="noreferrer">http://nginx.org/packages/centos/7/$basearch/</a></p><p>然后 再次 <code>yum list | grep nginx</code> 查看 是否有更高的版本</p><p>再开始安装 <code>yum install nginx</code></p><p>查看是否安装完成 <code>nginx -v</code></p><h2 id="查看-nginx-的安装目录" tabindex="-1">查看 Nginx 的安装目录 <a class="header-anchor" href="#查看-nginx-的安装目录" aria-label="Permalink to &quot;查看 Nginx 的安装目录&quot;">​</a></h2><p><code>rpm -ql nginx</code></p><p>主要关注的文件夹有这几个</p><ol><li><code>/etc/nginx/conf.d/default.conf</code> 文件是我们进行子配置的配置项存放处</li><li><code>/etc/nginx/nginx.conf</code>主配置文件会默认把这个文件夹中所有子配置项都引入</li><li><code>/usr/share/nginx/html/</code> 文件夹，通常静态文件都再这个文件夹</li></ol><p>主配置文件<code>nginx.conf</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>main        # 全局配置，对全局生效</span></span>
<span class="line"><span>├── events  # 配置影响 Nginx 服务器或与用户的网络连接</span></span>
<span class="line"><span>├── http    # 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置</span></span>
<span class="line"><span>│   ├── upstream # 配置后端服务器具体地址，负载均衡配置不可或缺的部分</span></span>
<span class="line"><span>│   ├── server   # 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块</span></span>
<span class="line"><span>│   ├── server</span></span>
<span class="line"><span>│   │   ├── location  # server 块可以包含多个 location 块，location 指令用于匹配 uri</span></span>
<span class="line"><span>│   │   ├── location</span></span>
<span class="line"><span>│   │   └── ...</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>└── ...</span></span></code></pre></div><p>子配置文件 大概 结构 <code>default.conf</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;   #配置监听端口</span></span>
<span class="line"><span>    server_name  localhost;  //配置域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #charset koi8-r;</span></span>
<span class="line"><span>    #access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;     #服务默认启动目录</span></span>
<span class="line"><span>        index  index.html index.htm;    #默认访问文件</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #error_page  404              /404.html;   # 配置404页面</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;   #错误状态码的显示页面，配置后需要重启</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #location ~ \\.php$ {</span></span>
<span class="line"><span>    #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #location ~ \\.php$ {</span></span>
<span class="line"><span>    #    root           html;</span></span>
<span class="line"><span>    #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>    #    fastcgi_index  index.php;</span></span>
<span class="line"><span>    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span>    #    include        fastcgi_params;</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span>    # concurs with nginx&#39;s one</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    #location ~ /\\.ht {</span></span>
<span class="line"><span>    #    deny  all;</span></span>
<span class="line"><span>    #}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Nginx 服务启动 、 停止 、 重启</p><h3 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h3><p>默认的情况下，Nginx 是不会自动启动的，需要我们手动进行启动，当然启动 Nginx 的方法也不是单一的。</p><h4 id="_1-直接启动" tabindex="-1">1. 直接启动 <a class="header-anchor" href="#_1-直接启动" aria-label="Permalink to &quot;1. 直接启动&quot;">​</a></h4><p>在 CentOS7.4 版本里（低版本是不行的），是可以直接直接使用<code>nginx</code>启动服务的。</p><ul><li><code>nginx</code></li></ul><h4 id="_2-使用-systemctl-命令启动" tabindex="-1">2. 使用 systemctl 命令启动 <a class="header-anchor" href="#_2-使用-systemctl-命令启动" aria-label="Permalink to &quot;2. 使用 systemctl 命令启动&quot;">​</a></h4><ul><li><code>systemctl start nginx.service</code></li></ul><p>输入命令后，没有任何提示，那我们如何知道 Nginx 服务已经启动了哪？可以使用 Linux 的组合命令，进行查询服务的运行状况。</p><ul><li><p><code>ps aux | grep nginx</code></p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>root     11482  0.0  0.0  46452   980 ?        Ss   12:41   0:00 nginx: master process nginx</span></span>
<span class="line"><span>nginx    11483  0.0  0.0  46848  2168 ?        S    12:41   0:00 nginx: worker process</span></span>
<span class="line"><span>root     11491  0.0  0.0 112708   984 pts/0    S+   12:44   0:00 grep --color=auto nginx</span></span></code></pre></div></li><li><p>出现这 3 条命令，就代表启动成功了</p></li></ul><p><strong>启动后就可以通过 公网 IP 访问了，访问前提是开放服务器的 80 端口</strong></p><h3 id="停止" tabindex="-1">停止 <a class="header-anchor" href="#停止" aria-label="Permalink to &quot;停止&quot;">​</a></h3><h4 id="_1-从容停止服务" tabindex="-1">1. 从容停止服务 <a class="header-anchor" href="#_1-从容停止服务" aria-label="Permalink to &quot;1. 从容停止服务&quot;">​</a></h4><p>这种方法比较温和，需要进程完成当前工作后再停止</p><ul><li><code>nginx -s quit</code></li></ul><h4 id="_2-立即停止" tabindex="-1">2. 立即停止 <a class="header-anchor" href="#_2-立即停止" aria-label="Permalink to &quot;2. 立即停止&quot;">​</a></h4><p>这种方法比较强硬，无论进程是否再工作都停止</p><ul><li><code>nginx -s stop</code></li></ul><h4 id="_3-killall-方法杀死进程" tabindex="-1">3. killall 方法杀死进程 <a class="header-anchor" href="#_3-killall-方法杀死进程" aria-label="Permalink to &quot;3. killall 方法杀死进程&quot;">​</a></h4><p>这种方法也是比较野蛮的，我们直接杀死进程</p><ul><li><code>killall nginx</code></li></ul><h4 id="_4-systemctl-停止" tabindex="-1">4. systemctl 停止 <a class="header-anchor" href="#_4-systemctl-停止" aria-label="Permalink to &quot;4. systemctl 停止&quot;">​</a></h4><ul><li><code>systemctl stop nginx.service</code></li></ul><h3 id="重启-nginx-服务" tabindex="-1">重启 Nginx 服务 <a class="header-anchor" href="#重启-nginx-服务" aria-label="Permalink to &quot;重启 Nginx 服务&quot;">​</a></h3><ul><li><code>systemctl restart nginx.service</code></li></ul><h3 id="重新载入配置文件" tabindex="-1">重新载入配置文件 <a class="header-anchor" href="#重新载入配置文件" aria-label="Permalink to &quot;重新载入配置文件&quot;">​</a></h3><p>在重新编写或者修改 Nginx 的配置文件后，都需要作一下重新载入，这时候可以用 Nginx 给的命令</p><ul><li><code>nginx -s reload</code></li></ul><h3 id="查看端口号" tabindex="-1">查看端口号 <a class="header-anchor" href="#查看端口号" aria-label="Permalink to &quot;查看端口号&quot;">​</a></h3><p>在默认情况下，Nginx 启动后会监听 80 端口，从而提供 HTTP 访问，如果 80 端口已经被占用则会启动失败。我么可以使用<code>netstat -tlnp</code>命令查看端口号的占用情况。</p><h2 id="nginx-自定义错误页面设置-和-简介访问设置" tabindex="-1">Nginx 自定义错误页面设置 和 简介访问设置 <a class="header-anchor" href="#nginx-自定义错误页面设置-和-简介访问设置" aria-label="Permalink to &quot;Nginx 自定义错误页面设置 和 简介访问设置&quot;">​</a></h2><h3 id="自定义错误页面设置" tabindex="-1">自定义错误页面设置 <a class="header-anchor" href="#自定义错误页面设置" aria-label="Permalink to &quot;自定义错误页面设置&quot;">​</a></h3><p>在 <code>/etc/nginx/conf.d/default.conf</code> 是可以看到下面这条代码的</p><ul><li><code>error_page 500 502 503 504 /50x.html;</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>error_page指令用于自定义错误页面，500，502，503，504 这些就是HTTP中最常见的错误代码，/50.html 用于表示当发生上述指定的任意一个错误的时候，都是用网站根目录下的/50.html文件进行处理。</span></span></code></pre></div><p>有些时候是要把这些错误页面单独的表现出来，**给用户更好的体验。**所以就要为每个错误码设置不同的页面。设置方法如下：</p><ul><li>我们在 <code>error_page 500 502 503 504 /50x.html;</code> 下在添加一条 <code>error_page 404 /404_error.html;</code></li></ul><p>然后再 <code>/usr/share/nginx/html</code> 去写这个 404_error.html 文件</p><p>然后重启 Nginx 服务 <code>nginx -s reload</code></p><h3 id="简介访问设置" tabindex="-1">简介访问设置 <a class="header-anchor" href="#简介访问设置" aria-label="Permalink to &quot;简介访问设置&quot;">​</a></h3><blockquote><p>有时候我们的服务器只<strong>允许特定主机访问</strong>，比如内部 OA 系统，或者应用的管理后台系统，更或者是某些应用接口，这时候我们就需要控制一些 IP 访问，我们可以直接在<code>location</code>里进行配置。</p></blockquote><p>可以直接在<strong>default.conf 里进行配置</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>    deny   xxx.x.xx.xx;   禁止谁不能访问</span></span>
<span class="line"><span>    allow  xx.xx.xxx.xxx; 允许谁能访问</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>配置完成后，<strong>重启一下服务器</strong>就可以实现限制和允许访问了。</p><h2 id="nginx-设置虚拟主机" tabindex="-1">Nginx 设置虚拟主机 <a class="header-anchor" href="#nginx-设置虚拟主机" aria-label="Permalink to &quot;Nginx 设置虚拟主机&quot;">​</a></h2><blockquote><p><strong>虚拟主机</strong>： 是指在一台物理主机服务器上划分出多个磁盘空间，每个磁盘空间都是一个虚拟主机，每台虚拟主机都可以对外提供 Web 服务，并且互不干扰。在外界看来，虚拟主机就是一台独立的服务器主机，这意味着用户能够利用虚拟主机把多个不同域名的网站部署在同一台服务器上，而不必再为简历一个网站单独购买一台服务器，既解决了维护服务器技术的难题，同时又极大地节省了服务器硬件成本和相关的维护费用。</p></blockquote><p>配置虚拟主机 可以<strong>基于端口号</strong>、<strong>基于 IP</strong> 和<strong>基于域名</strong></p><h3 id="基于端口号设置虚拟主机" tabindex="-1">基于端口号设置虚拟主机 <a class="header-anchor" href="#基于端口号设置虚拟主机" aria-label="Permalink to &quot;基于端口号设置虚拟主机&quot;">​</a></h3><ul><li>基于端口号来配置虚拟主机，算是 Nginx 中最简单的一种方式了。原理就是 Nginx 监听多个端口，根据不同的端口号，来区分不同的网站。</li></ul><p>可以直接配置在主文件里<code>etc/nginx/nginx.conf</code>文件里， 也可以配置在子配置文件里<code>etc/nginx/conf.d/default.conf</code>。为了配置方便，配置在子文件较好。也可以直接在<code>conf.d</code>文件夹下 再创建一个 文件 (后缀必须为<code>.conf</code>)。分开独立配置更好维护。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例子： 再 conf.d 文件夹下 新建了一个为 8001nginx.conf 文件， 在文件配置一些基本信息 如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server{</span></span>
<span class="line"><span>    listen 8001;</span></span>
<span class="line"><span>    server_name localhost;</span></span>
<span class="line"><span>    root /usr/share/nginx/html/html8001;</span></span>
<span class="line"><span>    index index.html;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>监听 8001端口 会自动访问 /usr/share/nginx/html/html8001 下的 index.html</span></span></code></pre></div><h3 id="基于-ip-的虚拟主机" tabindex="-1">基于 IP 的虚拟主机 <a class="header-anchor" href="#基于-ip-的虚拟主机" aria-label="Permalink to &quot;基于 IP 的虚拟主机&quot;">​</a></h3><ul><li>基于 IP 和基于端口的配置几乎一样，只是把<code>server_name</code>选项，配置成 IP 就可以了</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>比如上面的配置 可以修改为</span></span>
<span class="line"><span>server{</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name xxx.xx.xxx.xxx;</span></span>
<span class="line"><span>    root /usr/share/nginx/html/html8001;</span></span>
<span class="line"><span>    index index.html;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="基于-nginx-使用-域名设置虚拟主机-常用" tabindex="-1">基于 Nginx 使用 域名设置虚拟主机 （常用） <a class="header-anchor" href="#基于-nginx-使用-域名设置虚拟主机-常用" aria-label="Permalink to &quot;基于 Nginx 使用 域名设置虚拟主机 （常用）&quot;">​</a></h3><p>首先必须先做<strong>域名解析</strong>，才能去 服务器上进行配置。</p><p>那 上面 <strong>基于端口号设置虚拟主机</strong> 的例子来说明：</p><p>如果是修改 <code>nginx</code> 下面的 <code>/etcnginx/conf.d/default.conf</code>文件， 它默认的 <strong>监听端口就是 80</strong>， 所以我们只需要修改一处配置就行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  xxx.xxx.com/cn;  // 修改这处配置 为你配置的域名</span></span>
<span class="line"><span>    ... 其他配置</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>如果修改的是 我们自己新建的 <code>xxx.conf</code>文件。 例如 <strong>基于端口号设置虚拟主机</strong> 时的例子 <code>8001nginx.conf 文件</code> 的一些配置信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>例子： 再 conf.d 文件夹下 新建了一个为 8001nginx.conf 文件， 在文件配置一些基本信息 如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server{</span></span>
<span class="line"><span>    listen 8001;             listen 80;         // 可以把 listen 监听端口 改成   80 端口</span></span>
<span class="line"><span>    server_name localhost;            // 修改这处配置 为你配置的域名</span></span>
<span class="line"><span>    root /usr/share/nginx/html/html8001;</span></span>
<span class="line"><span>    index index.html;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>监听 8001端口 会自动访问 /usr/share/nginx/html/html8001 下的 index.html</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>注意：</span></span>
<span class="line"><span>	上面两个 可以同时存在的， 虽然监听的端口一样 但是 对应着不同的域名 和 root 服务默认启动目录 不一样</span></span></code></pre></div>`,79),i=[l];function t(c,o,r,d,h,g){return a(),s("div",null,i)}const m=n(p,[["render",t]]);export{u as __pageData,m as default};
