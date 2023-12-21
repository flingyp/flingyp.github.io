---
title: Python模块
tags:
  - Python
categories:
  - 记录学习-成长
---

## 模块和包

### 什么是模块？

为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Python 中，一个.py 文件就可以称之为一个模块（Module）。

### 模块的好处？

- 提高代码的可维护性

- 避免函数名和变量名的冲突

### 模块的分类：

- 内置标准模块

- 第三方开源模块

- 自定义模块

### 模块导入调用

```py
import module_name #导入  1

from module import xx  ## 2

from module.xx.xx import xx as rename #导入后重命令 3

from module.xx.xx import *  #导入一个模块下的所有方法，不建议使用

module_name()
```

### 模块查找路径

比如当前路径下能导入当前路径的模块，随便换个目录去导入之前路径的模块就有可能会报错。

这和导入模块的查找路径有关：

```py
import sys
print(sys.path)
# [
#     'E:\\LianXi\\Python\\venv',
#     'E:\\LianXi\\Python',
#     'C:\\Users\\Administrator\\AppData\\Local\\Programs\\Python\\Python38-32\\python38.zip',
#     'C:\\Users\\Administrator\\AppData\\Local\\Programs\\Python\\Python38-32\\DLLs',
#     'C:\\Users\\Administrator\\AppData\\Local\\Programs\\Python\\Python38-32\\lib',
#     'C:\\Users\\Administrator\\AppData\\Local\\Programs\\Python\\Python38-32',
#     'E:\\LianXi\\Python\\venv', 'E:\\LianXi\\Python\\venv\\lib\\site-packages'
# ]
```

sys.path 显示的路径是 Python 解释器会按照上面列表顺序去依次到每个目录下去匹配你要导入的模块名，只要在一个目录下匹配到了该模块名，就立刻导入，不再继续往后找。 如果没有找到就会报错。

所以，我们自己创建的模块若想在任何地方都能调用，那就得确保你的模块文件至少在模块路径的查找列表中。

- 可以通过 `sys.path.append(base_path)` 向 sys.path 列表添加路径。

### 第三方包模块的安装和使用

