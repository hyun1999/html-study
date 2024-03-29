//리스트를 만들고 1부터 10까지 넣어라
const list = [];
for (let index = 1; index <= 10; index++) {
  list.push(index);
}

list["4"] = 10;

console.log(list);

//object js의 메인
// json은 js의 object에서 나온것으로 js뿐만 아니라 다른곳에서도 쓸수있게 만든거임
const obj = { age: 10, print: () => console.log(obj["age"]) };
obj["name"] = "park";
// key value로 값을 빼올 수 있음 java의 map과 비슷하긴한데
console.log(obj["name"]);
console.log(obj["age"]);

obj["print"](); //자기 자신을 호출하는 것이 가능함
for (let i = 1; i <= 10; i++) {
  obj[i] = i;
}
console.log(obj);
// java의 클래스는 틀이 정해져있지만 js는 틀이 딱히 없다

const classRoom = {
  students: [
    { name: "김부자", age: 22 },
    { name: "조진호", age: 32 },
  ],
  manager: [{ name: "송희", age: 30 }],
}; //json

console.log(classRoom["students"][1]["name"]);
console.log(classRoom.students[1].name);

classRoom["list"] = list;
list[0] = 100;
console.log(classRoom);
// list의 숫자를 바꿨는데 classRoom의 list도 바뀜

const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];

// for (let i = 0; i < students.length; i++) {
//   students[i].age++;
// }

// console.log(students);

// const ageup = [];
// for (let i = 0; i < students.length; i++) {
//   const obj = { name: students[i].name, age: students[i].age + 1 };
//   ageup.push(obj);
// }

// console.log("students:");
// console.log(students);
// console.log("ageup:");
// console.log(ageup);

// // spread 구문
// console.log({ ...students[0] });
// console.log({ ...students[0], age: students[0].age + 1 });

// const [b, jh] = students;
// console.log(b, jh);

// const { name, age } = jh;

// console.log(name, age);

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   const { age } = student;
//   const obj = { ...student, age: age + 1 };
//   ageup.push(obj);
// }
// console.log("========");

// console.log(obj);

// const isAdultList = [];
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   isAdultList.push({ ...student, isAdult: students.age > 19 });
// }

// console.log(isAdultList);

// ** map **

const isAdultList = students.map((el) => ({
  ...el,
  isAdult: el.age > 19,
}));

console.log(isAdultList);
const ageUpFunc = (el) => ({ ...el, age: el.age + 1 });
const ageup = students.map(ageUpFunc);
// 남이 실행시켜주는 함수를 콜백 함수라고 함
console.log(ageup);

const adultList = students.filter((el, index, arr) => {
  return el.age > 19;
});
console.log(adultList);

console.log("");
console.log("김씨만 출력");
const kimList = students.filter((el) => {
  return el.name.includes("김");
});
console.log(kimList);

const ageAsc = students.sort((a, b) => b.age - a.age);
console.log(ageAsc);
