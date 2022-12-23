# Sass

## 自定义属性

通过 Sass 变量 和 在`:root` 选择器下来声明 CSS 变量

```scss
$primary: #81899b;
$warn: #dfa612;

:root {
  --primary: #{$primary};
  --warn: #{$warn};
}
```

编译为如下：

```css
:root {
  --primary: #81899b;
  --warn: #dfa612;
}
```

## 父选择器 &

可以使用父选择器向外部选择器添加额外的后缀。当使用像 BEM 这样的方法来使用高度结构化的类名时，这特别有用

```scss
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```

编译为如下：

```css
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;
}
.accordion__copy {
  display: none;
  padding: 1rem 1.5rem 2rem 1.5rem;
  color: gray;
  line-height: 1.6;
  font-size: 14px;
  font-weight: 500;
}
.accordion__copy--open {
  display: block;
}
```

## 高级变量功能

Sass 核心库提供了一些用于处理变量的高级功能

```scss
@use "sass:map";

$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  background-color: map.get($theme-colors, "warning");
}
```
