// 변수 선언 const
let text = "hi";
text = 1;

// function sum(a, b) {
//   return a + b;
// }
const sum = (a, b) => {
  return a - b;
};
console.log(sum("hi", 2));

if (sum(2, 4) == 5 && sum(4, 1) > 5) {
  console.log("hi");
}

const print = (i) => {
  console.log("print");
  return i === 2;
};
console.log("====ppp====");
const ppp = print(2) && 7;
console.log(ppp);

console.log("====ppp2====");
const ppp2 = print(2) || 7;
console.log(ppp2);

const arr = [1, 2, 3, 4, 5];
// 원본데이터를 지켜주는것이 중요

arr.sort; // sort
arr.map; // 원본을 가공
arr.filter; // 거르는것

const obj = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () => `${obj.name} ${obj.age} ${obj.gender === 1 ? "남" : "여"}`,
};

const g = obj.gender === 1 ? "남" : "여";
console.log(obj.toString);
console.log(obj.address); // undefined
// console.log(obj.address.city); // Cannot read properties of undefined (reading 'city')
console.log(obj.address?.city); // undefined
console.log(obj.address ? obj.address.city : obj.address); // 위의 코드는 이 코드를 줄인것임
console.log(obj.address?.city);
console.log(obj.address && obj.address.city);

const arr2 = ["김부자", "김세현", "김재민"];
const [p1, p2, p3] = arr2;

const obj2 = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () => `${obj.name} ${obj.age} ${obj.gender === 1 ? "남" : "여"}`,
};

const { name, age, gender } = obj2;
const makePerson = (name, age) => {
  return { name, age };
};
console.log(makePerson("이수진", 20));
const isAdult = ({ name, age, ...rest }) => {
  // name과 age는 무조건 있어야하고 나머지는 없어도 됨
  return { name, age, isAdult: age > 20, ...rest };
};
const 이수진 = makePerson("이수진", 20);
console.log(isAdult(obj2));
