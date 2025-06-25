# React-Redux 搭配 @reduxjs/toolkit 入门教程

本教程将引导你了解如何在 React 应用中使用 Redux Toolkit（@reduxjs/toolkit）来管理状态。我们将从安装依赖开始，逐步创建一个简单的计数器应用，展示 Redux Toolkit 的核心功能和最佳实践。

## 1. 什么是 Redux Toolkit？

Redux Toolkit 是 Redux 的官方推荐工具集，旨在简化 Redux 的使用。它提供了便捷的 API，减少样板代码，同时保持 Redux 的核心理念。核心功能包括：

- **configureStore**: 简化 Redux store 的配置。
- **createSlice**: 自动生成 action creators 和 reducers。
- **createAsyncThunk**: 处理异步逻辑。
- 内置 Immer 支持不可变状态更新。

## 2. 环境设置

### 2.1 创建 React 项目

如果你还没有 React 项目，可以使用以下命令创建一个：

```bash
npx create-react-app my-redux-app
cd my-redux-app
```

### 2.2 安装依赖

安装必要的依赖：

```bash
npm install @reduxjs/toolkit react-redux
```

- `@reduxjs/toolkit`: Redux Toolkit 核心库。
- `react-redux`: React 与 Redux 的官方绑定库。

## 3. 配置 Redux Store

我们将创建一个简单的计数器应用，展示如何使用 Redux Toolkit 管理状态。

### 3.1 创建 Slice

Slice 是 Redux Toolkit 的核心概念，包含 reducer 逻辑和 action creators。创建一个文件 `src/features/counter/counterSlice.js`：

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // 使用 Immer，无需返回新状态
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// 导出 action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 导出 reducer
export default counterSlice.reducer;
```

### 3.2 配置 Store

在 `src/app/store.js` 中配置 Redux store：

```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

`configureStore` 自动设置了 Redux DevTools 和常用的中间件（如 `thunk`）。

## 4. 集成到 React 应用

### 4.1 提供 Store 给应用

在 `src/index.js` 中使用 `Provider` 将 store 提供给 React 应用：

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```

### 4.2 创建计数器组件

在 `src/features/counter/Counter.js` 中创建一个计数器组件，连接到 Redux store：

```javascript
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
      </div>
    </div>
  );
}

export default Counter;
```

### 4.3 在 App 中使用 Counter

在 `src/App.js` 中引入并使用 Counter 组件：

```javascript
import React from 'react';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
```

## 5. 处理异步逻辑

Redux Toolkit 的 `createAsyncThunk` 简化了异步操作。假设我们要从 API 获取数据，创建一个异步 action：

### 5.1 创建异步 Thunk

在 `counterSlice.js` 中添加异步逻辑：

```javascript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 模拟异步 API 调用
export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (amount) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟延迟
  return amount;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### 5.2 更新 Counter 组件

在 `Counter.js` 中添加异步操作：

```javascript
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
        <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))} disabled={status === 'loading'}>
          {status === 'loading' ? 'Loading...' : 'Add Async'}
        </button>
      </div>
    </div>
  );
}

export default Counter;
```

## 6. 添加样式

为了让应用更美观，可以使用 Tailwind CSS。安装 Tailwind：

```bash
npm install -D tailwindcss
npx tailwindcss init
```

在 `tailwind.config.js` 中配置：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

在 `src/index.css` 中添加 Tailwind 指令：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

更新 `Counter.js` 以使用 Tailwind 样式：

```javascript
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <div className="flex space-x-2 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="flex space-x-2">
        <input
          className="border p-2 rounded"
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Add Amount
        </button>
        <button
          className={`px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 ${
            status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Loading...' : 'Add Async'}
        </button>
      </div>
    </div>
  );
}

export default Counter;
```

## 7. 运行应用

启动开发服务器：

```bash
npm start
```

访问 `http://localhost:3000`，你将看到一个计数器应用，支持增减、自定义增量和异步操作。

## 8. 最佳实践

- **模块化**: 将功能拆分为多个 slice，保持代码清晰。
- **规范化状态**: 对于复杂数据，使用 `createEntityAdapter` 规范化状态。
- **异步逻辑**: 使用 `createAsyncThunk` 处理异步操作，配合 `extraReducers`。
- **TypeScript 支持**: Redux Toolkit 提供良好的 TypeScript 支持，推荐在大型项目中使用。
- **调试**: 使用 Redux DevTools 调试状态变化。

## 9. 总结

通过本教程，你学习了如何使用 Redux Toolkit 和 React-Redux 创建一个简单的计数器应用。Redux Toolkit 通过减少样板代码和提供现代化 API，使状态管理更加简单高效。继续探索 `createAsyncThunk`、`createEntityAdapter` 等功能，构建更复杂的应用！
