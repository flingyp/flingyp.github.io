---
title: Python 变量类型
tags:
  - Python
categories:
  - 记录学习-成长
---

## 变量类型

- 变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间
- 基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。
- 因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。

```py
# Python 中的变量赋值是不需要类型声明的
# 每个变量在内存中创建，都包括变量的标识，名称和数据这些信息。
# 每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。

counter = 100  # 整型变量
miles = 1000.0  # 浮点型
name = 'John'  # 字符串

print(counter)
print(miles)
print(name)
# 100
# 1000.0
# John
```

### 多个变量赋值（Python 允许多个变量赋值）

```py
a = b = c = 1
# 上面实例，创建一个整型对象，值为1，三个变量被分配到相同的内存空间上
print(a, b, c)
# 1 1 1

d, e, f = 1, 2, "john"
# 上面实例， 两个整型对象 1 和 2 分别分配给变量 a 和 b，字符串对象 "john" 分配给变量 c。
print(d, e, f)
# 1 2 john
```

### Python 中的标准数据类型

- Numbers (数字)
- String (字符串)
- List (列表)
- Tuple (元组)
- Dictionary (字典)

### Python 数字

```py
var1 = 1
var2 = 10
print(var1, var2)
# 1 10

# 可以使用 del 语句删除一些对象的引用
del var1
print(var1)
# NameError: name 'var1' is not defined
```

Python 支持四种不同的数字类型：

- int（有符号整型）
- long（长整型[也可以代表八进制和十六进制]）
- float（浮点型）
- complex（复数）

#### 数学函数： [请参考](https://www.runoob.com/python3/python3-number.html)

- abs(x) 返回数字的绝对值
- ceil(x) 返回一个大于或等于 x 的最小整数。 ceil()不能直接访问，需要导入 math 模块，通过静态对象调用该方法
  - ```py
      import math
      var1 = 4.8
      var2 = math.ceil(var1)
      print(var2)  # 5
    ```
- exp(x) 返回 e 的 x 次幂。 需要导入 math 模块
- fabs(x) 返回数字的绝对值。 需要导入 math 模块
  - ```
      fabs() 和 abs() 的区别
          1. abs() 是内置函数， fabs() 在 math 模块定义
          2. fabs() 只对浮点型和整形数值有效。 abs() 可以运用在复数中。
    ```
- floor(x) 返回数字的下舍整数， 小于 或 等于 x 需要导入 math 模块
  - ```py
      import math
      var1, var3 = 4.8, -4.8
      var2 = math.floor(var1)
      var4 = math.floor(var3)
      print(var2, var4)
      # 4 -5
    ```
- max(x, y, z) 返回给定参数中的最大值，参数可以为序列
- min(x,y, z) 返回给定参数中的最小值， 参数可以为序列
- modf(x) 返回 x 的整数部分和小数部分， 整数部分以浮点型表示 需要导入 math 模块
  - ```py
      import math
      var1 = 4.8
      var2 = math.modf(var1)
      print(var2)
      # (0.7999999999999998, 4.0)
    ```
- pow(x, y) x\*\*y 运算后的值
- round(x, [n]) 返回浮点数 x 的四舍五入值，如给出 n 值，则代表舍入到小数点后的位数。
  - ```py
      print ("round(70.23456) : ", round(70.23456))
      print ("round(56.659,1) : ", round(56.659,1))
      print ("round(80.264, 2) : ", round(80.264, 2))
      print ("round(100.000056, 3) : ", round(100.000056, 3))
      print ("round(-100.000056, 3) : ", round(-100.000056, 3))
      # round(70.23456) :  70
      # round(56.659,1) :  56.7
      # round(80.264, 2) :  80.26
      # round(100.000056, 3) :  100.0
      # round(-100.000056, 3) :  -100.0
    ```
- sqrt(x) 返回数字 x 的平方根 需要导入 math 模块

