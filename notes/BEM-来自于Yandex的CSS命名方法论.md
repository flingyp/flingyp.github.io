# BEM-来自于 Yandex 的 CSS 命名方法论

## 什么是 BEM 命名规范

Bem 是块`block` 、元素`element` 、修饰符`modifier` 的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论

> `-` 中划线：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号

> `__` 双下划线：双下划线用来连接块和块的子元素

> `--` 双中划线：双中划线用来描述一个块或者块的子元素的一种状态

BEM 是一个简单又非常有用的命名约定。让你的前端代码更容易阅读和理解，更容易协作，更容易控制，更加健壮和明确，而且更加严密

### BEM 命名模式

```css
/* 代表了更高级别的抽象或组件 */
.block {
}
/* 使用 _ 来连接块或块的子元素的状态 */
.block--modifier {
}
/* 代表.block的后代，用于形成一个完整的 .block 的整体 */
.block__element {
}
/* 使用 _ 来连接块或块的子元素的状态 */
.block__element--modifier {
}
```

## BEM 命名法的好处

BEM 的关键是，可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。于是，通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联

常规命名法示例：

```html
<div class="article">
  <div class="body">
    <button class="button-primary"></button>
    <button class="button-success"></button>
  </div>
</div>
```

使用 BEM 命名方法的示例

```html
<div class="article">
  <div class="article__body">
    <button class="article__button--primary"></button>
    <button class="article__button--success"></button>
  </div>
</div>
```

通过 BEM 命名方式，模块层级关系简单清晰，而且 css 书写上也不必作过多的层级选择

## 如何利用好 BEM 这种命名法

### 什么时候使用 BEM 命名法

- 使用 BEM 的诀窍是，你要知道什么时候哪些东西是应该写成 BEM 格式的

- 并不是每个地方都应该使用 BEM 命名方式。当需要明确关联性的模块关系时，应当使用 BEM 格式

- 比如只是一条公共的单独的样式，就没有使用 BEM 格式的意义

```css
.mr-10 {
  margin-right: 10px;
}
```

## 在 CSS 预处理器中使用 BEM 格式

- BEM 的一个槽点是，命名方式长而难看，书写不雅。相比 BEM 格式带来的便利来说，我们应客观看待

- 一般来说会使用通过 LESS/SASS 等预处理器语言来编写 CSS，利用其语言特性书写起来要简单很多

以 LESS 为例

```less
.article {
  max-width: 1200px;

  &__body {
    padding: 20px;
  }

  &__button {
    padding: 5px 8px;

    &--primary {
      background: blue;
    }

    &--success {
      background: green;
    }
  }
}
```

## BEM 快速创建类名的钩子函数

```ts
export function useNameSpace(defaultBlock: string = "") {
  const globalBlock = defaultBlock;

  const b = (block?: string) => (block ? block : globalBlock);
  const be = (element: string, block?: string) => {
    block = block ? block : globalBlock;
    return `${block}__${element}`;
  };
  const bm = (modifier: string, block?: string) => {
    block = block ? block : globalBlock;
    return `${block}--${modifier}`;
  };
  const em = (element: string, modifier: string, block?: string) => {
    block = block ? block : globalBlock;
    return `${block}__${element}--${modifier}`;
  };
  const bem = (block: string, element: string, modifier: string) =>
    `${block}__${element}--${modifier}`;

  return {
    b,
    be,
    bem,
    bm,
    em,
  };
}
```

## 相关参考

- [参考文章](https://juejin.cn/post/6844903672162304013)
