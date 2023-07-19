# 基础Hook

## useState
useState函数的入参只有一个，就是state的初始值，这个初始值可以是数字、字符串、对象，甚至是一个函数

```js
import {useState} from 'react'

function Test () {
  let  {content, setContent } =  useState(0)

  return ........
}

```


## memo
### useMemo
useMemo的作用是用来做性能优化的，它的入参是一个函数，返回值是一个值，这个值会被缓存起来，只有当依赖的值发生变化时，才会重新计算
### useCallback
useCallback的作用也是用来做性能优化的，它的入参是一个函数，返回值是一个函数，这个函数会被缓存起来，只有当依赖的值发生变化时，才会重新计算
### memo
memo的作用是用来做性能优化的，它的入参是一个组件，返回值也是一个组件，这个组件会被缓存起来，只有当依赖的值发生变化时，才会重新计算

```jsx
import { useCallback, useMemo, useState, memo } from "react";

function Child({ onButtonClick, data }) {
  return (
    <button onClick={onButtonClick}>
      {data.number}
      -----
      {new Date().getTime()}
    </button>
  );
}
Child = memo(Child); // 缓存组件
export default function Example() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("hello");
  // 为了缓存 number 更新才会更新
  const addClick = useCallback(() => setNumber(number + 1), [number]);
  const data = useMemo(() => ({ number }), [number]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Child onButtonClick={addClick} data={data} />
    </div>
  );
}

```