### Python 字符串

具体可以参考下 [菜鸟教程](https://www.runoob.com/python3/python3-string.html)

python 的字串列表有 2 种取值顺序:

- 从左到右索引默认 0 开始的，最大范围是字符串长度少 1
- 从右到左索引默认-1 开始的，最大范围是字符串开头

![](https://www.runoob.com/wp-content/uploads/2013/11/python-string-slice.png)

如果要实现从 **字符串中截取一段字符串的话**， **可以使用 [头下标 : 尾下标] 来截取相应的字符串**。

```py
str = 'hello world'

print(str)  # 输出完整字符串
print(str[0])  # 输出字符串中的第一个字符
print(str[2:5])  # 输出字符串中第三个至第六个之间的字符串
print(str[2:])  # 输出从第三个字符开始的字符串
print(str * 2)  # 输出字符串两次
print(str + "TEST")  # 输出连接的字符串
# hello world
# h
# llo
# llo world
# hello worldhello world
# hello worldTEST
```

#### Python 字符串格式化

```py
print("我叫 %s 今年 %d 岁!" % ('小明', 10))
# 我叫 小明 今年 10 岁!
```

#### 字符串部分内置函数

[参考菜鸟教程](https://www.runoob.com/python3/python3-string.html)

- capitalize() 将字符串的第一个字符转换为大写
- center(width, fillchar) 返回一个指定的宽度 width 居中的字符串，如果 width 小于字符串宽度直接返回字符串，否则使用 fillchar 去填充
  - ```py
      str = "[runoob]"
      print(str.center(40, '-'))
      # ----------------[runoob]----------------
    ```
- isalnum() string 至少有一个字符并且所有字符都是字母或者数字则返回 True 否则返回 False(就是说 string 是字母+数字 则返回 True)
- isalpha() 字符串是字母 + 中文则返回 True 否则返回 False
- isdigit() 字符串只包含数字则返回 True 否则返回 False
- isnumeric() 字符串只包含数字则返回 True 否则返回 False
- lower() 字符串所有大写字符转换为小写
- lstrip([chars]) 截掉字符串左边的空格或指定字符
- rstrip([chars]) string 字符串末尾的指定字符（默认为空格）

### Python 列表

**列表用 [ ] 标识**，是 python 最通用的复合数据类型。类似数组

列表中值的切割也可以用到变量 [头下标:尾下标] ，就可以截取相应的列表

![](https://www.runoob.com/wp-content/uploads/2013/11/list_slicing1.png)

```py
list = ['runoob', 786, 2.23, 'john', 70.2]
tinylist = [123, 'john']

print(list)  # 输出完整列表
print(list[0])  # 输出列表的第一个元素
print(list[1:3])  # 输出第二个至第三个元素 (不包含 尾下标那个元素)
print(list[2:])  # 输出从第三个开始至列表末尾的所有元素
print(tinylist * 2)  # 输出列表两次
print(list + tinylist)  # 打印组合的列表
# ['runoob', 786, 2.23, 'john', 70.2]
# runoob
# [786, 2.23]
# [2.23, 'john', 70.2]
# [123, 'john', 123, 'john']
# ['runoob', 786, 2.23, 'john', 70.2, 123, 'john']
```

#### 删除列表中的元素

```py
var list = ['a', 'b', 'c', 'd']
del list[2]
print(list)
# ['a', 'b', 'd']
```

#### 列表函数

- len(list) 获取列表元素个数
- max(list) 返回元素最大值
- min(list) 返回元素最小值
- list(seq) 将元组转换为列表
  l

#### 列表方法

- list.append(obj) 向列表末尾添加新的对象
- list.count(obj) 统计某个元素在列表中出现的次数
- list.extend(seq) 向列表末尾一次性追加另一个序列中的多个值
- list.index(x[, start[, end]]) 从列表中找出某个值第一个匹配项的索引位置
- list.insert(index, obj) 将对象插入列表 (index 要插入的位置， obj 要插入的对象)
- list.remove() 移除列表中某个值的第一个匹配项
- list.reverse() 反向列表中元素
- list.sort() 对原列表进行排序
- list.clear() 清空列表
- list.copy() 复制列表

### Python 元组

类似与 列表，**元组用 () 标识**，内部元素用逗号隔开。但是**元组不能二次赋值，相当于只读列表**。

```py
tuple = ('runoob', 786, 2.23, 'john', 70.2)
tinytuple = (123, 'john')

print(tuple)  # 输出完整元组
print(tuple[0])  # 输出元组的第一个元素
print(tuple[1:3])  # 输出第二个至第四个（不包含）的元素
print(tuple[2:])  # 输出从第三个开始至列表末尾的所有元素
print(tinytuple * 2)  # 输出元组两次
print(tuple + tinytuple)  # 打印组合的元组
# ('runoob', 786, 2.23, 'john', 70.2)
# runoob
# (786, 2.23)
# (2.23, 'john', 70.2)
# (123, 'john', 123, 'john')
# ('runoob', 786, 2.23, 'john', 70.2, 123, 'john')
```

### Python 字典

类似于 对象， 字典用"{ }"标识。字典由索引(key)和它对应的值 value 组成。

```py
dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"

tinydict = {'name': 'runoob', 'code': 6734, 'dept': 'sales'}

print(dict['one'])  # 输出键为'one' 的值
print(dict[2])  # 输出键为 2 的值
print(tinydict)  # 输出完整的字典
print(tinydict.keys())  # 输出所有键
print(tinydict.values())  # 输出所有值
# This is one
# This is two
# {'name': 'runoob', 'code': 6734, 'dept': 'sales'}
# dict_keys(['name', 'code', 'dept'])
# dict_values(['runoob', 6734, 'sales'])
```

### Python 集合

集合（set）是一个无序的不重复元素序列。可以使用大括号 { } 或者 set() 函数创建集合，注意：创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。

```
parame = {value01,value02,...}
或者
set(value)
```

#### 添加元素

- s.add(x) 将元素 x 添加到集合 s 中，如果元素存在，则不进行操作
- s.update(x) 也可以添加元素， 且参数可以是列表、元组、字典等

```py
thisset = set(("Google", "Runoob", "Taobao"))
thisset.add("Facebook")
print(thisset)
# {'Taobao', 'Facebook', 'Google', 'Runoob'}

thisset = set(("Google", "Runoob", "Taobao"))
thisset.update({1,3})
print(thisset)
# {1, 3, 'Google', 'Taobao', 'Runoob'}
```

#### 移除元素

- s.remove(x) 将元素 x 从 s 中移除，如果不存在则会报错
- s.discard(x) 将元素 x 从 s 中移除，如果不存在则会报错
- s.pop() 随机删除集合中的一个元素

#### 清空集合

- s.clear()

### Python 一些内置函数

其他的内置函数 [参考](https://www.runoob.com/python/python-built-in-functions.html)

- init(x, [base]) 将 x 转换为一个整数
- long(x, [base]) 将 x 转换为一个长整数
- float(x) 将 x 转换为一个浮点数
- str(x) 将对象 x 转换为 字符串
- repr(x) 将对象 x 转换为表达式字符串
- tuple(s) 将序列 s 转换为一个元组
- list(s) 将序列 s 转换为一个列表
- set(s) 转换为可变集合

### 单行注释

```py
# 单行注释
print("这是单行注释")
```

### 多行注释

```py
'''
这是多行注释， 用三个单引号
'''

"""
这是多行注释， 用三个双引号
"""
```

### input 读取用户指令

如果需要你的程序接收用户输入的指令，可以用 input 语法：

```py
name = input("What is your name: ")
print("name is:", name)
# What is your name: lisi
# name is: lisi
```
