const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자를 주문합니다.")
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 3000)
  })
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑 완료");
    }, 1000)
  }
}

pizza()
  .then(step1)
  .then((result) => step2(result))
  .then((result) => step3(result));
  .then(() => {
    console.log("피자가 준비되었습니다.")
  });

//19. promise 객체
// - new Promise() => 인스턴스 타입의 Promise 함수 생성
// 콜백함수로 resilve /reject 함수 사용가능
//resolve()실행 => 매개변수값을 then() 메서드 함수 사용
//reject()실행 => 매개변수값을 catch() 메서드 함수 사용
// finally문 => 선택적으로 사용할 수 있는 문
