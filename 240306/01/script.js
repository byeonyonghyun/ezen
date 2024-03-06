//Map 객체 => 2015, ES6
// arr.map()

//이유

//1) JS객체 => 일반객체 > 배열객체

//2) 일반객체
//장점 : key 와 value 값을 가지고 있는 프로퍼티
//데이터를 체계적으로 보관, 관리, 사용
//단점 : for...in => 객체 안에 있는 value 값만을 찾아와서 직접적을 반복문을 돌릴 수 있는 방법이 없음
//객체 안에 구성되어있는 아이템들은 배열처럼 인덱스 번호를 할당받지 못한다.

//3) 배열객체
//장점 : 배열안에 포함되어있는 아이템들이 고유의 인덱스값을 가지고 있으며, for문을 활용한 반복문으로 업무의 효율성 극대화
//단점 : 객체처럼 key와 value 형태로 구성된 체계적인 데이터 관리가 안됨

//해결책 : 일반객체와 배열객체의 장점만 모아서 하나로 만들면 어떨까? => Map

//key 와 value 값으로 구성된 아이템을 가질 수 있다.
//각 아이템별 인덱스 값을 할당받을 수 있다.
//for의 반복문을 활용해서 언제든지 값을 추출할 수 있다.

// const bag = new Map();
// bag.set("color", "red");

// console.log(bag);

const myCup = new Map([
  ["color", "white"], ["material", "ceramic"], ["capacity", "300ml"]
]);
myCup.set("type", "mini").set("purpose", "daily");
console.log(myCup);

console.log(myCup.size);
console.log(myCup.get("color"));//해당 key의 value 값을 가져옴
console.log(myCup.has("color"));//해당 key가 존재하는지 참과 거짓으로 나타냄
console.log(myCup.has("variable"));
myCup.delete("type");//해당key를 삭제
// myCup.clear();//모든 객체를 지움
console.log(myCup);

console.log(myCup.keys());

for (let key of myCup.keys()) {
  console.log(key);
};

//배열과 같이 내부 아이템을 한개씩 찾아와서 반복 순회할 수 있도록 해주는 객체 => 이터레이터 객체

// for (let value of myCup.values()) {
//   console.log(value);
// }

// for (let value of myCup.entries()) {
//   console.log(value);
// }


//데이터의 중복을 막을 수 없다
// 동일한 데이터한 하나의 객체안에 들어오면 안되는 상황

//일반객체 + 배열객체+ Map + 데이터중복x => set()

const numSet1 = new Set();
numSet1.add("one").add("two");