---
title: Python 条件语句 循环语句
tags:
  - Python
categories:
  - 记录学习-成长
---

## 条件语句

Python 中的 if 语句格式如下：

```py
if passport_1:
    open_1
else if passport_2:
    open_2
else:
    open_3
```

注意： 条件后面中要使用冒号 ： 、 Python 中没有 {}

## 三元运算

```py
name = "Eva"
sex = None

# if 普通写法
if name == "Eva":
    sex = "Female"
else:
    sex = "Male"


# 三元运算
sex = "Female" if name == "Eva" else "Male"
```

## 循环语句

### while 循环

```py
while 判断条件(passport):
    执行语句(open)


while 判断条件(passport_1):
    执行语句(open_1)
else:
    执行语句(open_2)
```

### for 循环

```py
for (item) in (collect):
    open_1
else:
    open_2
```

#### range() 函数

如果你需要遍历数字序列，可以使用 range() 函数， 它会生成数列

demo:

```py
for i in range(5):
    print(i)
# 0 1 2 3 4

# 也可以执行区间的值
for i in range(5, 9):
    print(i)
# 5 6 7 8

# 也可以使range以指定数字开始并指定不同的增量(甚至可以是负数)
for i in range(0, 10, 3)
    print(i)
# 0 3 6 9
```
