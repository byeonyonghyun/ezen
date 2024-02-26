// const today = new Date();

// console.log(today.getFullYear())
// const theDay = new Date("2025-02-25");
// const theDay = new Date(2025, 2, 25); => index값으로 인식해서 값이 달라질수 있다.
// console.log(theDay) => 인스턴스 객체(프로토타입)

// 프로그래밍언어
// 특정 객체를 생성 할 때 => const book1 = { title : "자바스크립트", price: 30000};

// const object = new Object();
// const arr = new Array();

// const today = new Date();
// const nowMonth = today.getMonth() + 1;
// const nowDate = today.getDate();

// document.write(`${nowMonth} ${nowDate}`)

// const open = new Date("2025001019");
// const theMonth = open.getMonth() +1;
// const theDay = open.getDate() ;


// document.write(`${theMonth} ${theDate}`)

const today = new Date();
const nowYear = today.getFullYear();
const theDate = new Date(nowYear, 11, 31);
const diffDate = theDate.getTime() - today.getTime();
const result = diffDate / (24 * 60 * 60 * 1000);
console.log(result);
document.write(`연말 D-day : ${result}`);