// prompt(); => 내장함수
// alert(); => 내장함수
// document.write(); =>함수

// 함수의 생김새
// 단어() => 함수

// 함수가 작동하려면 무엇이 필요할까?
// 1) 함수를 구현 = 제작
// 2) 함수를 호출 = 실행

// 함수를 구현하려면 어떻게 해야할까?
// 함수를 구현하는 방법은 3가지
// 1) 클래스 함수 구현 방법
// 2) 익명 함수 구현 방법
// 3) 화살표 함수 구현 방법


// 초보 레벨
// let num = 0;
// num += 1;
// num += 2;
// num += 3;
// num += 4;
// num += 5;

// 중급 레벨
// 상황에 따라 재활용성이 불가능한 코드1
// let sum =0;
// for(let i=1; i<=5; i++) {
//   sum += i;
// }

// 고급 레벨
// 재활용이 가능한 코드 업그레이드
// 인자값과 매개변수는 반드시 둘 다 선언되어야한다!
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
//   // =템플릿 리터럴 문법
// };

// calcSum(40);

// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요"));

// 클래스 함수
// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}입니다`);
// };

// 익명 함수
// const sum = function (a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}입니다`);
// }

// 화살표 함수
// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}입니다`);
// }

// sum(userNum01, userNum02);

// return문
// 연산에 대한 결과값을 바깥으로 끄집어 내고 싶을때
// const num = Number(prompt("숫자를 몇까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// };

// calcSum(num);
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다`);
// 인수(인자값)

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }

// console.log(multiple(userNum01, userNum02, userNum03));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다`);
// }

// js 엄청 큰 문제점을 발견 => 콘솔창을 통해서 알려줌
// 아주 사소한 문법상의 문제는 알려줌
// 보다 효율적으로 버그를 찾는 방법

// local scope = 해당 변수가 선언된 특정 영역 안에서만 사용 가능한 변수값
// block scope = 블럭 내에서만 = 해당 변수가 선언된 블록 안에서만 사용 가능한 변수값
// global scope = 전역 스코프 = 해당 변수를 현 자바 스크립트 파일 내 어디서든 사용 가능한 변수값

// const hi = "hello";

// function greeting() {
//   console.log(hi);
// }
// greeting();

// const factor = 5;
// function calc() {
//   return num * factor;
// }
// const num = 10;
// let result = calc();
// document.write(`result : ${result}`);

// JS 권장사항
// 1)var 보다는 let, const 키워드로 변수를 선언해라

// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// var num = 3;
// console.log(`1부터 ${num}까지 더하면 ${addSum(num)}`)

// var로 선언하면 window에 포함된 변수가 되어버림.(협업에 불편하다)

// 2) 가급적이면, 전역 스코프의 변수 선언은 피해라(지역이나 블록변수가 안정적이다)=>만약 변수가 중복 설정된다면, 내가 의도하지 않은 코드가 실행될 가능성이 있음
// 3) 그래서 var,let보다는 const에 적응해라!

// 즉시 실행 함수
// 구현부 와 실행부를 붙혀서 사용하는 함수!
// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수실행결과 : ${sum}`);
// };

// ((a, b) => {
//   const sum = a + b;
//   console.log(`함수실행결과 : ${sum}`);
// })(1, 2);


// Hoisting 기법 => 끌어올리다
// class함수는 hoisting / 화살표 & 익명 x

// example();

// const example = () => {
//   console.log("hello");
// };


// function example01() {
//   console.log("hello");
// }


// const example01 =function() {
//   console.log("helloㄴ");
// }


// 화살표 함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중괄호 & 값을 반환시켜주는 return문을 생략해도 문제없이 작동가능
// let hi = () => {
//   return `안녕하세요`;
// };

// console.log(hi());

// let sum = function(a, b) {
//   return a + b;
// };

// let sum = (a, b) =>
//   a + b;

// 화살표 함수 탄생 이유
//  1) 반복적으로 사용돠는 funtion & 함수명을 생략
// 2) JS 근본없는 구현 & 호출부의 순서를 명확하게 정의
// 3) 함수의 실행문에서 굳이 중괄호 & return문 사용하지 않아도 구현할 수 있도록 해주기 위한 목적!!

// 변수 선언시 let, var, const 사용하지 않으면 무조건 지역변수화

// function greeting () {
//   hi = "hello"
// }

// greeting();
// console.log(greeting(hi))

// 콜백 함수안에 또다른 함수를 호출할때 부르느 용어

// const btn = document.querySelector("button");
// const display = () => {
//   alert("오늘도 화이팅");
// };

// btn.addEventListener("click", () => {
//   alert("오늘도 화이팅")
// })


// const showData = (name, age) => {
//   alert(`안녕!~ ${name} 넌${age} 니?`);
// };
// const gatData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge)
// };

// getData(showData);

// 프로그래밍 언어 함수
// JS함수 => 1급시민 => first-class sitizen;
// 모든 프로그래밍 언엉에서 1급시민이 되려면 다음과 같은 조건 부합

// 1) 함수를 변수의 값으로 할당할수 있어야한다!
// 2) 함수가 또 다른 함수의 매개변수 혹은 이자값으로 사용될 수 있어야 한다
// 3) 함수가 또 다른 함수의 return 안에 반환값으로 들어올 수 있어야한다. => 고차함수

// const init = () => {
//   return function (a, b) {
//     return a - b > 0 ? a - b : b - a;
//   };
// };

// console.log(`init(30,20) : ${init(30,20)}`);

// const addNum = (a, b) => a + b;

// console.log(addNum(1, 3));

// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum
// };

// console.log(addNum(1, 3, 5, 7));

// const displayFavorites = (first, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   return str;
// };

// console.log(displayFavorites("사과", "포도", "토마토"));

// window 운영체제 => 내장함수
// JS = 싱글 쓰레드로 작동하는 객체 지향 프로그래밍 언어입니다.
// 싱글 => 1/ 스레드 => 길 =>1차선 통행
// <->멀티 쓰레드 : 복수 차선
//  동시성x / 비동기 처리 x
// 로딩 스피너

// setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수!
// const greeting = () => {
//   console.log("안녕하세요");
// };

// setInterval(greeting, 2000)
// 사간관련 내장함수 (setInterval, clearINtssste)
// 재귀함수
// setTimeout() : 특정시간이 경과한 이후에 작동하게 만드는 함수
// heap / callstack /que

setTimeout(() => {
  console.log("안녕")
}, 3000)
