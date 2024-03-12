# React Hooks

以下笔记是读 [React Hooks 中文文档](https://zh-hans.react.dev/reference/react/hooks) 记录

## `useState`

`useState` 在 **组件的顶层** 声明一个 **状态变量**

- `const [state, setState] = useState(initialState)`

state 值的修改必须通过 `setState` 方法进行。React 会存储新状态值，使用新值重新渲染组件并且更新 UI

### 注意

一. 在执行 `setState` 方法的作用域下**不会改变已经执行的代码中当前的状态值**，它只影响下一次渲染中 `useState` 返回的内容

```tsx
import { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState('Taylor');
  function handleClick() {
    setName('Robin');
    // Taylor
    console.log(name);
  }
}
```

二. 根据**上一次状态的值**更新状态。

查看上面的例子就知道如果多次执行 `setState` 时，`state` 永远都是上一次渲染时的值

```tsx
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}
```

为了解决这个问题，**可以向 `setSate` 传递一个更新函数，而不是一个状态值**，更新函数携带实参则会保证是 **上一次渲染时的值**

```tsx
function handleClick() {
  setAge((a) => a + 1); // setAge(42 => 43)
  setAge((a) => a + 1); // setAge(43 => 44)
  setAge((a) => a + 1); // setAge(44 => 45)
}
```

三. 更新状态中的对象和数组

如果传递是一个对象和数据时，在 React 中，**状态被认为是只读的**，如果需要更新状态值，应该是**替换它而不是修改状态值**

```tsx
const [form, setForm] = useState({ name: 'React' });

// ×
form.name = 'React Hooks';
// √
setForm({ name: 'React Hooks', firstName: 'React' });
```

四. 避免重复创建初始状态

React 只在初次渲染时保存初始状态，后续渲染时将其忽略。

`initialState` 可以是一个函数，称为**初始化函数**也叫**纯函数**。不应该接受任何参数，并且应该返回一个任何类型的值。当初始化组件时，React 将调用你的初始化函数，并将其返回值存储为初始状态。

五. 使用 Key 值重置状态

在渲染列表时，你经常会遇到 `key` 属性。然而，它还有另外一个用途。

可以向组件传递不同的 `key` 来重置组件的状态。当将一个状态变量作为一个 `key` 传递给组件时。当其改变时React 会从头开始重新创建组件（以及它的所有子组件），所以它的状态被重置了。

```tsx
import { useState } from 'react';

export default function App() {
  const [version, setVersion] = useState(0);
  function handleReset() {
    setVersion(version + 1);
  }
  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  console.log('组件重新渲染了');
  return <p>Hello World</p>;
}
```

六. 存储前一次渲染的信息

```tsx
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <CountLabel count={count} />
    </>
  );
}

function CountLabel({ count }) {
  // 重新渲染时 useState 不会被重新执行的，所以 prevCount 是前一次渲染的信息
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);
  // count 改变时 CountLabel 组件重新渲染，下面这段代码块会重新执行
  if (prevCount !== count) {
    console.log(prevCount);
    console.log(count);
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
}
```

## `useMemo`

`useMemo` 重新渲染的时候，缓存状态值计算的结果。类似于 Vue 提供的计算属性 Computed

- `const cacheValue = useMemo(calculateValue, dependencies)`

```tsx
import { useMemo, useState } from 'react';

const [name, setName] = useState('React');
const fullName = useMemo(() => {
  return `${name} Hooks`;
}, [name]);
```

## `useCallback`

`useCallback` 用于优化函数的性能，在依赖不变的情况下，返回缓存的回调函数。以确保在组件重新渲染时不会创建新的回调函数，从而减少不必要的性能开销

- `const cacheFn = useCallback(fn, dependencies)`

在初次渲染时，`useCallback` 返回你已经传入的 `fn` 函数。在之后的渲染中，如果依赖没有发生改变，`useCallback` 返回上一次渲染中缓存的回调函数。否则返回这一次渲染传入的 `fn`

```ts
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback(() => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
}
```

## `useRef`

帮助引用一个不需要渲染的值

```ts
const intervalRef = useRef(0);
const inputRef = useRef(null);
```

### 通过 Ref 操作 DOM

```tsx
export default function MyComponent() {
  const inputRef = useRef(null);
  // inputRef.current 指向 <input> DOM 元素

  return <input ref={inputRef} />;
}
```

### 避免重复创建 Ref 的内容

```tsx
// `new VideoPlayer()` 的结果只会在首次渲染时使用，但是依然在每次渲染时都在调用这个方法
const playerRef = useRef(new VideoPlayer());

// 为了解决这个问题，可以这样初始化
const playerRef = useRef(null);
if (playerRef.current === null) {
  playerRef.current = new VideoPlayer();
}
```

## `useEffect`

`useEffect(setup, dependencies)`

执行时机：

1. 在组件被渲染并添加到 DOM 后，会执行一次 `useEffect` 里的 `setup` 函数
2. 当依赖项发生变化时，会再次执行 `setup` 函数
3. 组件被销毁时，会执行 `setup` 里返回的清理函数

注意事项：

1. 如果有多个 `useEffect` 函数，是多次调用 `useEffect` 对应的副作用函数
2. 如果没有依赖项，则只会在组件渲染时执行一次 `setup` 函数
3. 每次依赖项发生变化后，会先使用旧值执行一遍 `setup` 函数返回的清理函数，再使用新值执行一遍 `setup` 函数

```tsx
import { useEffect, useState } from 'react';

export default function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 更新文档标题
    console.log('222222222', count);
    document.title = `You ${count} times`;

    // 清理函数 cleanup
    return () => {
      console.log('11111111', count);
      document.title = `React App`;
    };
  }, [count]); // 依赖数组，只有当count改变时才会重新执行

  return (
    <div>
      <div onClick={() => setCount((count) => count + 1)}>点击Count</div>
    </div>
  );
}
```

## `useContext`

`useContext` 可以进行跨组件通信

### 注意

一. 向组件树深层传递数据

`useContext` 会返回父组件传递的上下文内容。React 会搜索组件树，为这个特定的 `context` 向上查找最近的 `context` 提供者

父组件

```tsx
const [theme, setTheme] = useState('dark');
export default function MyPage() {
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
    </ThemeContext.Provider>
  );
}
```

子孙组件

```tsx
const ThemeContext = createContext(null);
export function Form() {
  const context = useContext(ThemeContext);
}
```

二. 指定后备方案默认值

如果父组件没有提供特定的的 Provider ， `useContext` 返回的值将等于你再创建上下文时指定的默认值

```tsx
const ThemeContext = createContext('light');
```

三. 覆盖组件树一部分的 context

React 只会向上查找最近的 Context Provider，所以可以有覆盖组件树的操作

```tsx
<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
```

四. 在传递对象和函数时优化重新渲染

结合 `useMemo` 和 `useCallback` 做的性能优化

## `useReducer`

用于管理复杂状态逻辑的钩子函数，可以作为 Redux 等第三方状态管理库的替代方案

`useReducer(reducer, initialArg, init?)`

- `reducer`：用于更新 state 的纯函数
- `initialArg`：初始 state 的任意值
- `init?`：初始 state 的初始化函数，如果存在，使用其执行结果的初始值，否则使用 `initialArg`

```tsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```
