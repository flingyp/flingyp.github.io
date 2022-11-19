# 关于代码格式化

关于代码格式化要解决两个问题

- 解决不同编辑器的代码保存不一致问题
- 保证团队的代码风格一致性

## EditorConfig

[EditorConfig](https://editorconfig.org/) 是可以统一在不同编辑器中处理同一个项目的多个开发人员维护一致的编码样式。许多编辑器也内置对它的支持或者是通过加入插件支持

`.editorconfig`

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[Makefile]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```


## ESlint 

ESlint 主要用于做代码规范的检测，有时候也会搭配着Prettier来使用。但是其实ESlint的自动修复其实也有格式化的作用

- 可以看看antfu的文章关于[为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh) 