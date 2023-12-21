---
title: Python自动化
tags:
  - Python
categories:
  - 记录学习-成长
---

## 自动化管理电脑文件和文件夹

### `os` 模块和其他模块的方法

> 提供了处理文件和目录的方法

**注意：** 关于路径中的斜杠（/）和反斜杠（\）

- windows 中采用的是 **反斜杠** 作为文件夹之间的分隔符
- Mac 和 Linux 中采用 **斜杠** 作为文件夹之间的分隔符

```python
import os

# 获取当前文件目录
os.getcwd()

# 列出当前程序文件夹||指定文件夹下的所有文件和文件夹 返回一个列表
os.listdir((path))

# 显示当前绝对路径
os.path.abspath(path)
# 例子：print(os.path.abspath('os模块学习.py'))
# E:\LianXi\Python自动化学习\os模块学习.py

# 返回改路径的父目录
os.path.dirname(path)
# # E:\LianXi\Python自动化学习

# 把文件夹里的文件夹里的文件都找出来
# dirpath 是文件夹路径 dirnames是dirpath文件夹下的子文件夹列表
# files是dirpath这个文件夹里的文件列表
os.walk(指定的绝对路径或相对)

# 判断是不是文件夹 True是文件夹  False是文件
os.path.isdir(要判断的文件/文件夹的路径)

# 如果是文件 则返回 True
os.path.isfile(path)

os.scandir(指定的绝对路径或相对路径)

# 显示当前使用的平台 nt 代表 Windows 、posix 代表Linux
os.name

# 删除一个文件
os.remove('filename')

# 可生成多层递归目录
os.makedirs('dirname/dirname')

# 删除单级目录
os.rmdir('dirname')

# 重命名文件
os.remove('oldname', 'newname')

# 运行 shell命令 注意： 这里是打开一个新的shell，命令结束后会关闭
os.system('')

# 显示当前平台下的路径分隔符 只有Windows是 \\ 其他的是 /
os.sep

# 返回改路径的最后一个目录或者文件，如果path以 / 或 \ 结尾那么就会返回空值
os.path.basename(path)

# 将 path 分割成路径名或文件名
os.path.split(path)
# 例子： print(os.path.split(os.path.abspath('os模块学习.py')))
# ('E:\\LianXi\\Python自动化学习', 'os模块学习.py')

# 连接目录和文件名或目录， 返回结果为 path/name
os.path.join(path, name)
```

```python
判断 文件名以开头或结尾
# 字符串内置方法 .startwith() 和 .endwith()
print('abc.txt'.startwith('ab'))
print('abc.txt'.endwith('.txt'))

使用glob模块
# * 匹配所有 ? 匹配任何单个字符 [seq]匹配seq中的任何字符 [!seq]相反
print(glob.glob('*.py')) # 会查找到当前所有以 .py结尾的文件

# 把文件夹下的文件夹下的文件都找出来！
# 用 ** 表示任何层文件或文件夹
# recursive=True会不断进入文件夹内
print(glob.glob('**/*.txt', recursive=True))

匹配文件名 fnmatch 模块
print(fnmatch.fnmatch('lesson1.py', 'le*1.py')) // True
```

### 读文件和写文件

```python
# r 读文件
with open('file_path', 'r', encoding='utf-8') as f:
    text = f.readlines()
    print(text)

# w、 a 写文件
with open('file_path', 'w', encoding='utf-8') as f:
    text = '写入内容\n写入内容'
    f.write(text)

注意：
	如果存在这个文件 在模式 w 下会清空文件里面的内容写入。
	在模式 a 下会追加在后面写入。
```

### 新建、复制、移动、重命名、删除

