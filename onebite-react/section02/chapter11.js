// 자바스크립트엔진은 스레드가 1개이지만 Web APIs를 이용하여 비동기로 사용
// setTimeout함수를 Web APIs에 넘겨 해당 함수를 실행하게 끔 함
console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);
