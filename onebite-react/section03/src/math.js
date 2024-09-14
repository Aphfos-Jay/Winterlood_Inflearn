function add(a, b) {
  return a + b;
}

const sub = (a, b) => {
  return a - b;
};

//CJS(Common JS 모듈 시스템) 방법 ==> ESM(ES Module 시스템 방법)과 함께 사용할 수 없음
// module.exports = {
//   add, // 키값 명이 같을경우 굳이 나눌 필요 없음
//   sub: sub,
// };

//ESM(ES Module 시스템 방법)
export { add, sub };

export function add2(a, b) {
  return a + b;
}

export default function multiply(a, b) {
  return a * b;
}
