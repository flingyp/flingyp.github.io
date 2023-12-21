---
title: Python爬虫
tags:
  - Python
categories:
  - 记录学习-成长
---

## 数据解析三种方式：

### 正则

### BeautifulSoup

#### 数据解析原理

- 实例化一个 BeautifulSoup 对象，并且将页面源码数据加载到该对象中

- 通过调用 BeautifulSoup 对象中的相关属性或者方法进行标签定位和数据提取

#### 环境安装

- pip install bs4

- pip install lxml (一种解析器)

#### 使用方法

- `from bs4 import BeautifulSoup`

- 对象的实例化

  - 将本地 html 的文档中的数据加载到该对象中

  ```py
  # 本地的 html
  fp = open('./xx.html', 'r', encoding='utf-8')
  soup = BeautifulSoup(fp, 'lxml')
  print(soup)
  # 打印的就是 源码
  ```

  - 将互联网上获取的页面源码加载到该对象中

  ```
  通过 request.text 获取到的 html 源码 放进 BeautifulSoup就可以了
  soup = BeautifulSoup(request.text, 'lxml')
  ```

- 相关方法和属性

  ```
  soup = BeautifulSoup(request.text, 'lxml')

  soup.tagName(标签名) 返回的是文档中第一次出现的 tagName对应的标签
      例子：  soup.a、 soup.div

  soup.find('tagName') 返回的是文档中第一次出现的 tagName对应的标签
      例子： soup.find('div')
      如果要获取具体的 div, 可以加个参数 可以是 class / id / 其他的属性 后面 一定要有 _。
      例子： soup.find('div', class_='xxx') 会定位到 class类名为 xxx 的div

  soup.find_all('tagName') 和 soup.find('tagName') 一样 后面可以接具体 属性参数
      例子： soup.find_all('a')  返回符合要求的所有标签 （列表）

  soup.select('一种选择器(#选择器、 .选择器、、、)')
      例子： soup.select('.tang') 返回 类名是 tang的， 返回的是一个列表
  ```

* 获取标签之间的文本数据

  ```
   例子： soup.p 下面有 属性 方法
   soup.p.text/string/get_text()  获取文本数据
   区别：
      text/ get_text()  可以获取某一个标签中所有的文本内容
      string 只可以获取该标签下面直系的文本内容
  ```

- 获取标签中的属性值

  ```
      例子：  soup.a
      soup.a['href'] 直接后面接属性名称
  ```

### xpath 解析

