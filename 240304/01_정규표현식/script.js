//정규표현식 = Regular Expression
//왜 사용하는가? 어떤 특정 패턴을 정의하고자 할 때, 그리고 그 패턴의 결과값을 도출하고자 할 때
//구성 => 패턴[플레그]
//패턴 => 알파벳 3개로 구성된 문자열
//플래그(*옵션) => 대문자.소문자.대소문자

// let regexp = /\d{3}/;

// let regexp = new RegExp(/\d{3}/);
// console.log(regexp.test("123"));//왜 숫자는 3개 이상이어도 트루지?
// console.log(regexp.test("Hello"));


//정규표현식은 대소문자를 가린다.

// let str = "ES2024 is powerful";
// console.log(str.match(/ES6/));//null
// str.replace(/ES2024/, "ES6");

// console.log(/es/.test(str));
// console.log(/es/i/*대소문자 관계없이 찾아와라*/.test(str));

// console.log(str.match(/ES\d\d\d\d/));

// let hello = "Hello, everyone.";
// console.log(/^H/.test(hello));
// console.log(/one.$/.test(hello));



//컴퓨터 16진수
//0~9,a~f
// let testStr = "ES2024";

// console.log(testStr.match(/[^0-9]/g));//g:모든 숫자를 다 찾아와라 ^:부정

// let str = "Oooooooooooooooooops";
// console.log(str.match(/o{2}/));
// console.log(str.match(/o{2,}/));
// console.log(str.match(/o{2,4}/i)); //,:~이상,~이하

//자주 사용하는 정규표현식
//숫자만 찾아오고자 할 때
// /^[0-9]+$/;
// 양의 정수값만 찾아오고자 할 때
// /^[1-9]\d*$/;
// 음의 정수값만 찾아오고자 할 때
// /^\-[1-9]\d*$/;

//숫자와 영문자만 찾아오고자 할 때
/^[a-zA-Z0-9]/
