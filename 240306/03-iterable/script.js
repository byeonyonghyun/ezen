//iterable object = 이터러블 객체
//iterable = 순차적인 , 순서대로 무언가를 처리할 수 있는
//순서대로 무언가의 연산작업을 처리할 수 있는 객체
//"순서" => index값처럼 순번이 할당되어 있는 값
//일반객체 => 이터러블 객체
//문자열, 배열, map, Set in자바스크립트

//태생이 이터러블 객체가 아닌 요소들은 반복문을 사용할 수 있는 기회가 완전 박탈
//태생이 이터러블 객체가 아니더라도 이 요소들을 이터러블한 속성으로 변경시켜서 반복문을 사용할 수 있도록 하기 위한 목적
//이터러블 객체가 어떤 속성과 특징이 있는지 알아야 함.

//iteramle object 특징
//1) for...of반복문 사용 가능
//2) ...전개연산자 구문 사용 가능
//3) 구조 분해 할당

// const hi = "hello";

// for (let ch of hi) {
//   console.log(ch);
// }

// const chArray = [...hi];
// console.log(chArray);

// const [ch1, ch2] = hi;
// console.log(ch1, ch2);




const arr = [1,2,3,4,5];
//이터러블 하지 않은 객체 및  기타요소들을 어떻게 이터러블하게 만들 수 있을까? 해결책을 찾기 위해서 이터러블 객체의 특징을 확인

const arr01 = new Array();

//배열이 이터러블한 객체가 되기 위해서 클래스 함수에는 심볼이 존재. Symbol.iterable=> 심볼이 존재해서 이터러블 객체가 될 수 있다.

//이터러블 하지 않은객체 => 이터러블 객체로 변환
//제너레이터 함수사용
//객체를 생성하는 것 자체 => 생성자함수 혹은 class를 활용해서 프로토타입 => 인스턴트화

const fnc = () => {
  console.log("1");
  console.log("2");
  console.log("3");
}
 fnc():

 //제너레이터 함수
 function* gen() {
  yield 1;
  yield 2;
  yield 3;
 }

//  g1 => 제너레이터 객체
 let g1 = gen();

 for (let)
