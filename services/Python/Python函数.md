---
title: Python函数
tags:
  - Python
categories:
  - 记录学习-成长
---

## 定义函数

- 以 def 关键字开头

```py
def 函数名(参数):
    函数体
```

## 关键参数

正常情况下，给函数传参数要按顺序，不想按顺序就可以用关键参数。(关键参数必选在位置参数之后)

```py
def stu_info(name, age, course):
    print("姓名:", name)
    print("年龄:", age)
    print("课程:", course)


stu_info("李四", course="Python基础", age=18)
# 姓名: 李四
# 年龄: 18
# 课程: Python基础
```

## 非固定参数

若你的函数在定义时不确定用户想传入多少个参数，就可以使用非固定参数

```py
# *args
def stu_register(name,age,*args): # *args 会把多传入的参数变成一个元组形式
    print(name,age,args)
stu_register("Alex",22)
#输出
#Alex 22 () #后面这个()就是args,只是因为没传值,所以为空
stu_register("Jack",32,"CN","Python")
#输出
# Jack 32 ('CN', 'Python')

# **kwargs
def stu_register(name,age,*args,**kwargs): # *kwargs 会把多传入的参数变成一个dict形式
    print(name,age,args,kwargs)
stu_register("Alex",22)
#输出
#Alex 22 () {}#后面这个{}就是kwargs,只是因为没传值,所以为空
stu_register("Jack",32,"CN","Python",sex="Male",province="ShanDong")
#输出
# Jack 32 ('CN', 'Python') {'province': 'ShanDong', 'sex': 'Male'}
```

## 匿名函数

使用 lambda 来创建匿名函数。lambda 函数的语法只包含一个语句，如下：

`lambda [arg1 [,arg2,.....argn]]:expression`

```py
sum = lambda num1, num2: num1 + num2
print(sum(10, 30))
```
