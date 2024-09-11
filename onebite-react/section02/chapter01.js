const printName = (person) => {
  //person 오브젝트가 undefined or null값의 경우 falsy한 값이므로 !연산자로 true, false 체크 바로 가능
  // person === undefined || person === null 같이 안써도 됨
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
};

let person;
printName(person);
