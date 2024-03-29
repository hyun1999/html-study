//2..100 소수탐색
let flag = false;
for (let i = 3; i <= 100; i++) {
  flag = false;
  for (let j = 2; j < i / 2; j++) {
    if (i % j === 0) {
      flag = true;
      break;
    }
  }
  if (flag == false) {
    console.log(i, "는 소수");
  }
}
