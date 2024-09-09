// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "빗코",
  color: "yellow",
};

animal.age = 2; // 추가
animal.name = "코코"; //수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "Jay",
  sayHi: () => {
    console.log("Good Morning!");
  },
};

person.sayHi();
person["sayHi"]();
