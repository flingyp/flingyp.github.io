---
title: Python操作文件
tags:
  - Python
categories:
  - 记录学习-成长
---

## 文件介绍

1. 什么是文件

狭义说： 文本文件。 广义说： 超文本文件、图片、声音、超链接、视频。

2. 文件的分类

大致分为两类： 文件文件（txt） 和 二进制文件

3. 通过程序操作文件的流程

首先打开文件 -> 读写文件 -> 最后关闭文件

## 大致流程

- 打开文件 f = open(filename)

- 写操作 f.write("...content...")

- 读操作 f.read()

- 保存并关闭 f.close()

## 操作模式

Python 对文件处理分为三种模式

- r 只读模式

- w 创建模式， 如果文件存在则会覆盖

- a 追加模式， 新数据会写到文件末尾

### 创建文件

```py
# demo:
f = open(file='./createFile.txt', mode='w', encoding="utf8")

f.write("oneCeo CEO 600\n")
f.write("twoCeo 行政 500\n")

f.close()
```

### 只读模式

```py
# demo:
f = open(file="./createFile.txt", mode='r', encoding="utf8")

print(f.readline())  # 读一行

print('------------')
print(f.read())  #  剩下的

f.close()
```

### 追加模式

```py
# demo
f = open(file="./createFile.txt", mode='a', encoding="utf8")

f.write("黑姑娘 北京  168  48\n")  # 会追加到文件尾部
f.close()
```
