console.log("Hi, Node.js");

//CJS(Common JS 모듈 시스템) 방법 ==> ESM(ES Module 시스템 방법)과 함께 사용할 수 없음
// const moduleData = require("./math");
// console.log("Common JS Module add", moduleData.add(1, 2));
// console.log("Common JS Module sub", moduleData.sub(4, 1));
// const { addfun, subfun } = require("./math");
// console.log("Common JS Module addfun", addfun(1, 2));
// console.log("Common JS Module subfun", subfun(4, 1));

// ESM(ES Module 시스템 방법)
//package.json 밑에 "type":"module" 추가
// import multiply from "./math.js"; // 해당 모듈의 default 값을 불러올 땐 다음과 같이 사용해야함
// import { add, sub, add2 } from "./math.js";
// // import multiply, {add, sub, add2} from "./math.js"; //동일한 경로면 다음과 같이 합쳐서 부르는 것도 가능/
// console.log("ES Module add", add(1, 2));
// console.log("ES Module sub", sub(4, 1));
// console.log("ES Module multiply", multiply(4, 7));
// console.log("ES Module add2", add2(4, 5));

import randomColor from "randomcolor"; // from뒤 라이브러리 이름
const color = randomColor();
console.log("randomColor", color);
