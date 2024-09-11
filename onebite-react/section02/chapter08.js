// 5가지 요소 순회 및 탐색 메소드

// 1. forEach - 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// 인수로 콜백함수가 들어가고 매 회전때마다 콜백함수가 실행된다.
// item은 각 n번째 원소, idx는 n번째 위치(인덱스), arr은 배열값 그자체
let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((item, idx, arr) => {
  console.log(idx, item * 2);
});

let doubledArr = [];
arr.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes - 배열의 특정 요소가 있는지 확인하는 메소드
let isInclude = arr.includes(3);
console.log(isInclude);

// 3. indexOf - 특정 요소의 인덱스(위치)를 찾아서 반환하는 메소드, 같은 값이 있는 경우 먼저 등장한 값의 인덱스 반환
// 객체타입을 순회시 제대로 값을 찾을 수 없음 얕은 비교를 통해서 진행되기 때문
let index = arr.indexOf(3);

// 4. findIndex - 모든 요소를 순회하면서, 콜백함수를 만족하는 요소의 인덱스(위치)를 반환하는 메소드
arr.findIndex((item) => {
  item % 2 === 1;
});

// 5. find - 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr2 = [{ name: "Jay" }, { name: "Kim" }];

const finded = arr2.find((item) => item.name === "Jay");