- [网址](https://pypi.org/)

- 通过命令行 pip 安装

`pip install moduleName`

- pip 命令默认会连接在国外的 python 官方服务器下载，速度比较慢，你还可以使用国内的豆瓣源，数据会定期同步国外官网，速度快好多

```
`pip install -i http://pypi.douban.com/simple/ alex_sayhi --trusted-host pypi.douban.com #alex_sayhi是模块名`

-i 后面跟的是豆瓣源地址

—trusted-host 得加上，是通过网站 https 安全验证用的
```

- 通过国内的清华大学开源软件镜像站

```
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package

例如 安装 Django
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple Django
```

## os 模块

- os 模块提供了很多允许你的程序与操作系统直接交互的功能

```
得到当前工作目录，即当前Python脚本工作的目录路径: os.getcwd()
返回指定目录下的所有文件和目录名:os.listdir()
函数用来删除一个文件:os.remove()
删除多个目录：os.removedirs（r“c：\python”）
检验给出的路径是否是一个文件：os.path.isfile()
检验给出的路径是否是一个目录：os.path.isdir()
判断是否是绝对路径：os.path.isabs()
检验给出的路径是否真地存:os.path.exists()
返回一个路径的目录名和文件名:os.path.split()     e.g os.path.split('/home/swaroop/byte/code/poem.txt') 结果：('/home/swaroop/byte/code', 'poem.txt')
分离扩展名：os.path.splitext()       e.g  os.path.splitext('/usr/local/test.py')    结果：('/usr/local/test', '.py')
获取路径名：os.path.dirname()
获得绝对路径: os.path.abspath()
获取文件名：os.path.basename()
运行shell命令: os.system()
读取操作系统环境变量HOME的值:os.getenv("HOME")
返回操作系统所有的环境变量： os.environ
设置系统环境变量，仅程序运行时有效：os.environ.setdefault('HOME','/home/alex')
给出当前平台使用的行终止符:os.linesep    Windows使用'\r\n'，Linux and MAC使用'\n'
指示你正在使用的平台：os.name       对于Windows，它是'nt'，而对于Linux/Unix用户，它是'posix'
重命名：os.rename（old， new）
创建多级目录：os.makedirs（r“c：\python\test”）
创建单个目录：os.mkdir（“test”）
获取文件属性：os.stat（file）
修改文件权限与时间戳：os.chmod（file）
获取文件大小：os.path.getsize（filename）
结合目录名与文件名：os.path.join(dir,filename)
改变工作目录到dirname: os.chdir(dirname)
获取当前终端的大小: os.get_terminal_size()
杀死进程: os.kill(10884,signal.SIGKILL)
```

## sys 模块

```
sys.argv           命令行参数List，第一个元素是程序本身路径
sys.exit(n)        退出程序，正常退出时exit(0)
sys.version        获取Python解释程序的版本信息
sys.maxint         最大的Int值
sys.path           返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值
sys.platform       返回操作系统平台名称
sys.stdout.write('please:')  #标准输出 , 引出进度条的例子， 注，在py3上不行，可以用print代替
val = sys.stdin.readline()[:-1] #标准输入
sys.getrecursionlimit() #获取最大递归层数
sys.setrecursionlimit(1200) #设置最大递归层数
sys.getdefaultencoding()  #获取解释器默认编码
sys.getfilesystemencoding  #获取内存数据存到文件里的默认编码
```

## time 模块

- time.localtime([secs]) 将一个时间戳转换为当前时区的 struct_time。 如果 secs 没有提供，则以当前事件为准。

- time.gmtime([secs]) 和 localtime()方法类似，gmtime()方法是将一个时间戳转换为 UTC 时区（0 时区）的 struct_time。

- time.time() 返回当前的时间戳

- time.mktime(t)：将一个 struct_time 转化为时间戳。

- time.sleep(secs)：线程推迟指定的时间运行,单位为秒。

- time.asctime([t])：把一个表示时间的元组或者 struct_time 表示为这种形式：’Sun Oct 1 12:04:38 2019’。如果没有参数，将会将 time.localtime()作为参数传入。

- time.ctime([secs])：把一个时间戳（按秒计算的浮点数）转化为 time.asctime()的形式。如果参数未给或者为 None 的时候，将会默认 time.time()为参数。它的作用相当于 time.asctime(time.localtime(secs))。

- time.strftime(format[, t])：把一个代表时间的元组或者 struct_time（如由 time.localtime()和 time.gmtime()返回）转化为格式化的时间字符串。如果 t 未指定，将传入 time.localtime()。

- time.strptime(string[, format])：把一个格式化时间字符串转化为 struct_time。实际上它和 strftime()是逆操作。
  - 举例：time.strptime(‘2017-10-3 17:54’,”%Y-%m-%d %H:%M”) #输出 time.struct_time(tm_year=2017, tm_mon=10, tm_mday=3, tm_hour=17, tm_min=54, tm_sec=0, tm_wday=1, tm_yday=276, tm_isdst=-1)

```py
print(time.localtime())
# time.struct_time(tm_year=2020, tm_mon=8, tm_mday=29, tm_hour=20, tm_min=0, tm_sec=20, tm_wday=5, tm_yday=242

time.strftime(“%Y-%m-%d %X”, time.localtime())
#输出’2017-10-01 12:14:23’
```

## datetime 模块

[参考文章](https://www.jianshu.com/p/113bd56f7b56)

相比于 time 模块， datetime 模块的接口更直观、容易调用

datetime 有下面几个类：

- datetime.data 表示日期的类 （常用属性有 year, month, day）

- datetime.time 表示时间的类 （常用的属性有 hour, minute, second, microsecond）

- datetime.datetime 表示日期的时间

- datetime.timedelta 表示时间间隔， 就是两个时间点之间的长度

- datetime.tzinfo 与时区有关的相关信息

## random 随机模块

程序中有很多地方需要用到随机字符，比如登录网站的随机验证码，通过 random 模块可以很容易生成随机字符串

```
>>> random.randrange(1,10) #返回1-10之间的一个随机数，不包括10
>>> random.randint(1,10) #返回1-10之间的一个随机数，包括10
>>> random.randrange(0, 100, 2) #随机选取0到100间的偶数
>>> random.random()  #返回一个随机浮点数
>>> random.choice('abce3#$@1') #返回一个给定数据集合中的随机字符
'#'
>>> random.sample('abcdefghij',3)  #从多个字符中选取特定数量的字符
['a', 'd', 'b']
#生成随机字符串
>>> import string
>>> ''.join(random.sample(string.ascii_lowercase + string.digits, 6))
'4fvda1'
#洗牌
>>> a
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> random.shuffle(a)
>>> a
[3, 0, 7, 2, 1, 6, 5, 8, 9, 4]
```
