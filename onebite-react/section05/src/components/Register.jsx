// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import { useState, useRef } from "react";
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();
  console.log("register Render");

  const onChange = (e) => {
    ++countRef.current;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  console.log(input);

  const onSubmit = (e) => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={input.name}
        />
      </div>

      <div>
        <input
          name="birt"
          type="date"
          onChange={onChange}
          value={input.birth}
        />
      </div>

      <div>
        <select name="country" onChange={onChange} value={input.country}>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="JP">일본</option>
          <option value="DE">독일</option>
          <option value="CA">캐나다</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
