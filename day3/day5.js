// java script(x) java(type)
// java 어떤 기능을 호출하려면
// method
// js function
// public int sum (int a,int b)
// return a+b;
// function sum(a, b) {
//   return a + b;
// }

// function gap(a, b) {
//   return a > b ? a - b : b - a;
// }

// console.log(gap(1, 3));
// console.log(gap(100, 1));
// 요즘은 이런 방식으로 쓰지 않음

// function sum(a, b) {
//   return a + b;
// }

// const sum1 = (a, b) => {
//   // arrow function
//   a + b;
// };

// const diff1 = (a, b = 1) => {
//   // arrow function
//   a > b ? a - b : b - a;
// };

// const division = (a, b) => {
//   //함수 안에 함수
//   const sum = () => a + b;
//   return sum() / b;
// };
// console.log(division(1, 3));
// console.log("=================");
// const diff2 = (a, b = 2) => {
//   // arrow function
//   a > b ? a - b : b - a;
// };

const diff2 = (a, b = 2) => a - b;

const sum2 = (a, b = 2) => a + b;

const multi2 = (a, b = 2) => a * b;

const division2 = (a, b = 2) => a / b;

// sum2(3) : 5 -> diff2(5) : 3 -> sum2(3,10):13 -> diff(13,4): 9
console.log(diff2(sum2(diff2(sum2(3)), 10), 4)); // 여기서 sum2(3)은 값이다. 함수는 sum2이다. -> 함수는 변수이다. 괄호가 붙으면 값, 괄호가 붙지않으면 함수.

console.log(sum2);
const list = [sum2, diff2, multi2, division2, (a) => a * a];
let total = 0;
for (let i = 0; i < list.length; i++) {
  total += list[i](i, 10);
}
console.log(total);
const [sum3, diff3, multi3, division3, pow3] = list;
console.log(sum3(1, 2));
