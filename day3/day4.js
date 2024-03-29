const list = [1, 4, 5, 21, 42, 1, 3, 57, 9, 5231];
//짝수인지 아닌지 하나하나 계산해서 list로 만들어 보여주기
const result = [];
// for (let index = 0; index < list.length; index++) {
//   const element = list[index] % 2 == 0 ? true : false;
//   result.push(element);
// }
// console.log(result);

// map은 기준 리스트를 가지고 새로운 값이 다른 리스트를 만드는 것
const isEvenList = list.map((element, index, arr) => {
  //   console.log(element, index, arr);
  return element % 2 === 0;
});

console.log(isEvenList);
