// 1, 2, "짝" , 4 , 5 , 짝 , 10
const list = []; // 100..1000 ->
const list369 = []; // 369리스트를 만들것이다
for (let i = 100; i <= 1000; i++) {
  list.push(i + "");
}

for (let i = 0; i <= 900; i++) {
  const value =
    list[i].includes("3") || (i + "").includes("6") || (i + "").includes("9")
      ? "짝"
      : i; // 삼항 연산자
  list369.push(value);
}
console.log(list369);