> 最常用的且最便捷高效的一种解析方式 [语法知识](https://www.runoob.com/xpath/xpath-syntax.html)

- xpath 解析原理

  - 1.实例化一个 etree 的对象，且需要将被解析的页面源码数据加载到该对象中

  - 2.调用 etree 对象中的 xpath 方法结合 xpath 表达式实现标签定位和内容捕获

- 安装 (就需要安装个 lxml)

  - pip install lxml

- 实例化一个 etree 对象

  - 本地的 html 文档中的源码加载到 etree 对象中：

    - tree.parse(filePath)

  - 将互联网上获取的源码加载到 etree 对象中：

    - tree.HTML(request.text)

- xpath('xpath 表达式')

  - ```py
    from lxml import etree

    # 实例化 etree 对象
    tree = etree.parse(request.text)
    tree.xpath('xpath表达式')
    ```

  - ```
        # 常用xpath表达式
        属性定位：
        # 找到class属性值为song的div标签
        //div[@class="song"]
        层级&索引定位：
            #找到class属性值为tang的div的直系子标签ul下的第二个子标签li下的直系子标签a
            //div[@class="tang"]/ul/li[2]/a
        逻辑运算：
            #找到href属性值为空且class属性值为du的a标签
            //a[@href="" and @class="du"]
        模糊匹配：
            //div[contains(@class, "ng")]
            //div[starts-with(@class, "ta")]
        取文本：
            # /表示获取某个标签下的文本内容
            # //表示获取某个标签下的文本内容和所有子标签下的文本内容
            //div[@class="song"]/p[1]/text()
            //div[@class="tang"]//text()
        取属性：
            //div[@class="tang"]//li[2]/a/@href
    ```

## 使用 request 模块[介绍](https://blog.csdn.net/qq_37616069/article/details/80376776)

在使用 request 模块时 出现中文乱码的情况解决方式： [对应文章](https://blog.csdn.net/qq_17249717/article/details/98472363)

1. F12 打开网页源码查看网页的编码方式

2. print(request.encoding) 查看 request 的编码方式。 如果不一致就会出现乱码的情况

3. 修改 response.encoding 为对应网页的编码。

## 验证码识别

```
在爬虫的时候有可能会遇到验证码的问题。
识别验证码的工具： 超级鹰 http://www.chaojiying.com/cases.html
```

## 异步爬虫

1. 目的： 在爬虫中使用异步实现高性能的数据爬取操作

2. 异步爬虫的方法

   - 多进程、多线程

     - 好处： 可以为相关阻塞的操作单独开启线程或者进程， 阻塞操作就可以异步执行
     - 弊端： 无法无限制的开启多线程或多进程

   - 进程池、线程池
     - 好处： 我们可以降低系统对进程或者线程创建和销毁的频率，从而很好的降低系统的开销
     - 弊端： 池中线程或进程的数量是有上限的

3. 线程池的基本使用

```py
import time
# 导入线程池模块对应的类
from multiprocessing.dummy import Pool
def sayhello(str):
    print("Hello ",str)
    time.sleep(2)
start = time.time()
name_list =['xiaozi','aa','bb','cc']
#实例化线程池对象，开启了4个线程
pool = Pool(4)
pool.map(sayhello,name_list)
pool.close()
pool.join()
end = time.time()
print(end-start)

# 执行结果
# Hello  xiaozi
# Hello  aa
# Hello  bb
# Hello  cc
# 2.0805933475494385
```

4. 单线程 + 异步携程（推荐）

```
从 Python 3.4 开始，Python 中加入了协程的概念，但这个版本的协程还是以生成器对象为基础的，在 Python 3.5 则增加了 async/await，使得协程的实现更加方便。首先我们需要了解下面几个概念：

event_loop：事件循环，相当于一个无限循环，我们可以把一些函数注册到这个事件循环上，当满足某些条件的时候，函数就会被循环执行。程序是按照设定的顺序从头执行到尾，运行的次数也是完全按照设定。当在编写异步程序时，必然其中有部分程序的运行耗时是比较久的，需要先让出当前程序的控制权，让其在背后运行，让另一部分的程序先运行起来。当背后运行的程序完成后，也需要及时通知主程序已经完成任务可以进行下一步操作，但这个过程所需的时间是不确定的，需要主程序不断的监听状态，一旦收到了任务完成的消息，就开始进行下一步。loop就是这个持续不断的监视器。

coroutine：中文翻译叫协程，在 Python 中常指代为协程对象类型，我们可以将协程对象注册到事件循环中，它会被事件循环调用。我们可以使用 async 关键字来定义一个方法，这个方法在调用时不会立即被执行，而是返回一个协程对象。

task：任务，它是对协程对象的进一步封装，包含了任务的各个状态。

future：代表将来执行或还没有执行的任务，实际上和 task 没有本质区别。

另外我们还需要了解 async/await 关键字，它是从 Python 3.5 才出现的，专门用于定义协程。其中，async 定义一个协程，await 用来挂起阻塞方法的执行。
```

## selenium 模块的使用

> selenium 最初是一个**自动化测试工具**，Selenium 测试直接运行在浏览器中，就像真正的用户在操作一样，而爬虫中使用它主要是为了解决 requests 无法直接执行 JavaScript 代码的问题 selenium 本质是通过驱动浏览器，完全模拟浏览器的操作，比如跳转、输入、点击、下拉等，来拿到网页渲染之后的结果，可支持多种浏览器

在下载使用 selenium 的前提下：

- 下载浏览器的驱动程序 (下面网址是谷歌的驱动程序下载地址)
  - http://chromedriver.storage.googleapis.com/index.html
- 查看驱动和本地浏览器版本的映射关系
  - http://blog.csdn.net/huilan_same/article/details/51896672
- 下载好浏览器驱动程序后，再安装 selenium
  - pip install selenium

### 简单示例：

```py
from selenium inport webriver

# 实例化一个浏览器对象 （传入浏览器驱动程序安装对应路径）, r是防止字符转义
bro = webdriver.Chrome(executable_path='驱动程序安装好后的路径)
# 这时候运行这个 python文件就会自动打开浏览器

# 会自动跳转到相应的网址上去
bro.get("一个网页地址")

# 获取该网址的网页的源码, 使用正则、xpath等等来解析数据
page_text = bro.page_source

# 关闭浏览器
bro.quit()
```

### 浏览器驱动目录加入环境变量中的 Path

使用 `webdriver.Chrome(executable_path='驱动程序安装好后的路径)`， 我们需要指定浏览器驱动路径。

如果把浏览器驱动的 **所在目录**加入环境变量 Path 中，以后写 selenium 就不用去指定浏览器驱动路径。直接 `wb=webdriver.Chrome()` 就可以了。因为，Selenium 会自动在环境变量 Path 指定的那些目录里查找名为 chromedriver.exe 的文件。

一定要注意的是， 加入环境变量 Path 的，

不是浏览器驱动全路径，比如 `d:\webdrivers\chromedriver.exe`

而是 浏览器驱动所在目录，比如 `d:\webdrivers`

### 浏览器的创建

> Selenium 支持非常多的浏览器，如 Chrome、Firefox、Edge 等，还有 Android、BlackBerry 等手机端的浏览器。另外，也支持无界面浏览器 PhantomJS。

```python
from selenium import webdriver

bro = webdriver.Chrome()
bro = webdriver.Firefox()
bro = webdriver.Edge()
bro = webdriver.PhantomJS()
bro = webdriver.Safari()
```

### 获取页面源码

> 通过**实例化对象下的 page_source 属性**可以获取网页的源代码， 接着就可以使用解析库（正则、BeautifulSoup、xpath）等来提取数据了。

### 标签定位

```python
bro.find_element_by_id()
bro.find_element_by_name()
bro.find_element_by_class_name()
bro.find_element_by_tag_name()
bro.find_element_by_link_text()
bro.find_element_by_partial_link_text()
bro.find_element_by_xpath()
bro.find_element_by_css_selector()
```

注意：

- find_element_by_xxx 找的是第一个符合条件的标签，find_elements_by_xxx 找的是所有符合条件的标签。
- 根据 ID、CSS 选择器和 XPath 获取，它们返回的结果完全一致。
- 另外，Selenium 还提供了通用方法`find_element()`，它需要传入两个参数：查找方式`By`和值。实际上，它就是`find_element_by_id()`这种方法的通用函数版本，比如`find_element_by_id(id)`就等价于`find_element(By.ID, id)`，二者得到的结果完全一致。

### 等待界面元素出现

在我们进行网页操作的时候， 有的元素内容不是可以立即出现的， 可能会等待一段时间。而这个时候如果我们去定位元素而没有定位到元素则有可能会抛出异常。我们这时候就需要等待界面元素的刷新。有两种方法实现：

1. 通过 sleep(x) 去延迟程序的执行

2. Selenium 提供了一个更合理的解决方案：当发现元素没有找到的时候， 并不 立即返回 找不到元素的错误。而是周期性（每隔半秒钟）重新寻找该元素，直到该元素找到，或者超出指定最大等待时长，这时才 抛出异常

   1. Webdriver 对象上有个方法叫 **implicitly_wait** 接收一个参数，用来指定最大等待时长

例子：`wd.implicitly_wait(10)`

那么后续所有的 `find_element` 或者 `find_elements` 之类的方法调用 都会采用上面的策略：

如果找不到元素， 每隔 半秒钟 再去界面上查看一次， 直到找到该元素， 或者 过了 10 秒 最大时长。

### 标签交互

> selenium 可以驱动浏览器来执行一些操作，也就是说可以让浏览器执行一些动作。
>
> 进行标签交互的前提是 获取到标签（定位）
>
> 比较常见的有：

```python
假如：
# 获取到一个 id为 q 的输入框
input = bro.find_element_by_id('q')

输入文字
input.send_keys('输入的内容')

清空文字
input.clear()

点击按钮
button.click()

获取元素文本内容
element.text

获取元素属性
element.get_attribute('属性名')

获取整个元素对应的HTML文本内容
element.get_attribute('outerHTML')

只是想获取某个元素 内部 的HTML文本内容
element.get_attribute('innerHTML')
```

### 执行 JS 代码

> 对于某些操作，Selenium API 并没有提供。比如，下拉进度条，它可以直接模拟运行 JavaScript，此时使用`execute_script()`方法即可实现，代码如下：

```python
# demo
from selenium import webdriver
browser = webdriver.Chrome()
browser.get('https://www.jd.com/')
browser.execute_script('window.scrollTo(0, document.body.scrollHeight)')
browser.execute_script('alert("123")')
```

### 前进和后退、关闭浏览器

```
前进
bro.forward()
后退
bro.back()
关闭浏览器
bro.quit()
```

### 动作链

> 一些交互动作都是针对某个节点执行的。比如，对于输入框，我们就调用它的输入文字和清空文字方法；对于按钮，就调用它的点击方法。其实，还有另外一些操作，它们没有特定的执行对象，**比如鼠标拖曳、键盘按键等，这些动作用另一种方式来执行，那就是动作链。**

- selenium 处理 iframe
  - 如果想定位的元素存在于 iframe 标签里面中， 则必须使用 `bro.switch_to_frame(id)` id 为 frame 标记的 id 名字

```
动作链（拖动）： from selenium.webdriver import ActionChains
实例化一个动作链对象: action = ActionChains(bro)
长按且点击操作： click_and_hold(div)
移动: move_by_offset(x, y)
让动作链立即执行： perform()
释放动作链对象: action.release()
```

### 切换到新的窗口

在网页上操作的时候，我们经常遇到，点击一个链接 或者 按钮，就会打开一个 `新窗口` 。

如果我们用 Selenium 写自动化程序 **在新窗口里面 打开一个新网址**， 并且去自动化操作新窗口里面的元素，会有什么问题呢？

问题就在于，即使新窗口打开了， 这时候，我们的 WebDriver 对象对应的 还是老窗口，自动化操作也还是在老窗口进行。

需要使用**Webdriver 对象的 switch_to 属性的 window 方法** `wd.switch_to.window(handle)`

其中，参数 handle 需要传入什么呢？

WebDriver 对象有 window_handles 属性，这是一个列表对象， 里面包括了当前浏览器里面**所有的窗口句柄**。

所谓句柄，大家可以想象成对应网页窗口的一个 ID。 例子：

```python
for handle in wd.window_handles:
    # 先切换到该窗口
    wd.switch_to.window(handle)
    # 得到该窗口的标题栏字符串，判断是不是我们要操作的那个窗口
    if 'Bing' in wd.title:
        # 如果是，那么这时候WebDriver对象就是对应的该该窗口，正好，跳出循环，
        break
```

上面的代码的意思是：

- 我们依次获取 wd.window_handles 里面的所有 句柄 对象， 并且调用 wd.switch_to.window(handle) 方法，切入到每个窗口，

- 然后检查里面该窗口对象的属性（可以是标题栏，地址栏），判断是不是我们要操作的那个窗口，如果是，就跳出循环。

同样的，如果我们在新窗口 操作结束后， 还要回到原来的窗口，该怎么办？

我们可以仍然使用上面的方法，依次切入窗口，然后根据 标题栏 之类的属性值判断。

还有更省事的方法。

因为我们一开始就在 原来的窗口里面，我们知道 进入新窗口操作完后，还要回来，可以事先 保存该老窗口的 句柄，使用如下方法

```py
# mainWindow变量保存当前窗口的句柄
mainWindow = wd.current_window_handle
```

切换到新窗口操作完后，就可以直接像下面这样，将 driver 对应的对象返回到原来的窗口

```py
#通过前面保存的老窗口的句柄，自己切换到老窗口
wd.switch_to.window(mainWindow)
```

## scrapy 框架

> 纯 python 实现的爬虫框架，用户只需要定制开发几个模块就可以轻松的实现一个爬虫，用来抓取网页内容以及各种图片，非常之方便～

### 环境安装

windows 系统安装

- `pip install wheel`
  - 验证安装
  - `>wheel version` ->`wheel 0.35.1`
- 下载 twisted [下载地址](http://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted) 查找到对应 自己的 Python 版本
  - 安装 twisted `pip install Twisted‑20.3.0‑cp38‑cp38‑win_amd64.whl`
- `pip install pywin32`
  - `Successfully installed pywin32-228`
- `pip install scrapy`
- 测试： 在终端中输入 scrapy 指令，没有报错就是安装成功
  - `Scrapy 2.3.0 - no active project`
  - 或者输入 `scrapy version` 出现上面的版本号 代表安装成功

linux 和 mac 系统安装：

- `pip install scrapy`

### scrapy 工作流程

![流程](https://img2018.cnblogs.com/i-beta/1761010/201912/1761010-20191215201123248-1684106535.png)

![](https://img2018.cnblogs.com/i-beta/1761010/201912/1761010-20191215201102574-1002424750.png)

### scrapy 使用流程

- 创建工程

  - `scrapy startproject ProName`

- 进入工程目录

  - `cd ProName`

- 创建爬虫文件

  - `scrapy genspider spiderName www.xxx.com`

- 编写相关代码
- 执行工程

- `scrapy crawl spiderName`

- ```python
  爬虫文件解析
  # -*- coding: utf-8 -*-
  import scrapy
  class QiubaiSpider(scrapy.Spider):
      name = 'qiubai' #应用名称
      #允许爬取的域名（如果遇到非该域名的url则爬取不到数据）
      allowed_domains = ['https://www.qiushibaike.com/']
      #起始爬取的url
      start_urls = ['https://www.qiushibaike.com/']
      #访问起始URL并获取结果后的回调函数，该函数的response参数就是向起始的url发送请求后，获取的响应对象.该函数返回值必须为可迭代对象或者NUll
      def parse(self, response):
          print(response.text) #获取字符串类型的响应内容
          print(response.body)#获取字节类型的相应内容
  ```

- ```python
  配置文件 settings.py 修改
  #修改内容及其结果如下：
  #19行：
  USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36' #伪装请求载体身份
  22行：ROBOTSTXT_OBEY = False  #可以忽略或者不遵守robots协议
  ```

### scrapy 中的文件

```python
## 自己写的 spider 文件
import scrapy

class FirstSpiderSpider(scrapy.Spider):
    name = 'first_spider'  # 爬虫名
    allowed_domains = ['www.xxx.com']  # 允许爬取的范围
    start_urls = ['http://www.xxx.com/']  # 最开始请求的url的地址

    def parse(self, response):
        # 处理 start_urls 地址对应的响应
        ......

        yield item  # spider 爬取的数据传动 pipeline

# 从选择器中提取字符串：
1. extract() 返回一个包含有字符串数据的列表
2. extract_first() 返回列表中的第一个字符串
# 注意点：
1. spider中的 parse 方法名不能改
2. 需要爬取的url地址必须要属性 allowed_domains 下的链接
3. response.xpath() 返回的是一个含有 selector对象的列表， 所以要用到 extract()、extract_first()
```

```python
# 使用 pipeline
class ScrapyDemo01Pipeline:
    def open_spider(self, spider): # 爬虫开启的时候执行一次

    def close_spider(self, spider): # 爬虫关闭的时候执行一次

    def process_item(self, item, spider):
        return item


# 注意点：
1. 需要在 setting中开启 pipeline
ITEM_PIPELINES = {
    # pipeline的位置                                # 权重，数字越低权重越高
   'scrapy_demo01.pipelines.ScrapyDemo01Pipeline': 300,
}
2. pipeline中的 process_item 方法名不能修改
3. 可以有多个 pipeline
	1. 可能会有多个 spider，不同pipeline处理不同item的内容
    2. 一个pipeline的内容可能要做不同的操作
```

```python
# 使用 items
# 参考： https://blog.csdn.net/qq_34405401/article/details/104101226
items介绍： 在items.py的函数里定义好我们预先需要的字段，并且引入次py文件的函数后，只能定义好的字段
item使用：
	1. 在itmes.py预先定义好使用字段
items.py可以有多个函数，每个函数定义不同爬虫的预先使用字段，而在pipelines处理数据时得判断是哪个函数下的字段
	2. 在爬虫文件引用该类，注意爬虫文件里出现的字段只能是该类定义好的
from xxx.items import xxxItem 对应的类
item = xxxItem() 此时的item是对象

import scrapy
class ScrapyDemo01Item(scrapy.Item):
    # define the fields for your item here like:
    # 1. 在itmes.py预先定义好使用字段
    name = scrapy.Field()
    pass
```

```python
# setting 介绍
BOT_NAME = 'boss' # 项目名
SPIDER_MODULES = ['boss.spiders'] # 爬虫的位置
NEWSPIDER_MODULE = 'boss.spiders'

ROBOTSTXT_OBEY = False 默认为True 遵守robot协议
#CONCURRENT_REQUESTS = 32  设置最大的并发请求
#DOWNLOAD_DELAY = 3 下载延迟
#CONCURRENT_REQUESTS_PER_DOMAIN = 16 每个域名最大请求并发数
#CONCURRENT_REQUESTS_PER_IP = 16  每个IP最大请求并发数

#COOKIES_ENABLED = False  Cookie开启 默认开启了
#TELNETCONSOLE_ENABLED = False
#DEFAULT_REQUEST_HEADERS = {   默认请求头
#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
#   'Accept-Language': 'en',
#}
```

### 相关模块

#### [logging 日志模块](https://www.cnblogs.com/zhiliang9408/p/10003796.html)

logging 在 scrapy 的使用

- 在 settings 中设置

- settings 中设置 LOG_LEVEL = "WARNING" (表示只会显示 WARNING 和 WARNING 以上等级的日志)
- settings 中设置 LOG_FILE = "./a.log" (表示设置日志保存的位置， 设置后终端不会显示日志内容)

- 在 spider.py 或 pipelines.py 等文件中使用 `import logging`， 实例化 logger， 使用 logger 输出内容

  - ```python
    # -*- coding: utf-8 -*-
    # 1. 简单的方式使用 logging
    import scrapy
    import logging

    class Itcast1Spider(scrapy.Spider):
        name = 'itcast1'
        allowed_domains = ['itcast.cn']
        start_urls = ['http://itcast.cn/']

        def parse(self, response):
            for i in range(10):
                item={}
                item["come_from"]="itcast1"
                logging.warning(item)
                pass

    # -*- coding: utf-8 -*-
    # 2. 实例化 logger 后使用
    import scrapy
    import logging

    logger=logging.getLogger(__name__)
    logger=logging.basicConfig(...) #设置日志输出的样式，格式（可看考别人的格式）

    class Itcast2Spider(scrapy.Spider):
        name = 'itcast2'
        allowed_domains = ['itcast.cn']
        start_urls = ['http://itcast.cn/']

        def parse(self, response):
            for i in range(10):
                item = {}
                item["come_from"] = "itcast1"
                logger.warning(item)
                yield item
    ```

logging 在普通 py 文件中使用

```python
import logging
logger=logging.basicConfig(...) #设置日志输出的样式，格式（可看考别人的格式）
#实例化一个
logger=logging.getlogger(__name__)
#在任何py文件中调用Logger即可
```

### scrapy 实现翻页请求数据，了解 scrapy.Request()

- 关于 scrapy 实现翻页请求数据的文章

  - https://www.cnblogs.com/zhiliang9408/p/10004141.html
  - https://www.jianshu.com/p/66f6b8819fef

- 可以在 setting 中设置好 User-Agent

  - ```
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
    ```

```python
# -*- coding: utf-8 -*-
import scrapy
class HrSpider(scrapy.Spider):
    name = 'Hr'
    allowed_domains = ['tencent.com']
    start_urls = ['https://hr.tencent.com/position.php']

    def parse(self, response):
        tr_list=response.xpath("//table[@class='tablelist']/tr")[1:-1]
        for tr in tr_list:
            item={}
            item["title"]=tr.xpath("./td[1]/a/text()").extract_first()
            item["postion"]=tr.xpath("./td[2]/text()").extract_first()
            item["publish_date"]=tr.xpath("./td[5]/text()").extract_first()
            yield item  # 将本页的数据传入 pipeline 进行数据存储
            #找到下一页的URL地址,实现翻页请求
            next_url=response.xpath("//a[@id='next']/@href").extract_first()
            # 判断， 指如果是最后一页的话 它的 url地址为 javascript:; 就不需要执行下面的内容了。
            if next_url !=" javascript:;":
                next_url="https://hr.tencent.com/"+next_url
                # scrapy.Request能构建一个 requests对象，同时指定提取数据的 callback函数
                yield scrapy.Request(
                    next_url,
                    # 这里指定的就是 def parse(self, response):本身。
                    # 如果是要提取其他不同数据,要执行其他的函数 也可以在 spider文件中添加其他的爬虫函数
                    callback=self.parse
                    # 那么 就需要添加一个 self.parse1 函数来爬取对应的数据
                    # callback = self.parse1
                )
```

- 关于 scrapy.Request 的知识点

- ```
  scrapy.Request(url, [callback=None, method='GET', headers=None, body=None, cookies=None, meta=None,
                           encoding='utf-8', priority=0, dont_filter=False, errback=None, flags=None])

  scrapy.Request 的常用参数为：
  	callback: 指定传入的url交给哪个解析函数去处理
  	meta： 实现不同的解析函数中传递数据。meta会默认携带部分消息：比如下载延迟，请求深度
  	dont_filter: 让scrapy的去重不会过来当前url， scrapy默认有url去重功能，对需要重复请求的url有重要用途

  ```

### Scrapy 中的[CrawlSpider](https://www.jianshu.com/p/a6a08b4f7c04)

在此之前，我们有以大部分代码在 **寻找下一页 URL 地址** 或者是内容的 URL 地址上面。这一过程能更简单些吗？

1. 从 response 中提取所有的 a 标签对应的 url 地址
2. 自动的构造自己的 requests 请求，发送给 Scrapy 引擎

生成 crawlspider 爬虫文件的命令: `scrapy genspider -t crawl xxx爬虫名 www.xxx.com`

### scrapy 持久化存储操作

基于终端指令持久化操作

- 执行指令： 执行输出指定格式进行存储：将爬取到的数据写入不同格式的文件中进行存储
  - scrapy crawl 爬虫名称 -o xxx.json [Python Scrapy 导出 json 中文乱码问题](https://blog.csdn.net/xiao_yi_xiao/article/details/101790680)
  - 不使用命令保存 JSON 的写法： [JSON](https://www.cnblogs.com/sanduzxcvbnm/p/10309401.html)
  - scrapy crawl 爬虫名称 -o xxx.xml
  - scrapy crawl 爬虫名称 -o xxx.csv

基于管道持久化存储

- 流程

  - 数据解析

  - 在 item 类中定义相关的属性

  - 将解析的数据封装存储到 item 类型的对象

  - 将 item 类型的对象提交给管道进行持久化存储操作

    - ```python
      yield xxx
      ```

  - 在`pipelines`管道类的 process_item 中要将其接收到的 item 对象中存储的数据进行持久化操作

  - 在配置文件中开启管道

    - ```pyhon
      在 settings.py 文件中 找到这部分代码 把前面的注释清楚就行。
      ITEM_PIPELINES = {
         'scrapy_demo01.pipelines.ScrapyDemo01Pipeline': 300,
      }
      ```

## 爬虫例子：

### Demo 1 爬取 [豆瓣电影](https://movie.douban.com/) 排行榜 （喜剧类型） 的数据

```py
# https://movie.douban.com/j/chart/top_list?type=11&interval_id=100%3A90&action=&start=0&limit=20
# https://movie.douban.com/j/chart/top_list?type=11&interval_id=100%3A90&action=&start=20&limit=20
# https://movie.douban.com/j/chart/top_list?type=11&interval_id=100%3A90&action=&start=40&limit=20
# GET
# params:
'''
    type: 11   # 影片类型
    interval_id: 100:90
    action:
    start: 0    从第几条开始
    limit: 1    取多少条
'''
# return:  [{}, {}, {},...] JSON

import requests
import json
start = 0   # 从第几条开始
limit = 20  # 取多少条
type = 11   # 影片类型
# 请求地址
doban_url = "https://movie.douban.com/j/chart/top_list"
# headers
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
}
# params
params = {
    'type': type,
    'interval_id': '100:90',
    'action':'',
    'start': start,
    'limit': limit
}
response = requests.get(doban_url, params = params, headers = headers)
doban_data = response.json()
# print(doban_data)

# 创建一个 json 文件 保存起来
f = open('./dobanFile.json',mode='w',encoding='utf-8')
json.dump(doban_data, fp=f, ensure_ascii=False)
# json.dump 序列化时对中文默认使用的ascii编码.想输出真正的中文需要指定ensure_ascii=False
print("Over!!!")
```

### Demo 2 爬取 [肯德基](http://www.kfc.com.cn/kfccda/storelist/index.aspx)不同城市餐厅的信息

```py
# http://www.kfc.com.cn/kfccda/ashx/GetStoreList.ashx?op=keyword
# POST
# text/plain; charset=utf-8
# User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36

# params:
'''
URL 上的参数
    op=keyword

POST 携带的隐藏参数
    cname:
    pid:
    keyword: 上饶   你想查询的城市
    pageIndex: 1   页数
    pageSize: 10   返回数量
'''
import requests
import json
keyword = '上海'
pageIndex = 1
pageSize = 50
kdj_url = "http://www.kfc.com.cn/kfccda/ashx/GetStoreList.ashx"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
}
params = {
    'op': 'keyword'
}
form_data = {
    'cname':'',
    'pid':'',
    'keyword': keyword,
    'pageIndex': pageIndex,
    'pageSize': pageSize,
}

response = requests.post(kdj_url, params  = params, data=form_data, headers=headers)
kdj_data = response.json()
fp = open('./'+ keyword + '肯德基餐厅信息.json',mode='w',encoding='utf-8')
json.dump(kdj_data, fp=fp, ensure_ascii=False)
print("Over!!!")
```

### 爬取某网站图片到本地

**Demo 3**

```py
import re
import requests

base_url = "https://qq.yh31.com/qt/fj/List_9.html"
# 图片路径的前缀部分
prefix_img_url = "https://qq.yh31.com"

# 爬取网址的源码
def orgin_code(url):
    response = requests.get(url)
    html_str = response.text
    return html_str

#  爬取下一页链接网址
def get_next_html_url(html):
    next_html_urls = []
    next_html_url = re.findall(r'href="(.*?.html)"', html)
    for next in next_html_url:
        is_true = re.match(r'^/qt/fj/List_\d.html$', next)
        if is_true != None:
            next = "https://qq.yh31.com" + next
            next_html_urls.append(next)
    next_url = next_html_urls.pop()  # 删除链接重复的一个
    return next_url


sum_img_count = 0
# 爬取图片 url: 爬取那个网页的网址  prefix_img_url: 图片网址的前缀部分
def getImgs(url,prefix_img_url, sum_img_count):
    html = orgin_code(url)
    imgSrc = re.findall(r'src="(.*?.jpg)"', html)
    next_url = get_next_html_url(html) # 下一页网址链接
    # 爬取图片
    num = sum_img_count
    for item_url in imgSrc:
        is_true = item_url.startswith('/tp')
        if is_true:
            item_url = prefix_img_url + item_url
        img_data = requests.get(item_url)
        with open(rf'./图片/demo01/{num}.jpg', 'wb') as f:
            f.write(img_data.content)
            f.close()
            print(f'第{num}张图片下载完毕')
            num = num + 1
    sum_img_count = num
    getImgs(next_url, prefix_img_url, sum_img_count)

getImgs(base_url, prefix_img_url, sum_img_count)
```

**Demo 4**

```py
import re
import requests
base_url = "http://www.netbian.com/index.htm"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
}
# 爬取网页源码
def orgin_code(url):
    response = requests.get(url, headers = headers)
    return response.text

# 获取下一页网址  html： 网页解析出来的源码
def next_url(html):
    # 选出以 htm 结尾的 地址
    urls = re.findall(r'href="(.*?.htm)"', html)
    url = []
    for next in urls:
        if next.startswith('/index'):
            next = "http://www.netbian.com" + next
            url.append(next)
    # 下一页的网址
    return url.pop()



# 爬取 图片
def get_img(html, count):
    imgs = re.findall(r'src="(.*?.jpg)"', html)
    num = count
    for img_url in imgs:
        img_data = requests.get(img_url, headers=headers)
        with open(rf'./图片/电脑壁纸/第{num}张.jpg', 'wb') as fp:
            fp.write(img_data.content)
            fp.close()
            print(f'第{num}张图片下载完毕')
            num = num + 1
    return num

#图片累计数量
# imgs_count = 0
# 爬取网页图片 url：爬取的网址
def climb_imgs(url, count=1):
    html = orgin_code(url)
    # 下一页的链接的地址
    get_next_url = next_url(html)
    img_count = get_img(html, count)
    # 爬取下一页图片
    climb_imgs(get_next_url, img_count)


climb_imgs(base_url)
```

### bs4 爬取三国演义

```py
import requests
from bs4 import BeautifulSoup

base_url = "https://www.shicimingju.com/book/sanguoyanyi.html"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
}

response = requests.get(base_url, headers = headers)
soup = BeautifulSoup(response.text, 'lxml')
li_list = soup.select('.book-mulu ul li')
f = open(file='./三国演义.txt', mode='w', encoding="utf8")
for li in li_list:
    # 章节标题
    title = li.a.string
    # 该章节的内容 链接
    work_content = li.a['href']
    work_content = "https://www.shicimingju.com" + work_content
    print(f"爬取{title}....")
    # 爬取 内容
    content = requests.get(work_content, headers = headers)
    content_soup = BeautifulSoup(content.text, 'lxml')
    # 该章节内容
    content_list = content_soup.find('div', class_='chapter_content').text
    f.write(f"{title}: {content_list}\n")

f.close()
print("三国演义爬取完毕!")
```

### 爬取彼岸桌面 4K 高清图片

```py
import requests
from lxml import etree
import os
# 美女类
base_url_1 = "http://www.netbian.com/meinv/index.htm"
# 动漫类
base_url_2 = "http://www.netbian.com/dongman"
# 游戏类
base_url_3 = "http://www.netbian.com/youxi"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
}


# 获取html页面源码 url：网页地址
def get_html_code(url):
    response = requests.get(url, headers = headers)
    # 网页源码 编码方式为 gbk
    response.encoding = 'gbk'
    return response.text

# 获取下一页链接 html: 网页源码
def get_next_html_url(html):
    # 实例化 tree 对象
    tree_html = etree.HTML(html)
    next_page_list = tree_html.xpath('//div[@class="page"]/a')
    url = []
    for next_page in next_page_list:
        is_next_page = next_page.xpath('./text()')
        if(is_next_page[0] == '下一页>'):
            next_page_url = "http://netbian.com" + next_page.xpath('./@href')[0]
            url.append(next_page_url)
    return url[0]

# 爬取图片
def get_url1_a_href(html):
    # 实例化 tree 对象
    tree_html = etree.HTML(html)
    # 下一页的链接
    next_page_url = get_next_html_url(html)
    print(next_page_url)
    # 爬取第一个网页的 图片 a 标签链接
    li_list = tree_html.xpath('//div[@class="list"]/ul/li')
    # 观察发现 li_list 第三个和其他的标签结果不一样。 所以删除
    del li_list[2]
    # 判断 本地文件夹是否存在
    file_path = "./图片/4K游戏图片"
    is_file_exist = os.path.exists(file_path)
    # 文件不存在
    if is_file_exist == False:
        os.mkdir(file_path)
    for li in li_list:
        a_href = "http://www.netbian.com" + li.xpath('./a//@href')[0]
        next_html = get_html_code(a_href)
        # 实例化 tree 对象
        tree_html = etree.HTML(next_html)
        # 获取到 真正4K图片的URL
        img_4k_url = "http://www.netbian.com" + tree_html.xpath('//div[@class="pic-down"]/a/@href')[0]
        # 爬取真正的 4K图片
        next_4k_html = get_html_code(img_4k_url)
        img_4k_html = etree.HTML(next_4k_html)
        # 4K图片下载地址
        download_4kimg_url = img_4k_html.xpath('//table//a/@href')[0]
        title_4kimg = img_4k_html.xpath('//table//a/@title')[0]
        # 下载图片到本地
        img_4k_data = requests.get(download_4kimg_url)
        # 往文件夹里写图片
        with open(rf'{file_path}/{title_4kimg}.jpg', 'wb') as fp:
            fp.write(img_4k_data.content)
            print(f'{title_4kimg}下载完毕')

    # 爬取下一页
    next_page_html = get_html_code(next_page_url)
    get_url1_a_href(next_page_html)




html = get_html_code(base_url_3)
get_url1_a_href(html)
```

### 体验使用线程池爬取 梨视频的四个视频

```py
import requests
from lxml import etree
import re
import os
from multiprocessing.dummy import Pool

base_url = "https://www.pearvideo.com/category_5"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
}

response = requests.get(base_url, headers=headers)
tree = etree.HTML(response.text)
li_list = tree.xpath('//*[@id="listvideoList"]/ul/li')
# 列表， 存放视频名字， 地址
videoes = []
for li in li_list:
    next_url = "https://www.pearvideo.com/" + li.xpath('./div/a/@href')[0]
    # 视频名字
    video_name = li.xpath('./div/a/div[@class="vervideo-title"]/text()')[0] + '.mp4'
    next_url_html = requests.get(next_url, headers = headers).text
    re_str = 'srcUrl="(.*?)",vdoUrl=srcUrl'
    # 视频链接
    video_url = re.findall(re_str, next_url_html)[0]
    dic = {
        'name': video_name,
        'video_url': video_url
    }
    videoes.append(dic)

file_path = "./视频/梨视频"
is_file_exist = os.path.exists(file_path)
# 文件不存在
if is_file_exist == False:
    os.makedirs(file_path)

def download_video(dic):
    print(dic['video_url'])
    video_data = requests.get(dic['video_url'], headers = headers).content
    print(dic['name'] + '下载中...')
    with open(file_path+'/'+dic['name'], 'wb') as fp:
        fp.write(video_data)
        print(dic['name'] + '下载完成')


pool = Pool(4)
pool.map(download_video, videoes)

pool.close()
pool.join()
```

### 爬取前程无忧 Web 前端岗位信息， 本地存储

```python
import requests;
import re;
import json;

# 获取源码
# page 页数
def get_content(page):
    # 000000,000000,0000,00,9,99, 代表的是 全国
    # Web 是搜索的岗位关键词
    url = 'https://search.51job.com/list/000000,000000,0000,00,9,99,Web,2,'+ str(page) +'.html'
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
    }
    html = requests.get(url, headers = headers).text
    return html

# html 源码
def get(html):
    data = re.findall(r'window.__SEARCH_RESULT__ =(.*?)</script>', html)
    return json.loads(data[0])['engine_search_result']

 # 1. 保存在本地 txt
for  j in range(1,10):
     print("正在爬取第"+str(j)+"页数据...")
     html=get_content(j)#调用获取网页原码
     for i in get(html):
         # print(i)
         # i['job_name'] 职位名称
         # i['company_name'] 公司名称
         # salary 薪资待遇
         # i['workarea_text'] 公司位置
         # treatment 公司福利
         # i['attribute_text']  相关条件
         require = ""
         for item in i['attribute_text']:
             require = require  + item + '\t'
         salary = i['providesalary_text'] if i['providesalary_text'] != '' else '薪酬未知'
         treatment = i['jobwelf'] if i['jobwelf'] !='' else '待遇未知'
         with open ('51job.txt','a',encoding='utf-8') as f:
             f.write(i['job_name']+'\t'+i['company_name']+'\t'+salary+'\t'+i['workarea_text']+'\t'+treatment+ "\t" +require+'\n')
             f.close()

# 2. 写入 excel 文件里
workbook = xlwt.Workbook(encoding='utf-8')
worksheet = workbook.add_sheet('51job')
headData = ['招聘职位','公司名称','薪资待遇','公司位置','公司福利', '相关信息']#表头部信息
for colnum in range(0, 6):
     worksheet.write(0, colnum, headData[colnum], xlwt.easyxf('font: bold on'))  # 行，列

# 把爬取的内容写到 excel
def excel_write(content, index):
    for i in content:
        data = []
        data.append(i['job_name'])
        data.append(i['company_name'])
        salary = i['providesalary_text'] if i['providesalary_text'] != '' else '薪酬未知'
        data.append(salary)
        data.append(i['workarea_text'])
        treatment = i['jobwelf'] if i['jobwelf'] != '' else '待遇未知'
        data.append(treatment)
        require = ""
        for item in i['attribute_text']:
          require = require  + item + '\t'
        data.append(require)
        for i in range(0,6):
            worksheet.write(index, i, data[i])
        index+=1

for each in range(1,10):
    index = (each-1)*50 + 1
    excel_write(get(get_content(each)), index)

workbook.save('51job.xls')
```

### 爬取上面前程无忧的数据后、使用 pyecharts + xlrd 来实现可视化图表

```python
import xlrd
import re

# 读取文件
data = xlrd.open_workbook(r'./51job.xls')
table = data.sheets()[0]

# table.nrows 多少行
# table.ncols 多少列
# 获取整行和整列的值
# table.row_values(1)
# table.col_values(2)

salary_list = []
min_salary_list = []
max_salary_list = []
null_salary_list = []
def salary(excel):
    for index in range(1, excel.nrows):
        # 获取薪资待遇
        # 0.8 - 1万 / 月
        salary = excel.cell(index, 2).value
        salary_list.append(salary)
        # 最低薪资
        min_salary = re.findall(r'(.*?)-', salary)
        min_salary = min_salary[0] if len(min_salary) == 1 else "薪酬未知"
        min_salary_list.append(min_salary) if min_salary != "薪酬未知" else null_salary_list.append(min_salary)
        # 最高薪资
        max_salary = re.findall(r'-(.*?)\S/', salary)
        max_salary = max_salary[0] if len(max_salary) == 1 else "薪酬未知"
        max_salary_list.append(max_salary) if max_salary != "薪酬未知" else null_salary_list.append(max_salary)

experience_list = []
def experience(excel):
    for index in range(1, excel.nrows):
        # 获取 工作经验
        experiences = excel.cell(index, 5).value
        experience = re.findall(r'\s(.*?)年经验', experiences)
        experience = experience[0] if len(experience) == 1 and experience[0] != "无需"  else "0"
        # 取 最大工作经验
        experience_min_max = re.findall(r'(\d)-(\d)', experience)
        experience_average= 0 if len(experience_min_max) == 0 else int(experience_min_max[0][1])
        experience_list.append(experience_average)

education_list = []
master_list = []  # 硕士
undergraduate_list = []  # 本科
specialty_list = []  # 专科
other_list = []  # 其他
def education(excel):
    for index in range(1, excel.nrows):
        # 获取 学历
        educations = excel.cell(index, 5).value
        education = re.findall(r'\s(本科|大专|硕士)\s招', educations)
        education = education[0] if len(education) == 1 else "其他"
        education_list.append(education)
        if education == "硕士":
            master_list.append(education)
        elif education == "本科":
            undergraduate_list.append(education)
        elif education == "大专":
            specialty_list.append(education)
        else:
            other_list.append(education)

salary(table)
experience(table)
education(table)

#  450个Web开发部分岗位学历要求 饼图图表

from pyecharts import Pie,Bar, Grid

attr = ["硕士", "本科", "大专", "其他"]
education_data = [len(master_list), len(undergraduate_list), len(specialty_list), len(other_list)]
pie = Pie("Web开发部分岗位学历要求" ,title_pos='center')
pie.add("", attr, education_data,
        #radius=[35,75],
        is_label_show=True,#显示标签
        legend_orient="vertical", legend_pos="right") #图例设置为垂直排列，右侧
pie.render("Web开发部分岗位学历要求.html")

#  450个Web开发部分岗位学历要求 树状图图表

attr = ["第{}个Web岗位".format(i) for i in range(len(experience_list))]
# v1 = [random.randint(1, 30) for _ in range(30)] #创建数据
bar = Bar("450个Web岗位对应经验要求",title_pos='center')#设置标题位置为center
bar.add("", attr, experience_list, is_label_show=True, is_datazoom_show=True) #设置datazoom
bar.render("450个Web岗位对应经验要求.html")



# 上面两个图标 显示在一个页面
from pyecharts import Bar, Pie
from pyecharts import Page
page = Page()
# bar
attr = ["第{}个Web岗位".format(i) for i in range(len(experience_list))]
bar = Bar("450个Web岗位对应经验要求",title_pos='center')
# bar.use_theme("macarons")
bar.add("", attr, experience_list, is_label_show=True, is_datazoom_show=True, is_stack=True) #设置datazoom
page.add(bar)


attr = ["硕士", "本科", "大专", "其他"]
education_data = [len(master_list), len(undergraduate_list), len(specialty_list), len(other_list)]
pie = Pie("Web开发部分岗位学历要求" ,title_pos='center')
pie.add("", attr, education_data,
        #radius=[35,75],
        is_label_show=True,#显示标签
        legend_orient="vertical", legend_pos="right") #图例设置为垂直排列，右侧
page.add(pie)
page.render('Web开发部分岗位学历要求.html')
```
