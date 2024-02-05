# 来自于 Yandex 的 CSS 命名方法论 - BEM

BEM 命名方法论，可以很好地组织和管理样式表的技术。BEM（块、元素、修饰符）是其中一种流行的命名方法论，它提供了一种清晰、模块化的方式来命名 CSS 类名，从而使样式更易于理解、维护和扩展。

## 什么是 BEM ？

BEM 是由 Yandex 团队提出的一种 CSS 命名方法论，它将页面抽象为一个个独立的块（Block），每个块可以包含一个或多个元素（Element），并且可以有一些修饰符（Modifier）来改变其外观或行为。

BEM 方法论的核心理念是将页面分解为独立的模块，每个模块都有自己的作用域，样式不会相互影响，从而实现更加模块化和可维护的 CSS 代码。

## BEM 的命名规范

BEM 的命名规范包括三个部分：块（Block）、元素（Element）和修饰符（Modifier）。

- 块（Block）：块是页面中的一个独立的、可重用的元素，通常代表一个完整的组件或部件。**块的命名应该是描述性的、具有代表性的**，并且使用短横线（`-`）分隔单词。例如：`.button`、`.navbar`

- 元素（Element）：元素是块的组成部分，它们只在特定的块内部有效，并且不能独立存在。**元素的命名应该基于其所属的块**，使用双下划线（`__`）来分隔块名和元素名。例如：`.button__text`、.`navbar__item`

- 修饰符（Modifier）：修饰符用于修改块或元素的外观或行为。它可以用来表示状态、变体或者其他特定情况。**修饰符的命名应该基于所修饰的块或元素**，并且使用双中划线（`--`）来分隔块名或元素名与修饰符名。例如：`.button__text--disabled`、`.navbar__item--active`

## BEM 的应用场景

BEM 方法论适用于任何规模的项目，特别是大型的、复杂的 Web 应用程序。它有助于减少 CSS 的耦合性，提高样式的可维护性和可重用性。BEM 还可以促进团队协作，因为它提供了一种统一的命名规范，使不同开发者之间更容易理解和共享代码。

除此之外，BEM 还可以应用于任何 CSS 预处理器（如Sass、Less等），从而使样式更具可扩展性和灵活性。

## 使用 BEM 命名方式的示例

```html
<div class="article">
  <div class="article__body">
    <button class="article__button--primary"></button>
    <button class="article__button--success"></button>
  </div>
</div>
```

## 编写一个快速创建类名的工具函数

```ts
export function useNamespace(defaultBlock: string = '') {
  const b = () => defaultBlock;
  const bm = (modifier) => `${defaultBlock}__${modifier}`;
  const bem = (modifier, element) => `${defaultBlock}__${modifier}--${element}`;

  return {
    b,
    bm,
    bem,
  };
}
const { b, bm, bem } = useNamespace('header');
```
