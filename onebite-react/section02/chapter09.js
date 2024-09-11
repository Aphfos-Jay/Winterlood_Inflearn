// 5가지 배열 변형 메소드

// 1. filter - 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 반환, 배열의 길이가 변함

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = arr.filter((item) => {
  if (item % 2 === 1) {
    return true;
  }
});

// 2. map - 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배여로 반환, 배열의 길이가 변하지 않음
const mapResult1 = arr.map((item) => {
  return item * 2;
});

console.log(mapResult1);

// 3. sort - 배열을 사전순으로 정렬하는 메소드
arr.sort();
// 숫자의 경우 아래처럼 대소비교를 넣어줘야 제대로 정렬이 됨
arr.sort((a, b) => {
  if (a > b) {
    // b가 a앞으로 와라
    return 1;
  } else if (a < b) {
    //a가 b앞으로 와라
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

// 4. toSotred - sort와 기능은 똑같음, 원본 배열은 두고 새로운 배열을 리턴함
let arr2 = ["C", "A", "D", "B"];
const sorted = arr2.toSorted();

// 5. join - 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메소드
let arr3 = ["Hi", "I'm", "Jay"];
const joined = arr3.join(" ");
