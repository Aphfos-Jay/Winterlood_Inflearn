const promise = new Promise((resolve, reject) => {
  //비동기 작업을 할 callback 함수를 넣어야 함
  // promise객체에서 인수로 전달되는 함수를 executor로 불림

  setTimeout(() => {
    const num = 10;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num은 숫자가 아닙니다.");
    }

    //resolve("결과값"); // 성공한 상태로 변환시킬때 resolve 사용
    //reject("실패한 이유"); // 실패한 상태로 변환시킬때 reject 사용
  }, 1500);
});

console.log(promise);

// then 메소드, promise channing
promise
  .then((value) => {
    console.log("value is", value);
  })
  .catch((error) => {
    console.log("error is", error);
  });

// promise.catch((error) => {
//   console.log("error is", error);
// });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = 10;
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num은 숫자가 아닙니다.");
      }
    }, 1500);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);
  const newP = add10(result);
  return newP; // 리턴이 없으면 기존의 promise가 return이 있으면 새로운 promise가 리턴됨;
}).then((result) => {
  console.log("nweP is ", result);
});
