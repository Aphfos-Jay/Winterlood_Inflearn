// 1. Spread 연산자 // 배열, 객체에 사용가능

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// 함수를 호출할때 들어간 매개변수가 전부 배열로 저장이 됨
// 아래처럼 선언된경우 첫번째 매개변수는 one에 나머지는 rest에 배열 형태로 저장됨
// ...만 붙으면 parameter 명은 아무 상관 없다. ...args, ...params 등
function funcB(one, ...rest) {}

funcB(...arr1);
