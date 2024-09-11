// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // 값을 모자른 것을 대비해 기본값 설정 가능

// 2. 객체의 구조 분해 할당
let person = {
  name: "Jay",
  age: 33,
  hobby: "running",
};

let { name, age: myAge, hobby, extra = "Good Morning!" } = person; // 기본값 설정 및 myAge에 기존 age값 할당 가능

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법. 단, 객체만 넘겼을 땐 구조분해할당 표현이 가능 리액트 props.attribute를 {attribute로 받는 거}
const func = ({ name, age, hobby, extra }) => {
  console.log({ name, age, hobby, extra });
};

func(person);
