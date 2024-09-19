// 3가지 hook 관련된 팀
// 1. 함수, 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다. (반복분, 조건문 등 )
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

import useInput from "../hooks/useInput";

//컴포넌트마다 반복되는 로직이 있고, 해당 로직이 useState같은 hook을 사용한다면 다음과 같이 custom으로 분리할 수 있음

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};
export default HookExam;
