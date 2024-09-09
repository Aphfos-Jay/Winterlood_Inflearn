// 1. 객체 생성
let object1 = new Object(); // 객체 생성자
let object2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "Jay",
  age: 33,
  hobby: "독서",
  job: "Software Developer",
  extra: {},
  "like cat": false,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // typescript와 관련된 경고사항 vscode 기본 기능
let age = person["age"];
console.log(age);
let property = "hobby";
console.log(person[property]);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.company = "doosan corp";
person["height"] = 188;
console.log("person ==> ");
console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "회사원";
person.hobby = "서핑";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
