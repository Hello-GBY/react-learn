// react 定义组件的方式
/**
 * 1. 函数创建的时候 开头得能大写；
 * 2. 返回的 的元素 如果多行的情况下 需要 （）括起来；
 * 3. 返回的时候 只能返回一个元素； 如果需要返回多个元素 需要用一个空元素包裹起来；
 * 4. 动态值是 {} 包裹起来的；
 */
function MyButton(props) {
  return <button>{props.title}</button>;
}

function MyHeader(props) {
  return (
    <div>
      <h1>ni_ni</h1>
      <MyButton />
    </div>
  );
}

function AutoPage() {
  const userInfo = {
    name: "ni_ni",
    age: 18,
    color: "red",
  };

  return (
    <>
      <h1>{userInfo.name}</h1>
      <h1>{userInfo.age}</h1>
      <div class={userInfo.color}>
        <MyHeader />
      </div>
    </>
  );
}

export { MyHeader };
