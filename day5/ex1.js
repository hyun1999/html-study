// class Person {
//   age;
//   name;
//   constructor(age, name) {
//     this.age = age;
//   }
// }
// const person = new Person(1, "32");
// person.age;
const name = "fdsa";
const obj = { name };
console.log(obj);

const observer = new IntersectionObserver((entries, observer) => {
  // 처음에 실행이 되고, 타겟들이 보이면 다시 호출된다.
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      console.log("확인");
      entries.target.className = "box show txt_big";
    } else {
      console.log("미확인");
      entries.target.className = "box hide txt_small";
    }
    console.log(entries);
  });
});
// 콜백 함수: 남이 실행시켜주는 함수
const target = document.getElementsByClassName("box")[3];
observer.observe(target); //이 타겟을 감시한다.
