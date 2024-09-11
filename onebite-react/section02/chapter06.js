// 1. 배열 순회
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; ++i) {
  console.log("배열 인덱스 방식", arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];

for (let i of arr2) {
  console.log("배열 for of 방식", i);
}

// 2. 객체 순회
let person = {
  name: "Jay",
  age: 33,
  hobby: "running",
};

let keys = Object.keys(person);
for (let i = 0; i < keys.length; ++i) {
  console.log("객체 Object.keys 인덱스 방식", person[i]);
}

for (let key of keys) {
  console.log("객체 Object.keys for of 방식", key, person[key]);
}

let values = Object.values(person);
for (let i = 0; i < values.length; ++i) {
  console.log("객체 Object.values 인덱스 방식", values[i]);
}

for (let value of values) {
  console.log("객체 Object.values for of 방식", value);
}

for (let key in person) {
  console.log("객체 for in 방식", key, person[key]);
}

// 배여 순회는 for of, 객체 순회는 for in!
