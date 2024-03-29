/*
day1.js
java 처음한거 변수 선언
var를 쓰면 모든 타입 가능
*/
var number = 1;
var str = "안녕";
var isTrue = false;
// 출력문
var name = "박현서";
console.log("====print====");
console.log(name);
// name
console.log(str, name, isTrue, number);

var number = 1;
var number1 = "10";
console.log(number + number1);
console.log(number * number1);

console.log("==division==");
console.log(number / number1);
console.log(name / number1);

// 반복문
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log("=====");
console.log(i);
// for안에서 선언한 변수를 계속 쓸 수 있다.
// console.log(i, number10);
var number = 20;
console.log(i, number);
// 앞에서 number를 var로 선언하고 또 선언해도 가능하다
// -> 메모리에 부담이 됨
// -> 이걸 해결하기 위해 나온것이 let과 const
// let 변하는 변수 const 상수
