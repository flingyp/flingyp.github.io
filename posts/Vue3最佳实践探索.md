# Vue3 最佳实践探索

Vue3 从 **2020-09-18** 正式发布到今天为止周围生态也已经完善的差不多了。经过这么长时间的沉淀，很多新项目也开始逐渐向向Vue3转移了。

那么如何更优雅的写好Vue相关代码，那么应该就需要探讨一下Vue3的最佳实践了（本篇文章的观点完全是个人想法）。

## ⛏️ Composition API 🆚 Options API

Vue3 中提供了两种组件的写法，分别是 `Composition API` 和 `Options API`。那么这两种写法有什么区别呢？

### Options API

Options API 是 Vue2 中的写法，也是大家最熟悉的写法。

Options API 的写法是通过 `data`、`methods`、`computed`、`watch` 等属性来组织代码的。那么一般使用 Options API 的时候，我们会把相关的代码放在对应的属性中，这样就会导致代码的结构比较混乱。

**缺点**：项目代码过于复杂时，代码量增多，会导致代码可读性较差，不易于拆分和维护

### Composition API

Composition API 是 Vue3 中新增的写法，它是通过 `setup` 函数来组织代码的。

虽然这套 API 的风格是基于函数的组合，但**组合式 API 并不是函数式编程**。组合式 API 是以 Vue 中数据可变的、细粒度的响应性系统为基础的，而函数式编程通常强调数据不可变。[(官方文章内容)](https://cn.vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api)

**优点**：解决 Options API 的缺点，可以更好的组织代码，提高代码的可读性，便于拆分和维护。

**缺点**：由于 Composition API 是基于函数的组合，所以在使用的时候，需要注意函数的调用顺序，否则会导致代码执行顺序的混乱。

## ✈️ Ref、Reactive 和 Computed

### Ref 🆚 Reactive

Vue3 的数据响应式系统是基于 Proxy 实现的。而 Proxy 只针对引用数据类型可用，所以需要考虑基础数据类型也实现相同的功能。

Vue 官方源码如下：

```ts
// ref.ts
export function ref<T extends Ref>(value: T): T;
export function ref<T>(value: T): Ref<UnwrapRef<T>>;
export function ref<T = any>(): Ref<T | undefined>;
export function ref(value?: unknown) {
  return createRef(value, false);
}

function createRef(rawValue: unknown, shallow: boolean) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}

class RefImpl<T> {
  private _value: T;

  private _rawValue: T;

  public dep?: Dep = undefined;

  public readonly __v_isRef = true;

  constructor(
    value: T,
    public readonly __v_isShallow: boolean,
  ) {
    this._rawValue = __v_isShallow ? value : toRaw(value);
    // toReactive 内部回去判断是否引用类型，如果是 则执行 reactive(value) 否则返回 value
    this._value = __v_isShallow ? value : toReactive(value);
  }

  get value() {
    trackRefValue(this);
    return this._value;
  }

  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }
}
```

```ts
// 如果 value 是个引用数据类型，会执行 reactive(value) 否则直接返回 value
export const toReactive = <T extends unknown>(value: T): T => (isObject(value) ? reactive(value) : value);
```

```ts
// reactive.ts
export function reactive<T extends object>(target: T): UnwrapNestedRefs<T>;
export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}

function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>,
) {
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object
  if (target[ReactiveFlags.RAW] && !(isReadonly && target[ReactiveFlags.IS_REACTIVE])) {
    return target;
  }
  // target already has corresponding Proxy
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  // only specific value types can be observed.
  const targetType = getTargetType(target);
  if (targetType === TargetType.INVALID) {
    return target;
  }
  const proxy = new Proxy(target, targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
```

**总结**：

Ref：

1. Ref 在创建的时候，会对传入的值进行判断，如果是引用数据类型，会执行 `reactive(value)`，如果是基础数据类型，那么就直接赋值给 `_value`。
2. 当访问 Ref 的 `value` 属性时，会执行 `trackRefValue(this)`，这个方法会对 Ref 进行依赖收集。
3. 当访问 Ref 的 `value` 属性时，会执行 `triggerRefValue(this, newVal)`，这个方法会对 Ref 进行派发更新。

Reactive：

1. Reactive 在创建的时候，会对传入的值进行判断，如果是引用数据类型，会执行 `createReactiveObject`，如果是基础数据类型，那么就直接返回。
2. 针对引用数据类型，Reactive 会使用 ES6 的 Proxy 来代理对象， Proxy 的 `get` 和 `set` 方法中，会执行 `track` 和 `trigger` 方法，从而实现依赖收集和派发更新。

### Computed

Computed 是一个惰性的计算属性，它的值是由其他响应式数据计算而来，只有当它的依赖发生改变时，才会重新计算。

通俗易懂的来说 Computed 可以依靠其他响应式数据来计算出一个新的响应式数据，并且只有当数据发生变化时，才会重新计算。

```ts
export class ComputedRefImpl<T> {
  public dep?: Dep = undefined;

  private _value!: T;

  public readonly effect: ReactiveEffect<T>;

  public readonly __v_isRef = true;

  public readonly [ReactiveFlags.IS_READONLY]: boolean = false;

  public _dirty = true;

  public _cacheable: boolean;

  constructor(
    getter: ComputedGetter<T>,
    private readonly _setter: ComputedSetter<T>,
    isReadonly: boolean,
    isSSR: boolean,
  ) {
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this[ReactiveFlags.IS_READONLY] = isReadonly;
  }

  get value() {
    // the computed ref may get wrapped by other proxies e.g. readonly() #3376
    const self = toRaw(this);
    trackRefValue(self);
    if (self._dirty || !self._cacheable) {
      self._dirty = false;
      self._value = self.effect.run()!;
    }
    return self._value;
  }

  set value(newValue: T) {
    this._setter(newValue);
  }
}

export function computed<T>(getter: ComputedGetter<T>, debugOptions?: DebuggerOptions): ComputedRef<T>;
export function computed<T>(
  options: WritableComputedOptions<T>,
  debugOptions?: DebuggerOptions,
): WritableComputedRef<T>;
export function computed<T>(
  getterOrOptions: ComputedGetter<T> | WritableComputedOptions<T>,
  debugOptions?: DebuggerOptions,
  isSSR = false,
) {
  let getter: ComputedGetter<T>;
  let setter: ComputedSetter<T>;

  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = __DEV__
      ? () => {
          console.warn('Write operation failed: computed value is readonly');
        }
      : NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);

  if (__DEV__ && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }

  return cRef as any;
}
```

**总结**：

Computed：

1. 计算属性的目的是根据状态衍生属性，我们希望这个属性有缓存功能，如果依赖的数据不变就不会重新计算
2. 默认不执行,当我们取值时才会调用（具有缓存功能当取值多次只执行一次，只有当依赖的值发生变化才会重新执行）
3. 计算属性内部有个变量来控制是否重新执行 `dirty`（默认是 true，此时用户会执行此方法，拿到返回结果返回并且缓存起来，将 `dirty` 变为 `false`）。再次取值则 `dirty` 为 `false` 就去拿缓存的结果
4. 如果依赖项发生变化，会再次更新 `dirty` 变为 `true`，再取值的时候就会执行拿到新值

## ⛷️ 可组合式函数 Composable

**可组合式函数**：利用 Vue 的响应式系统 + Composition API 来组合代码。从而实现项目中代码的抽离和复用。

以下是一个简单的例子，去理解它的概念。

```vue
<!-- Counter.vue -->
<script setup lang="ts">
import { useCounter } from './composable';

const { count, setCounter } = useCounter(10);

const onClick = () => {
  // Custom logic content
  setCounter(count.value + 1);
};
</script>

<template>
  <button @click="onClick">
    {{ count }}
  </button>
</template>
```

```ts
// useCounter.ts
export const useCounter = (initValue: number) => {
  const count = ref(initValue);
  const setCounter = (value: number) => {
    count.value = value;
  };

  return {
    /**
     * 如果不需要通过外界来修改 count 的值可以使用 readonly 包裹
     * 或使用 computed 来衍生一个响应式数据
     */
    count: readonly(count),
    setCounter,
  };
};
```

这样就可以把 `Counter.vue` 中的逻辑代码抽离出来，放到 `useCounter.ts` 中。

从而实现代码的复用，而组件本身只关注数据视图的展示，组件或业务相关的逻辑代码统统都可以抽离放在一个或多个Composable中。

## 🚀 Vue3 最佳实践（个人看法）

通过上面内容的学习，我们对 Vue3 的响应式原理有了一个大致的了解，那么我们该如何在实际项目中使用 Vue3 呢？

巧用 Vue 的响应式系统 + Composition API 来组合代码，实现可组合式函数 Composable。

1. 可以统一使用 `Ref` 来包裹响应式数据，因为 Ref 兼容 Reactive，并且通过 `xx.value` 的形式更容易看出数据是一个响应式数据。
2. 多用 Computed 来衍生响应式数据，因为 Computed 有缓存功能，可以减少不必要的计算。
3. 尽量避免外部组件直接修改响应式数据，可以通过 Computed 或者 Ref 的 `readonly` 来包裹响应式数据，并且通过 Composable 来封装响应式数据的修改方法。
