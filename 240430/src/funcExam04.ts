// 함수를 정의할 때
// 일반, 익명, 화살표
// function

// 배열 혹은 객체

// const arr = ["1","2",];

// 변수 선언문 방식
const arr = new Array();
const obj = new Object();
// const fnc = new Function("a", "b", "return a + b");
// function fuc(a, b) {
//   return a + b;
// }

//함수에 대한 타입 정의 : 실행문 / 표현식문

const sum1 = ( a: number, b: number ): number => {
  return a + b;
};
const sum2 = ( a: number, b: number ): number => a + b;


console.log(sum1(1,2));
console.log(sum2(1,2));