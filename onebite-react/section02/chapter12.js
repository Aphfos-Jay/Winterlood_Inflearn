const task = () => {
  setTimeout(() => {
    console.log("안녕하세요!!");
  }, 500);
};

const add = (a, b) => {
  setTimeout(() => {
    const sum = a + b;
    console.log("sum ==>", sum);
  }, 500);
};

const add2 = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 500);
};

task();
add(7, 8);

// 비동기 작업의 결과값을 외부에서 사용하고 싶으면 다음과 같이 callback 함수를 설정해서 사용한다.
add2(10, 15, (value) => {
  console.log("value ==>", value);
});

// 음식을 주문 하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "Salmon Steak";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
