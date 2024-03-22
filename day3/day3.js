// (list,arr), object
// java : int[] arr = new int[123];
// List<Integer> list = new ArrayList<>();
const list = []; // 공간제약이 없음
// java : arr[0] = 1;
// java : list.add(1);
list.push(1);
console.log(list);

for (let i = 1; i <= 10; i++) {
  list.push(i);
}
console.log("==============");
console.log(list);
console.log(list[0]);
console.log(list.length);
console.log("==============");
