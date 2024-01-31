# 代码格式化

## ESLint & Prettier

ESlint 主要用于做代码规范的检测，有时候也会搭配着 Prettier 来使用。但是其实 ESlint 的自动修复功能其实也有起到格式化的作用

- 可以看看 antfu 的文章关于 [为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh)

## EditorConfig

关于代码格式化主要解决两个问题

- 解决不同编辑器的代码格式化不一致的问题
- 保证团队项目的代码风格一致性

而 [EditorConfig](https://editorconfig.org/) 是可以统一在不同编辑器中处理同一个项目的多个开发人员维护一致的编码样式。许多编辑器也内置对它的支持或者是通过加入插件支持

```
# EditorConfig helps developers define and maintain consistent
# coding styles between different editors and IDEs
# editorconfig.org

root = true

[*]

# We recommend you to keep these unchanged
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

# Change these settings to your own preference
indent_style = space
indent_size = 4

[*.{ts,tsx,js,jsx,json,css,scss,yml,yaml,html,vue,md}]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```
