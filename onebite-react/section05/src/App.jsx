import "./App.css";
import Register from "./components/Register";
import HookExam from "./components/HookExam";
//html을 반환하는 함수를 컴포넌트라고 지칭하고 컴포넌트의 이름은 함수명을 따라간다. 아래의경우 App 컴포넌트라고 지칭
// 리액트는 3가지 경우에서 리렌더가 발생 1. state변경,  2. 자신이 제공 받는 props 변경, 3. 부모컴포넌트가 리렌더 되면 자식도 리렌더
// state가 관련이 없다면 분리시켜주는게 좋음

function App() {
  return (
    <>
      <HookExam></HookExam>
    </>
  );
}

export default App;
