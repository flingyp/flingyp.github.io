---
title: Python正则
tags:
  - Python
categories:
  - 记录学习-成长
---

## 正则表达式的部分基础语法

```
 .   匹配任意字符 （除了 \n）
 [...] 匹配字符集
 \d / \D   匹配 数字 / 非数字
 \s / \S   匹配空白 /  非空白字符
 \w / \W   匹配单词字符[a-zA-Z0-9] / 非单词字符
 *  匹配前一个字符0次或者无限次
 +  匹配前一个字符1次或者无限次
 ?  匹配前一个字符0次或者1次
 {m} / {m,n} 匹配前一个字符 m 次 或者 n 次
 *? / +? / ?? 匹配模式变为非贪婪（尽可能少匹配字符）
 ^  匹配字符串开头
 $  匹配字符串结尾
 \A / \Z 指定的字符串必选出现在开头 / 结尾
```

## re 模块的相关方法使用

### re.match

- 尝试从**字符串的起始位置**匹配一个模式。如果不是起始位置匹配成功的话， match() 就返回 none。

```py
# match
a = '46321asdcvklm564321asdfjk'
b = re.match(r'\d*', a)
print(b.span())
# (0, 5)
print(b.group())
# 46321
# 如果是 none 的话就没有这个 group方法。 会报错  "NoneType object has no attribute 'group'"
```

### re.search

- 扫描整个字符串并只返回第一个成功匹配的

```py
# search
a = 'asd4cvklm564321asdfjk'
b = re.search(r'\d+', a)
print(b.span())
# (3, 4)
print(b.group())
# 4
```

### re.compile

- 用于编译正则表达式，生成一个正则表达式对象

```py
# compile
res = re.compile(r'\d+')
a = 'asd4cvklm564321asdfjk'
b = re.search(res, a)
print(b.span())
# (3, 4)
print(b.group())
# 4
```

### re.findall

- 在字符串中找到正则表达式所匹配的所以字符串， 并且返回一个列表， 如果没有找打匹配的就返回空列表。

```py
# findall
a = 'asd4cvklm564321asdfjk'
b = re.findall(r'\d+', a)
print(b)
# ['4', '564321']
```

### re.sub

- 将字符串中匹配正则表达式的部分替换为其他值

```py
# sub
a = 'asd4cvklm564321asdfjk'
b = re.sub(r'[a-zA-Z]', '-', a)
print(b)
# ---4-----564321------
```

### re.split

- 根据匹配分割字符串， 返回分割字符串组成的列表

```py
# split
a = 'asd4cvklm564321asdfjk'
b = re.split(r'\d+', a)
print(b)
# ['asd', 'cvklm', 'asdfjk']
```
