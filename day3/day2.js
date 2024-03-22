// let 변하는 변수 const 상수
// let i = 0;
// const i = 0;

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);
// 참조 에러 발생
console.log("=============");
// 2의 배수만 출력
for (let i = 0; i < 10; i++) {
  if (i != "0" && i % "2" == 0) {
    console.log(i);
  }
}
// 숫자 0과 문자 0을 구분하지x
// 이 문제를 해결하기 위해 ===를 사용
console.log("=============");
for (let i = 0; i < 10; i++) {
  if (i === "0") console.log(i);
  else if (i === 0) console.log(true);
}
if ("true" == true) console.log("같다");
// 싱글 스레드에 변수에 어떤 타입을 넣어도 상관없다는 특징이 있다.
