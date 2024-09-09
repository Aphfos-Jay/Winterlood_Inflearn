function funcA() {
  console.log("funcA");
}

const varA = funcA;
console.log("함수 그 자체 ==> " + varA);
varA();

const varB = () => {
  console.log("함수 표현식 varB");
};
varB();
