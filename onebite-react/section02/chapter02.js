/**
 * 단락평가(Short-circuit Evaluation)
 * &&, || 의 연산에서 앞의 피연사자에 접근 후 조건이 성립이 되면 뒤에 피연산자의 조건을 확인하지 않는 자바스크립트의 특징
 */

const returnFalse = () => {
  console.log("False 함수");
  return false;
};
const returnTrue = () => {
  console.log("True 함수");
  return true;
};

console.log("단락평가 비교1");
console.log(returnFalse() && returnTrue());

console.log("단락평가 비교2");
console.log(returnTrue() && returnFalse());

console.log("단락평가 비교3");
console.log(returnTrue() || returnFalse());

console.log("단락평가 비교4");
console.log(returnFalse() || returnTrue());

// 단락 평가 활용 사례

const printName = (person) => {
  //단락평가를 활용하기 때문에 if조건이 필요가 없음
  const name = person && person.name;
  console.log(name || "Person의 값이 없음"); // 이 경우 첫번째 truthy한 값이 반환 된다.
};

let person1;
printName(person1);
let person2 = { name: "jay" };
printName(person2);
