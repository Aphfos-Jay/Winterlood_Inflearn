// 1. 콜백함수
function main(value) {
  value();
}

function sub() {
  console.log("I am sub");
}

// main(sub);

// main(function sub2() {
//   console.log("파라미터 자리에 함수 선언 가능~");
// });

// main(function () {
//   console.log("익명함수로 콜백을 호출해도 됨");
// });

// main(() => {
//   console.log("당연히 화살표 함수도 던질 수 있음");
// });

// 2. 콜백함수의 활용

function repeat(count, callback) {
  for (let idx = 1; idx <= count; ++idx) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
