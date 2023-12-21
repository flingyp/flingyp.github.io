---
title: Python 运算符
tags:
  - Python
categories:
  - 记录学习-成长
---

## 算术运算符

- **+** 两个变量相加
- **-** 两个变量相减
- **\*** 两个数相乘 或是 返回一个被重复若干次的字符串
- **/** 两个数相除， 注： 输出结果会有余 例如： 如下
  - ```py
      var1 = 10
      var2 = 21
      print(var2/var1)
      # 输出结果为 2.1
    ```
- **%** 返回除法的余数
  - ```py
      var1 = 10
      var2 = 21
      print(var2%var1)
      # 输出结果为 1
    ```
- \*\* 幂， 返回 x 的 y 次幂

  - ```py
      var1 = 10
      var2 = 21
      # var1**var2 为 10 的 21次方
    ```

- // 取整除，向下取接近商的整数

  - ```py
        var1 = 10
        var2 = 4
        print(var1 // var2)
        # 2
    ```

## 比较运算符

- == 比较是否相等
- != 不等于
- \> 大于
- < 小于
- \> = 大于等于
- <= 小于等于

## 赋值运算符

- **= 幂赋值运算符 c **= a 等效于 c = c \*\* a
- //= 取整除赋值运算符 c //= a 等效于 c = c // a
- := 海象运算符, 可在表达式内部为变量赋值

## 逻辑运算符

- and 与运算符 (x and y) 如果 x 为 False 则 返回 False， 否则返回 y 的值
- or 或运算符 (x or y) 如果 x 为 True 则返回 x 的值，否则返回 y 的值
- not 非运算符 (not x) 如果 x 为 True 则返回 False， 如果为 False 则返回 True

## 成员运算符

- in 如果在指定的序列中找到值返回 True, 否则返回 False
- not in 如果在指定的序列中没有找到值返回 True, 否则返回 False

```py
a = 10
b = 20
list = [1, 2, 3, 4, 5 ];

if ( a in list ):
   print ("1 - 变量 a 在给定的列表中 list 中")
else:
   print ("1 - 变量 a 不在给定的列表中 list 中")

if ( b not in list ):
   print ("2 - 变量 b 不在给定的列表中 list 中")
else:
   print ("2 - 变量 b 在给定的列表中 list 中")

# 修改变量 a 的值
a = 2
if ( a in list ):
   print ("3 - 变量 a 在给定的列表中 list 中")
else:
   print ("3 - 变量 a 不在给定的列表中 list 中")

# 变量 a 不在给定的列表中 list 中
# 变量 b 不在给定的列表中 list 中
# 变量 a 在给定的列表中 list 中
```

## 身份运算符

- is 是判断两个标识符是不是引用自一个对象
- is not 判断两个标识符是不是引用自不同对象
