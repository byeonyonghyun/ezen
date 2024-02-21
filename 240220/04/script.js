// 자바스크립트에서 숫자를 어디까지 사용할 수 있을까?
// 비트: 메모리의 최소단위
// 바이트: 8비트 => 1바이트

// JS: 자료구조 & 알고리즘
// 제어문 : 반복문 => for, forEach, for in, for of

// const testNum = Number.MAX_SAFE_INTEGER;
// const testNum01 = Number.MIN_SAFE_INTEGER;
// console.log(testNum);
// console.log(testNum01);

// if(inputData >= testNum) {
//   alert("error");
// }

// const testNum02 = BigInt(Number.MAX_SAFE_INTEGER);
// const testNum03 = BigInt(Number.MIN_SAFE_INTEGER);

// console.log(testNum02);
// console.log(testNum03);

// const testNum04 = 140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
// console.log(testNum04);

// const testNum05 = 14e-324; => e=10의 제곱근
// console.log(testNum05);

// 7. DOM
// DOM = system
// Document Object Model
// 문서  객체  모델 시스템
// Document = html 문서
// Object = 프로그래밍 모든 전 과정 및 절차 => 객체화

// html문서 안에 태그와 이미지,텍스트 요소를 입력하는 순간 웹 브라우저에서는 "DOM Tree"가 생성된다.

// dom을 구성하는 요소마다를 노드라고 한다



// 명령형 프로그래밍 JS코드 작성
// (지향 / 보편)

// 선언형 프로그래밍 JS코드 작성
// (추세 / 트랜드)

// 살행문 / 표현식문

// 변수 => 자료형
// 숫자형 - Bigint(JS에서 다룰수 있는 가장 큰 정수) 
// 문자열 논리형 심볼 객체 배열 함수

// 자료형 
// - 원시타입 = primitive type
// (숫자 문자 논리)
// - 참조타입 = reference type
// (심볼 객체 배열 함수)

// let num1 = 100;
// let num2 = num1;//같은값!
// num2 = 200;//재할당을 통해 bag2만 값이 달라짐

// console.log(num1);
// console.log(num2);

// let bag1 = { //객체
//   color: "blue",
//   width: 30,
//   height: 50,
// }
// let bag2 = bag1;//같은값!
// bag2.color = "red"; // 재할당시 기존의 bag1도 같이 바뀜...

// console.log(bag1);
// console.log(bag2);


const userName = document.querySelector("#order-name");