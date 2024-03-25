// alert("1234");
// confirm("밥 먹었니");
// console.log(is);

// setTimeout(() => {
//   alert("hello");
// }, 2000);

// const interval = setInterval(() => {
//   alert("hello");
// }, 2000);
// setTimeout(() => clearInterval(interval), 5000);

// 1초마다 alert("hello") 이거 실행 할거고
// 3초마다 confirm("end?") yes면 모든것을 종료시킬것이다.

// const hello = setInterval(() => {
//   alert("hello");
// }, 1000);

// const end = setInterval(() => {
//   if (confirm("hello")) {
//     clearInterval(hello);
//     clearInterval(end);
//   }
// }, 3000);

const txt = document.getElementById("txt");
console.log(txt);
let count = 0;
setInterval(() => {
  txt.innerHTML = `count : ${count++}`;
}, 1000);
