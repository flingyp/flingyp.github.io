import{_ as s,c as a,o as n,X as l}from"./chunks/framework.12317601.js";const g=JSON.parse('{"title":"Python模块","description":"","frontmatter":{"title":"Python模块","tags":["Python"],"categories":["记录学习-成长"]},"headers":[],"relativePath":"services/Python/Python模块.md","filePath":"services/Python/Python模块.md"}'),p={name:"services/Python/Python模块.md"},e=l(`<h2 id="模块和包" tabindex="-1">模块和包 <a class="header-anchor" href="#模块和包" aria-label="Permalink to &quot;模块和包&quot;">​</a></h2><h3 id="什么是模块" tabindex="-1">什么是模块？ <a class="header-anchor" href="#什么是模块" aria-label="Permalink to &quot;什么是模块？&quot;">​</a></h3><p>为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Python 中，一个.py 文件就可以称之为一个模块（Module）。</p><h3 id="模块的好处" tabindex="-1">模块的好处？ <a class="header-anchor" href="#模块的好处" aria-label="Permalink to &quot;模块的好处？&quot;">​</a></h3><ul><li><p>提高代码的可维护性</p></li><li><p>避免函数名和变量名的冲突</p></li></ul><h3 id="模块的分类" tabindex="-1">模块的分类： <a class="header-anchor" href="#模块的分类" aria-label="Permalink to &quot;模块的分类：&quot;">​</a></h3><ul><li><p>内置标准模块</p></li><li><p>第三方开源模块</p></li><li><p>自定义模块</p></li></ul><h3 id="模块导入调用" tabindex="-1">模块导入调用 <a class="header-anchor" href="#模块导入调用" aria-label="Permalink to &quot;模块导入调用&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> module_name </span><span style="color:#758575DD;">#导入  1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> module </span><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> xx  </span><span style="color:#758575DD;">## 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> module</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">xx</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">xx </span><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> xx </span><span style="color:#4D9375;">as</span><span style="color:#DBD7CAEE;"> rename </span><span style="color:#758575DD;">#导入后重命令 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> module</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">xx</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">xx </span><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">*</span><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;">#导入一个模块下的所有方法，不建议使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">module_name</span><span style="color:#666666;">()</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> module_name </span><span style="color:#A0ADA0;">#导入  1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">from</span><span style="color:#393A34;"> module </span><span style="color:#1E754F;">import</span><span style="color:#393A34;"> xx  </span><span style="color:#A0ADA0;">## 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">from</span><span style="color:#393A34;"> module</span><span style="color:#999999;">.</span><span style="color:#393A34;">xx</span><span style="color:#999999;">.</span><span style="color:#393A34;">xx </span><span style="color:#1E754F;">import</span><span style="color:#393A34;"> xx </span><span style="color:#1E754F;">as</span><span style="color:#393A34;"> rename </span><span style="color:#A0ADA0;">#导入后重命令 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">from</span><span style="color:#393A34;"> module</span><span style="color:#999999;">.</span><span style="color:#393A34;">xx</span><span style="color:#999999;">.</span><span style="color:#393A34;">xx </span><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">*</span><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">#导入一个模块下的所有方法，不建议使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">module_name</span><span style="color:#999999;">()</span></span></code></pre></div><h3 id="模块查找路径" tabindex="-1">模块查找路径 <a class="header-anchor" href="#模块查找路径" aria-label="Permalink to &quot;模块查找路径&quot;">​</a></h3><p>比如当前路径下能导入当前路径的模块，随便换个目录去导入之前路径的模块就有可能会报错。</p><p>这和导入模块的查找路径有关：</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> sys</span></span>
<span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">sys</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">path</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#758575DD;"># [</span></span>
<span class="line"><span style="color:#758575DD;">#     &#39;E:\\\\LianXi\\\\Python\\\\venv&#39;,</span></span>
<span class="line"><span style="color:#758575DD;">#     &#39;E:\\\\LianXi\\\\Python&#39;,</span></span>
<span class="line"><span style="color:#758575DD;">#     &#39;C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\Python38-32\\\\python38.zip&#39;,</span></span>
<span class="line"><span style="color:#758575DD;">#     &#39;C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\Python38-32\\\\DLLs&#39;,</span></span>
<span class="line"><span style="color:#758575DD;">#     &#39;C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\Python38-32\\\\lib&#39;,</span></span>
<span class="line"><span style="color:#758575DD;">#     &#39;C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\Python38-32&#39;,</span></span>
<span class="line"><span style="color:#758575DD;">#     &#39;E:\\\\LianXi\\\\Python\\\\venv&#39;, &#39;E:\\\\LianXi\\\\Python\\\\venv\\\\lib\\\\site-packages&#39;</span></span>
<span class="line"><span style="color:#758575DD;"># ]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> sys</span></span>
<span class="line"><span style="color:#998418;">print</span><span style="color:#999999;">(</span><span style="color:#393A34;">sys</span><span style="color:#999999;">.</span><span style="color:#393A34;">path</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#A0ADA0;"># [</span></span>
<span class="line"><span style="color:#A0ADA0;">#     &#39;E:\\\\LianXi\\\\Python\\\\venv&#39;,</span></span>
<span class="line"><span style="color:#A0ADA0;">#     &#39;E:\\\\LianXi\\\\Python&#39;,</span></span>
<span class="line"><span style="color:#A0ADA0;">#     &#39;C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\Python38-32\\\\python38.zip&#39;,</span></span>
<span class="line"><span style="color:#A0ADA0;">#     &#39;C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\Python38-32\\\\DLLs&#39;,</span></span>
<span class="line"><span style="color:#A0ADA0;">#     &#39;C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\Python38-32\\\\lib&#39;,</span></span>
<span class="line"><span style="color:#A0ADA0;">#     &#39;C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\Python38-32&#39;,</span></span>
<span class="line"><span style="color:#A0ADA0;">#     &#39;E:\\\\LianXi\\\\Python\\\\venv&#39;, &#39;E:\\\\LianXi\\\\Python\\\\venv\\\\lib\\\\site-packages&#39;</span></span>
<span class="line"><span style="color:#A0ADA0;"># ]</span></span></code></pre></div><p>sys.path 显示的路径是 Python 解释器会按照上面列表顺序去依次到每个目录下去匹配你要导入的模块名，只要在一个目录下匹配到了该模块名，就立刻导入，不再继续往后找。 如果没有找到就会报错。</p><p>所以，我们自己创建的模块若想在任何地方都能调用，那就得确保你的模块文件至少在模块路径的查找列表中。</p><ul><li>可以通过 <code>sys.path.append(base_path)</code> 向 sys.path 列表添加路径。</li></ul><h3 id="第三方包模块的安装和使用" tabindex="-1">第三方包模块的安装和使用 <a class="header-anchor" href="#第三方包模块的安装和使用" aria-label="Permalink to &quot;第三方包模块的安装和使用&quot;">​</a></h3><ul><li><p><a href="https://pypi.org/" target="_blank" rel="noreferrer">网址</a></p></li><li><p>通过命令行 pip 安装</p></li></ul><p><code>pip install moduleName</code></p><ul><li>pip 命令默认会连接在国外的 python 官方服务器下载，速度比较慢，你还可以使用国内的豆瓣源，数据会定期同步国外官网，速度快好多</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">\`pip install -i http://pypi.douban.com/simple/ alex_sayhi --trusted-host pypi.douban.com #alex_sayhi是模块名\`</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">-i 后面跟的是豆瓣源地址</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">—trusted-host 得加上，是通过网站 https 安全验证用的</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">\`pip install -i http://pypi.douban.com/simple/ alex_sayhi --trusted-host pypi.douban.com #alex_sayhi是模块名\`</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">-i 后面跟的是豆瓣源地址</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">—trusted-host 得加上，是通过网站 https 安全验证用的</span></span></code></pre></div><ul><li>通过国内的清华大学开源软件镜像站</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">例如 安装 Django</span></span>
<span class="line"><span style="color:#dbd7caee;">pip install -i https://pypi.tuna.tsinghua.edu.cn/simple Django</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">例如 安装 Django</span></span>
<span class="line"><span style="color:#393a34;">pip install -i https://pypi.tuna.tsinghua.edu.cn/simple Django</span></span></code></pre></div><h2 id="os-模块" tabindex="-1">os 模块 <a class="header-anchor" href="#os-模块" aria-label="Permalink to &quot;os 模块&quot;">​</a></h2><ul><li>os 模块提供了很多允许你的程序与操作系统直接交互的功能</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">得到当前工作目录，即当前Python脚本工作的目录路径: os.getcwd()</span></span>
<span class="line"><span style="color:#dbd7caee;">返回指定目录下的所有文件和目录名:os.listdir()</span></span>
<span class="line"><span style="color:#dbd7caee;">函数用来删除一个文件:os.remove()</span></span>
<span class="line"><span style="color:#dbd7caee;">删除多个目录：os.removedirs（r“c：\\python”）</span></span>
<span class="line"><span style="color:#dbd7caee;">检验给出的路径是否是一个文件：os.path.isfile()</span></span>
<span class="line"><span style="color:#dbd7caee;">检验给出的路径是否是一个目录：os.path.isdir()</span></span>
<span class="line"><span style="color:#dbd7caee;">判断是否是绝对路径：os.path.isabs()</span></span>
<span class="line"><span style="color:#dbd7caee;">检验给出的路径是否真地存:os.path.exists()</span></span>
<span class="line"><span style="color:#dbd7caee;">返回一个路径的目录名和文件名:os.path.split()     e.g os.path.split(&#39;/home/swaroop/byte/code/poem.txt&#39;) 结果：(&#39;/home/swaroop/byte/code&#39;, &#39;poem.txt&#39;)</span></span>
<span class="line"><span style="color:#dbd7caee;">分离扩展名：os.path.splitext()       e.g  os.path.splitext(&#39;/usr/local/test.py&#39;)    结果：(&#39;/usr/local/test&#39;, &#39;.py&#39;)</span></span>
<span class="line"><span style="color:#dbd7caee;">获取路径名：os.path.dirname()</span></span>
<span class="line"><span style="color:#dbd7caee;">获得绝对路径: os.path.abspath()</span></span>
<span class="line"><span style="color:#dbd7caee;">获取文件名：os.path.basename()</span></span>
<span class="line"><span style="color:#dbd7caee;">运行shell命令: os.system()</span></span>
<span class="line"><span style="color:#dbd7caee;">读取操作系统环境变量HOME的值:os.getenv(&quot;HOME&quot;)</span></span>
<span class="line"><span style="color:#dbd7caee;">返回操作系统所有的环境变量： os.environ</span></span>
<span class="line"><span style="color:#dbd7caee;">设置系统环境变量，仅程序运行时有效：os.environ.setdefault(&#39;HOME&#39;,&#39;/home/alex&#39;)</span></span>
<span class="line"><span style="color:#dbd7caee;">给出当前平台使用的行终止符:os.linesep    Windows使用&#39;\\r\\n&#39;，Linux and MAC使用&#39;\\n&#39;</span></span>
<span class="line"><span style="color:#dbd7caee;">指示你正在使用的平台：os.name       对于Windows，它是&#39;nt&#39;，而对于Linux/Unix用户，它是&#39;posix&#39;</span></span>
<span class="line"><span style="color:#dbd7caee;">重命名：os.rename（old， new）</span></span>
<span class="line"><span style="color:#dbd7caee;">创建多级目录：os.makedirs（r“c：\\python\\test”）</span></span>
<span class="line"><span style="color:#dbd7caee;">创建单个目录：os.mkdir（“test”）</span></span>
<span class="line"><span style="color:#dbd7caee;">获取文件属性：os.stat（file）</span></span>
<span class="line"><span style="color:#dbd7caee;">修改文件权限与时间戳：os.chmod（file）</span></span>
<span class="line"><span style="color:#dbd7caee;">获取文件大小：os.path.getsize（filename）</span></span>
<span class="line"><span style="color:#dbd7caee;">结合目录名与文件名：os.path.join(dir,filename)</span></span>
<span class="line"><span style="color:#dbd7caee;">改变工作目录到dirname: os.chdir(dirname)</span></span>
<span class="line"><span style="color:#dbd7caee;">获取当前终端的大小: os.get_terminal_size()</span></span>
<span class="line"><span style="color:#dbd7caee;">杀死进程: os.kill(10884,signal.SIGKILL)</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">得到当前工作目录，即当前Python脚本工作的目录路径: os.getcwd()</span></span>
<span class="line"><span style="color:#393a34;">返回指定目录下的所有文件和目录名:os.listdir()</span></span>
<span class="line"><span style="color:#393a34;">函数用来删除一个文件:os.remove()</span></span>
<span class="line"><span style="color:#393a34;">删除多个目录：os.removedirs（r“c：\\python”）</span></span>
<span class="line"><span style="color:#393a34;">检验给出的路径是否是一个文件：os.path.isfile()</span></span>
<span class="line"><span style="color:#393a34;">检验给出的路径是否是一个目录：os.path.isdir()</span></span>
<span class="line"><span style="color:#393a34;">判断是否是绝对路径：os.path.isabs()</span></span>
<span class="line"><span style="color:#393a34;">检验给出的路径是否真地存:os.path.exists()</span></span>
<span class="line"><span style="color:#393a34;">返回一个路径的目录名和文件名:os.path.split()     e.g os.path.split(&#39;/home/swaroop/byte/code/poem.txt&#39;) 结果：(&#39;/home/swaroop/byte/code&#39;, &#39;poem.txt&#39;)</span></span>
<span class="line"><span style="color:#393a34;">分离扩展名：os.path.splitext()       e.g  os.path.splitext(&#39;/usr/local/test.py&#39;)    结果：(&#39;/usr/local/test&#39;, &#39;.py&#39;)</span></span>
<span class="line"><span style="color:#393a34;">获取路径名：os.path.dirname()</span></span>
<span class="line"><span style="color:#393a34;">获得绝对路径: os.path.abspath()</span></span>
<span class="line"><span style="color:#393a34;">获取文件名：os.path.basename()</span></span>
<span class="line"><span style="color:#393a34;">运行shell命令: os.system()</span></span>
<span class="line"><span style="color:#393a34;">读取操作系统环境变量HOME的值:os.getenv(&quot;HOME&quot;)</span></span>
<span class="line"><span style="color:#393a34;">返回操作系统所有的环境变量： os.environ</span></span>
<span class="line"><span style="color:#393a34;">设置系统环境变量，仅程序运行时有效：os.environ.setdefault(&#39;HOME&#39;,&#39;/home/alex&#39;)</span></span>
<span class="line"><span style="color:#393a34;">给出当前平台使用的行终止符:os.linesep    Windows使用&#39;\\r\\n&#39;，Linux and MAC使用&#39;\\n&#39;</span></span>
<span class="line"><span style="color:#393a34;">指示你正在使用的平台：os.name       对于Windows，它是&#39;nt&#39;，而对于Linux/Unix用户，它是&#39;posix&#39;</span></span>
<span class="line"><span style="color:#393a34;">重命名：os.rename（old， new）</span></span>
<span class="line"><span style="color:#393a34;">创建多级目录：os.makedirs（r“c：\\python\\test”）</span></span>
<span class="line"><span style="color:#393a34;">创建单个目录：os.mkdir（“test”）</span></span>
<span class="line"><span style="color:#393a34;">获取文件属性：os.stat（file）</span></span>
<span class="line"><span style="color:#393a34;">修改文件权限与时间戳：os.chmod（file）</span></span>
<span class="line"><span style="color:#393a34;">获取文件大小：os.path.getsize（filename）</span></span>
<span class="line"><span style="color:#393a34;">结合目录名与文件名：os.path.join(dir,filename)</span></span>
<span class="line"><span style="color:#393a34;">改变工作目录到dirname: os.chdir(dirname)</span></span>
<span class="line"><span style="color:#393a34;">获取当前终端的大小: os.get_terminal_size()</span></span>
<span class="line"><span style="color:#393a34;">杀死进程: os.kill(10884,signal.SIGKILL)</span></span></code></pre></div><h2 id="sys-模块" tabindex="-1">sys 模块 <a class="header-anchor" href="#sys-模块" aria-label="Permalink to &quot;sys 模块&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">sys.argv           命令行参数List，第一个元素是程序本身路径</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.exit(n)        退出程序，正常退出时exit(0)</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.version        获取Python解释程序的版本信息</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.maxint         最大的Int值</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.path           返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.platform       返回操作系统平台名称</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.stdout.write(&#39;please:&#39;)  #标准输出 , 引出进度条的例子， 注，在py3上不行，可以用print代替</span></span>
<span class="line"><span style="color:#dbd7caee;">val = sys.stdin.readline()[:-1] #标准输入</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.getrecursionlimit() #获取最大递归层数</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.setrecursionlimit(1200) #设置最大递归层数</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.getdefaultencoding()  #获取解释器默认编码</span></span>
<span class="line"><span style="color:#dbd7caee;">sys.getfilesystemencoding  #获取内存数据存到文件里的默认编码</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">sys.argv           命令行参数List，第一个元素是程序本身路径</span></span>
<span class="line"><span style="color:#393a34;">sys.exit(n)        退出程序，正常退出时exit(0)</span></span>
<span class="line"><span style="color:#393a34;">sys.version        获取Python解释程序的版本信息</span></span>
<span class="line"><span style="color:#393a34;">sys.maxint         最大的Int值</span></span>
<span class="line"><span style="color:#393a34;">sys.path           返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值</span></span>
<span class="line"><span style="color:#393a34;">sys.platform       返回操作系统平台名称</span></span>
<span class="line"><span style="color:#393a34;">sys.stdout.write(&#39;please:&#39;)  #标准输出 , 引出进度条的例子， 注，在py3上不行，可以用print代替</span></span>
<span class="line"><span style="color:#393a34;">val = sys.stdin.readline()[:-1] #标准输入</span></span>
<span class="line"><span style="color:#393a34;">sys.getrecursionlimit() #获取最大递归层数</span></span>
<span class="line"><span style="color:#393a34;">sys.setrecursionlimit(1200) #设置最大递归层数</span></span>
<span class="line"><span style="color:#393a34;">sys.getdefaultencoding()  #获取解释器默认编码</span></span>
<span class="line"><span style="color:#393a34;">sys.getfilesystemencoding  #获取内存数据存到文件里的默认编码</span></span></code></pre></div><h2 id="time-模块" tabindex="-1">time 模块 <a class="header-anchor" href="#time-模块" aria-label="Permalink to &quot;time 模块&quot;">​</a></h2><ul><li><p>time.localtime([secs]) 将一个时间戳转换为当前时区的 struct_time。 如果 secs 没有提供，则以当前事件为准。</p></li><li><p>time.gmtime([secs]) 和 localtime()方法类似，gmtime()方法是将一个时间戳转换为 UTC 时区（0 时区）的 struct_time。</p></li><li><p>time.time() 返回当前的时间戳</p></li><li><p>time.mktime(t)：将一个 struct_time 转化为时间戳。</p></li><li><p>time.sleep(secs)：线程推迟指定的时间运行,单位为秒。</p></li><li><p>time.asctime([t])：把一个表示时间的元组或者 struct_time 表示为这种形式：’Sun Oct 1 12:04:38 2019’。如果没有参数，将会将 time.localtime()作为参数传入。</p></li><li><p>time.ctime([secs])：把一个时间戳（按秒计算的浮点数）转化为 time.asctime()的形式。如果参数未给或者为 None 的时候，将会默认 time.time()为参数。它的作用相当于 time.asctime(time.localtime(secs))。</p></li><li><p>time.strftime(format[, t])：把一个代表时间的元组或者 struct_time（如由 time.localtime()和 time.gmtime()返回）转化为格式化的时间字符串。如果 t 未指定，将传入 time.localtime()。</p></li><li><p>time.strptime(string[, format])：把一个格式化时间字符串转化为 struct_time。实际上它和 strftime()是逆操作。</p><ul><li>举例：time.strptime(‘2017-10-3 17:54’,”%Y-%m-%d %H:%M”) #输出 time.struct_time(tm_year=2017, tm_mon=10, tm_mday=3, tm_hour=17, tm_min=54, tm_sec=0, tm_wday=1, tm_yday=276, tm_isdst=-1)</li></ul></li></ul><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#B8A965;">print</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">time</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">localtime</span><span style="color:#666666;">())</span></span>
<span class="line"><span style="color:#758575DD;"># time.struct_time(tm_year=2020, tm_mon=8, tm_mday=29, tm_hour=20, tm_min=0, tm_sec=20, tm_wday=5, tm_yday=242</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">time</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">strftime</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">“</span><span style="color:#CB7676;">%</span><span style="color:#DBD7CAEE;">Y</span><span style="color:#CB7676;">-%</span><span style="color:#DBD7CAEE;">m</span><span style="color:#CB7676;">-%</span><span style="color:#DBD7CAEE;">d </span><span style="color:#CB7676;">%</span><span style="color:#DBD7CAEE;">X”</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> time</span><span style="color:#666666;">.</span><span style="color:#DBD7CAEE;">localtime</span><span style="color:#666666;">())</span></span>
<span class="line"><span style="color:#758575DD;">#输出’2017-10-01 12:14:23’</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#998418;">print</span><span style="color:#999999;">(</span><span style="color:#393A34;">time</span><span style="color:#999999;">.</span><span style="color:#393A34;">localtime</span><span style="color:#999999;">())</span></span>
<span class="line"><span style="color:#A0ADA0;"># time.struct_time(tm_year=2020, tm_mon=8, tm_mday=29, tm_hour=20, tm_min=0, tm_sec=20, tm_wday=5, tm_yday=242</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">time</span><span style="color:#999999;">.</span><span style="color:#393A34;">strftime</span><span style="color:#999999;">(</span><span style="color:#393A34;">“</span><span style="color:#AB5959;">%</span><span style="color:#393A34;">Y</span><span style="color:#AB5959;">-%</span><span style="color:#393A34;">m</span><span style="color:#AB5959;">-%</span><span style="color:#393A34;">d </span><span style="color:#AB5959;">%</span><span style="color:#393A34;">X”</span><span style="color:#999999;">,</span><span style="color:#393A34;"> time</span><span style="color:#999999;">.</span><span style="color:#393A34;">localtime</span><span style="color:#999999;">())</span></span>
<span class="line"><span style="color:#A0ADA0;">#输出’2017-10-01 12:14:23’</span></span></code></pre></div><h2 id="datetime-模块" tabindex="-1">datetime 模块 <a class="header-anchor" href="#datetime-模块" aria-label="Permalink to &quot;datetime 模块&quot;">​</a></h2><p><a href="https://www.jianshu.com/p/113bd56f7b56" target="_blank" rel="noreferrer">参考文章</a></p><p>相比于 time 模块， datetime 模块的接口更直观、容易调用</p><p>datetime 有下面几个类：</p><ul><li><p>datetime.data 表示日期的类 （常用属性有 year, month, day）</p></li><li><p>datetime.time 表示时间的类 （常用的属性有 hour, minute, second, microsecond）</p></li><li><p>datetime.datetime 表示日期的时间</p></li><li><p>datetime.timedelta 表示时间间隔， 就是两个时间点之间的长度</p></li><li><p>datetime.tzinfo 与时区有关的相关信息</p></li></ul><h2 id="random-随机模块" tabindex="-1">random 随机模块 <a class="header-anchor" href="#random-随机模块" aria-label="Permalink to &quot;random 随机模块&quot;">​</a></h2><p>程序中有很多地方需要用到随机字符，比如登录网站的随机验证码，通过 random 模块可以很容易生成随机字符串</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; random.randrange(1,10) #返回1-10之间的一个随机数，不包括10</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; random.randint(1,10) #返回1-10之间的一个随机数，包括10</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; random.randrange(0, 100, 2) #随机选取0到100间的偶数</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; random.random()  #返回一个随机浮点数</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; random.choice(&#39;abce3#$@1&#39;) #返回一个给定数据集合中的随机字符</span></span>
<span class="line"><span style="color:#dbd7caee;">&#39;#&#39;</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; random.sample(&#39;abcdefghij&#39;,3)  #从多个字符中选取特定数量的字符</span></span>
<span class="line"><span style="color:#dbd7caee;">[&#39;a&#39;, &#39;d&#39;, &#39;b&#39;]</span></span>
<span class="line"><span style="color:#dbd7caee;">#生成随机字符串</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; import string</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; &#39;&#39;.join(random.sample(string.ascii_lowercase + string.digits, 6))</span></span>
<span class="line"><span style="color:#dbd7caee;">&#39;4fvda1&#39;</span></span>
<span class="line"><span style="color:#dbd7caee;">#洗牌</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; a</span></span>
<span class="line"><span style="color:#dbd7caee;">[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; random.shuffle(a)</span></span>
<span class="line"><span style="color:#dbd7caee;">&gt;&gt;&gt; a</span></span>
<span class="line"><span style="color:#dbd7caee;">[3, 0, 7, 2, 1, 6, 5, 8, 9, 4]</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">&gt;&gt;&gt; random.randrange(1,10) #返回1-10之间的一个随机数，不包括10</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; random.randint(1,10) #返回1-10之间的一个随机数，包括10</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; random.randrange(0, 100, 2) #随机选取0到100间的偶数</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; random.random()  #返回一个随机浮点数</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; random.choice(&#39;abce3#$@1&#39;) #返回一个给定数据集合中的随机字符</span></span>
<span class="line"><span style="color:#393a34;">&#39;#&#39;</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; random.sample(&#39;abcdefghij&#39;,3)  #从多个字符中选取特定数量的字符</span></span>
<span class="line"><span style="color:#393a34;">[&#39;a&#39;, &#39;d&#39;, &#39;b&#39;]</span></span>
<span class="line"><span style="color:#393a34;">#生成随机字符串</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; import string</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; &#39;&#39;.join(random.sample(string.ascii_lowercase + string.digits, 6))</span></span>
<span class="line"><span style="color:#393a34;">&#39;4fvda1&#39;</span></span>
<span class="line"><span style="color:#393a34;">#洗牌</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; a</span></span>
<span class="line"><span style="color:#393a34;">[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; random.shuffle(a)</span></span>
<span class="line"><span style="color:#393a34;">&gt;&gt;&gt; a</span></span>
<span class="line"><span style="color:#393a34;">[3, 0, 7, 2, 1, 6, 5, 8, 9, 4]</span></span></code></pre></div>`,39),o=[e];function t(c,i,r,d,y,m){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{g as __pageData,u as default};
