// 외부에서 data받아와서 웹브라우저 출력
// js동기처리 방식 언어

//비동기 처리 방식 사용
// 1) CallBack
// setInterval()
// setTimeout()
// setClear()
// 콜백지옥 =>콜백 =>콜백=> 콜백 (지양하자)

// 2) Promise 객체
// promise = 약속
// 계획한 실행이 예정대로 진행되었을 때, 무언가를 추가로 실행하겠다!! 라는 약속!!

// const likePizza = false;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문합니다.");
//   } else {
//     reject("피자를 주문하지 않습니다.");
//   }
// });

// pizza.then((result) => console.log(result)).catch((error) => console.log(error));//then = 참일 때, catch = 거짓일 때

//외부에서 데이터를 가져올 때, 예외조항 처리
//에러가 발생했을 때, 미리 에러메세지를 커스텀!!
//try / catch / finally

const likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다.");
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});

//메서드 체이닝 기법 (method chaining)
//1개의 객체 뒤에 연달아서 복수의 메서드 함수를 붙여서 실행시키도록 설계한 코딩 기법
pizza.then((result) => console.log(result)).catch((error) => console.log(error));