```python
# 创建
os.mkdir('文件夹名称')

# 可创建多层递归目录
os.makedirs('dirname/dirname')

# 判断是否存在
os.path.exists('文件夹名称')

# 复制文件 shutil模块
shutil.copy('copy_file', 'new_path')

# 复制文件夹 shutil 模块
shutil.copytree('这是一个文件夹', '这个一个新的文件夹')

# 移动文件或文件夹
shutil.move('file.txt', '这是一个新的文件夹/file.txt')
shutil.move('file.txt', '这是一个新的文件夹/')

# 重命名
os.rename('file_name', 'new_name')

# 删除文件
os.remove('file_name')

# 删除文件夹
shutil.rmtree('这是文件夹')
```

### 创建压缩包、解压压缩包

### 文件出现中文乱码的清空

```python
建议文件不要用中文，如果有中文可以先获取正确的编码文字，重新重命名
file.name.encode('cp437').decode('gbk')
```

## 自动化操作 Excel 格式文件

### xlrd 模块

#### 常用方法

```python
import xlrd

# 读文件 返回的工作簿对象
data = xlrd.open_workbook('file_name_url')

# 获取所有的工资表 返回一个列表
data.sheets()

# 取到具体的工作表
data.sheets()[number]

# 根据表的索引获取某个表
data.sheet_by_index(0)
# 根据表名称去获取某个表
data.sheet_by_name("Sheet1")

# 获取所有工作表的名称
data.sheet_names()

# 返回excel工作表的数量
data.nsheets
```

#### 操作 excel 行

```python
import xlrd

# 读文件 返回的工作簿对象
data = xlrd.open_workbook('file_name_url')

sheet = data.sheet_by_index(0)  # 获取第一个工作表

sheet.nrows # 获取表共有多少有效行数

sheet.row(1)  #  获取表中的第二行内容 返回的是列表

sheet.row_types(1) # 获取指定行中单元格的数据类型

sheet.row(1)[2].value # 获取指定单元格的值

sheet.row_values(1) # 获取第二行（指定行）中所有单元格的值

sheet.row_len(1) # 获取第二行（指定行）的长度
```

#### 操作 excel 列

```python
import xlrd

# 读文件 返回的工作簿对象
data = xlrd.open_workbook('file_name_url')

sheet = data.sheet_by_index(0)  # 获取第一个工作表

sheet.ncols # 获取表共有多少有效列数

sheet.col(1)  #  获取表中的第二列内容 返回的是列表

sheet.col(1)[2].value # 获取指定单元格的值

sheet.col_types(1) # 获取指定行中单元格的数据类型 1 表示字符串 2 表示数字

sheet.col_values(1) # 获取第二列（指定列）中所有单元格的值 返回的是列表
```

#### 操作 Excel 单元格

```python
import xlrd

# 读文件 返回的工作簿对象
data = xlrd.open_workbook('file_name_url')

sheet = data.sheet_by_index(0)  # 获取第一个工作表

sheet.cell(1,2) # 返回指定行指定列的单元格

sheet.cell(1,2).value # 返回指定行指定列的单元格的值

sheet.cell_value(1,2)  # 返回指定行指定列的单元格的值

sheet.cell_type(1,2) # 返回指定行指定列的单元格数据类型

sheet.cell(1,2).ctype  # 返回指定行指定列的单元格数据类型
```

### xlwt 模块

- 创建工作簿 - > 创建工资表 -> 填充工作表内容 -> 保存文件
- 更多使用方法[参考文章](https://www.cnblogs.com/python-robot/p/9958352.html)

```python
import xlwt

# 创建工作簿
wb = xlwt.Workbook()

# 创建工作表
ws = wb.add_sheet("工作表名称")

# 填充数据
ws.write_merge(0, 1, 0, 5, "2019年货币兑换表")

# 写入数据
ws.write(i,j, val)

# 插入图片
ws.insert_bitmap("xxx.jpg", 行, 列)

# 保存
wb.save("xxx.xls")
```

```python
import xlwt

titlestyle = xlwt.XFStyle() #初始化样式

titlefont = xlwt.Font()
titlefont.name = "宋体"
titlefont.bold = True  # 加粗
titlefont.height = 11*20 # 11 表示字号 20 是衡量单位
titlefont.colour_index = 0x08 #设置字体颜色

titlestyle.font = titlefont
```
