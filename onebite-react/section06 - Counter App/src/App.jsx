import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  /**Section07 내용
   * React 라이프사이클
   * 1. 마운트: 탄생
   * 2. 업데이트: 변화, 리렌더링
   * 3. 언마운트: 죽음
   * useEffect: 2번째 파라미터의 값이 바뀌면, 사이드 이펙트로 1번째 파라미터 콜백함수가 실행됨
   */
  // useEffect(() => {
  //   console.log(`count:${count} / input: ${input}`);
  // }, [count, input]); // 의존성 배열, dependency array, deps

  // 1. 마운트
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 / deps를 생략해주면 됨
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
