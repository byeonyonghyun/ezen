// //15.복습 & ES6문법
// //함수

// const hello = (name, message = "안녕하세요") => {
//   console.log()`${name}, ${message}`;
// };
// hello("홍길동", "반갑습니다");;
// hello("영심이");

// //함수, 나머지 매개변수 
// const addNum = (...numbers) => {
//   let sum = 0;

// };

// addNum(1, 2);
// addNum(1, 2, 3, 4, 5);

// //서로 다른 두개의 배열을 합치고자 할 때]

// const animals = ["bird", "cat"];
// const fruits = ["apple", "banana", "cherry"];

// console.log(animals.concat(fruits));


// const result = [...animals, ...fruits];
// console.log(result);

// const fruits1 = ["apple", "banana", "cherry"];
// const fruits2 = fruits1;
// fruits01[0] = "grape"

// const fruits03 = [...fruits01];
// fruits01[0] = "grape"


// //객체
// const book = {
//   title: "Javascript",
//   pages: 500,
// };

// book.published = "2024-03";

// book["author"] = "David";

// //객체, 프로퍼티 이름을 함수로 생성하는 방법

// const fn = () => {
//   return "result"
// };
// const add = (a, b) => {
//   return a+b;
// };
// const obj = () => {
//   [fn()] : "함수 키",
//   [`${add(10, 20)}`] : "계산식"
// };

//Symbol() : 유일무이한 값을 생성
//외부에서 툭정 객체의 키값을 찾아오지 못하도록 하기위함
// let id1 = Symbol();
// let id2 = Symbol();

// const id = Symbol("id");
// const tel = Symbol("telnumber");

// const member = {
//   name: "david",
//   age: 20,
//   [id]: 1235,
//   [tel]: function () {
//     alert(prompt("전화번호 입력"));
//   }
// };

// member.fnc();
// member[tel]();

// for (let item in member) {
//   console.log(`${item} : ${member[item]}
// } `);
// };

//전역요소로 생성 => 찾아오고 싶을 때
const tel = Symbol.for("tel");
const phone = Symbol.for("tel");

console.log(tel === phone);

//심볼 값을 찾아올때는 반드시 []로 찾아와야 한다.
//심볼 전욕요소로 생성/찾아 올 수 있다