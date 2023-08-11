# JSX 语法

JSX - JS 语法扩展，可以在 JS 中写模板（类似 HTML 语法）<br>
JSX 已经成为 ES 语法标准，也可用于其他框架，如 Vue3

- 标签
- 属性
- 事件
- JS 表达式
- 判断
- 循环

# 标签
1. 首字母大写
2. 每段jsx中只能有一个单根节点， 可以使用片段  <></>
![Alt text](image.png)
3. 闭合标签
4. 标签必须闭合

function App () {
  return (
    </>
      ....
    </>
  )
}

# 属性
** 1. 和HTML属性基本一样，但有些和JS关键字冲突了 **

- `class` 要改为 `className`
- `style` 要写成 JS 对象（不能是 string），key 采用**驼峰写法**
- `for` 要改为 `htmlFor`
 
```jsx
function App () {
  return (
    <div className="app" style={{color: 'red', backgroundColor: 'blue'}}>
      <input id="input" />
      <label htmlFor="input">hello world</label>
    </div>
  )
}
```

# 事件
`onXxx` 的形式 

onXxx = {function}
花括号里面是一个函数，函数名是onXxx，函数的值是一个函数

```jsx
function clickHandler(event: React.MouseEvent<HTMLParagraphElement>) {
    event.preventDefault()
    console.log('clicked')
}

return <p onClick={clickHandler}>hello world</p>
```
```jsx
const clickHandler =  () => (event: React.MouseEvent<HTMLParagraphElement>) {
    event.preventDefault()
    console.log('clicked')
}

return <p onClick={clickHandler()}>hello world</p>
```



## JS 表达式

`{xxx}` 格式表示一个 JS 变量或表达式，可用于

- 普通文本内容，或判断、循环
- 属性值
- 用于注释

```jsx
function App () {
  const name = 'jack'
  const show = true
  const arr = [1, 2, 3]
  const obj = {a: 1, b: 2}

  return (
    <div>
      <p>{name}</p>
      <p>{show ? 'true' : 'false'}</p>
      <p>{arr}</p>
      <p>{obj}</p>
      <p>{null}</p>
      <p>{undefined}</p>
      <p>{NaN}</p>
      <p>{1 + 1}</p>
      <p>{[1, 2, 3].map(item => <span>{item}</span>)}</p>
      <p>{/* 注释 */}</p>
    </div>
  )
}
```
```
