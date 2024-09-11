// 6가지의 배열 요소 조작 메서드

// 1. push - 배열의 맨 뒤에 요소 추가, push 수행 후 변경된 배열의 길이를 리턴
let arr1 = [1, 2, 3];
arr1.push(4);
arr1.push(5, 6, 7);

// 2. pop - 배열의 맨 뒤에 있는 요소를 제거하고 반환
const poppedItem = arr1.pop();

// 3. shift - 배열의 맨 앞에 있는 요소를 제거하고 반환
const shiftedItem = arr1.shift();

// 4. unshift - 배열의 맨 앞에 새로운 요소를 추가하는 메서드, unshift 수행 후 변경된 배열의 길이를 리턴
arr1.unshift(10);

// 5. slice - 배열의 특정 범위를 잘라내서 새로운 배열로 변환 slice(start, end+1);
let arr2 = arr1.slice(1, 4);
let arr3 = arr1.slice(1);
let arr4 = arr1.slice(-3);

// 6. concat - 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let concatArr = arr3.concat(arr4);
