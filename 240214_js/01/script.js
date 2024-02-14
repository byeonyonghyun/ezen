// 자료형
// 변수에 담겨질 수 있는 값의 형태를 의미!!
// 숫자형/문자열/논리형/객체/배열/함수/심볼
// 객체 => {key : value} => property{*프로퍼티 = 속성}

// 객체 > 배열

// let arr = [1, 2, 3, 4];
// let arrStr = ["a", "b", "c"];
// let arr01 = [];

// index & length
// index 배열에 들어가는 요소들은 index값을 갖는다.( 0부터 시작)
// 사람 => 값을 입력!! => 0,1
// bit => 0,1
// byte = 8bit

// JS = "객체 지향" 프로그래밍 언어
// <=> "절차 지향" : 고차함수 이해 필요

// console.log(arr[3]);

//배열 마지막 요소의 index값은 전체 배열 안에 전체 아이템의 갯수보다 1이 작다.

// console.log(arrStr.length);

// length는 전체 아이템의 갯수를 찾아온다.

// 유일무이한 값을 저장하고 관리하고 싶은 경우 사용

// let var1 = Symbol();
// let var2 = Symbol();

// 비교연산자 => 서로다른 피연산자를 비교할때 사용하는 연산자

// console.log(var1 === var2);

// e-commerce = 쇼핑몰
// 회원들의 개인정보 =>

// 숫자=1 문자열="a" 논리형=true 객체={} 배열=[] 함수=function

// let id = Symbol();

// const member01 = {
//   name: "Kim",
//   [id]: 12345,
// };

// member01.id = 6789;


// const member02 = {
//   name: "Kim",
//   id: 12345,
// };

// console.log(member02);

// const member02 = {
//   name: "park",
//   id: "abc",
// };

// let grade = Symbol("grade");

// member01[grade] = "VIP";
// console.log(member01);

// const fnc = function () {
//   console.log("test");
// };

// 익명함수
// 함수는 이렇게 작성하는 것이 기본문법
// function fnc01() {
// }

// promt() : 사용자에게 어떤 값을 받아올 수 있도록 해주는 함수!!
//  사용자가 아무리 숫자를 입력 => 문자열 형변환!!

// 문자열 + 숫자형 = "문자열"
// - / * =>
// let srt = "20";
// let num = 10;

// Number() : 매개변수로 들어오는 값을 무조선 숫자로 형변환
// let result = Number(srt) + num;
// console.log(result);

// let result01 = srt - num;
// console.log(result01);

// console.log(Number(true)); => 1
// console.log(Number(false)); => 0
// console.log(Number("Hi!")); => NaN
// console.log(Number("20")); => 20

//  Number() vs parseInt() vs parseFloat() => Number가 상위요소

// const userAge = prompt("당신의 나이를 입력하세요");
// console.log(typeof userAge); => number
// const userAge = Number(prompt("당신의 나이를 입력하세요"));
// console.log(typeof userAge); => number
// const userAge = parseInt(prompt("당신의 나이를 입력하세요"));
// console.log(typeof userAge); => number

// 소괄호 안에 들어온 값을 무조건 다 숫자로 바꿀 수 없음- 숫자를 정수(소수점이 없는 값)로 바꿔주는 역할
// console.log(parseInt(false)); => NaN

// const userHot = parseInt(prompt("당신의 체온을 입력해주세요"));
// console.log(userHot); => 입력값(36.5) => 36

// 소괄호 안에 들어온 값을 실수의 형태로 바꿔주는 역할
// const userHot = parseFloat(prompt("당신의 체온을 입력해주세요"));
// console.log(userHot); => 36.5


// console.log(typeof num.toString()); => 숫자를 문자로 바꿈
// 쇼핑몰 10만개의 의류 상품 => 바코드(문자)

//  null & undefined
// let num = null;
// console.log(typeof num.toString()); => error
// console.log(typeof String(null)); => string

// console.log(Boolean("0")) => 0 ,null ,undefined 만 false

// 사용자에게 화씨온도를 받아서 섭씨온도로 변환시킨 후 화면에 섭씨 온도를 출력
// 섭씨=(화씨 - 32) /1.8
// 단, 소수점도 출력되어야함

const userHot = Number(prompt("당신의 체온을 입력해주세요"));
const cel = ((userHot - 32) / 1.8).toFixed(1);

document.write(`화씨 ${userHot}도는 섭씨${cel}도 입니다`);