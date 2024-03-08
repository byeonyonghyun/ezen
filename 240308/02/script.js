//input태그를 통해 사용자에게 어떤 숫자를 받을 것 입니다
//시용자가 숫자를 입력한 후 입력 버튼을 클릭하게 되면, 다음과 같은 조건에 따라서 아래와 같은 결과가 출력
// 만약 10보다 큰숫자를 입력했가면 알림창를 통해서 "10보다 작은 숫자를 입력하세요!"라는 메세지가 출력되게 할 것이고
// 만약, 10보다 잗은숫자를 입력했다면 result라는 공간에 해당 숫자가 출력되도록 할 것입니다.
// 단, 해당 코드를 어제 배운 ter, catch, finally문을 활용해서 코드를 작성해보세요
//try문: 실행문을 작성하는 공간
//catch함수 : 만약 에러가 발생하게되면 에러메세지를 출력시켜줄 수 있는 함수
// finally문 : 상단 실행문이 정상 혹은 에러와 관계없이 무조건 실행되는 공간



const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const userNumber = Number(document.querySelector("#user-number").value);
//   if (userNumber === null) {
//     alert("숫자를 입력하세요!")
//   } else {
//     if (userNumber >= 10) {
//       alert("10보다 작은 수를 입력하세요")
//     } else {
//       result.innerText = userNumber;
//     }
//   }
// })


const resultNumber = (e) => {
  e.preventDefault();
  let userNumber = Number(document.querySelector("#user-number").value);
  try {
    if (userNumber === "" || isNaN(userNumber)) {
      throw "숫자를 입력하세요!";
    }
    if (userNumber >= 10) {
      alert("10보다 작은 수를 입력하세요")
    } else if (userNumber < 10) {
      document.querySelector("#result").innerText = userNumber;
    }
  } catch (err) {
    alert(err);
  } finally {
    userNumber = "";
  }
};

form.addEventListener("submit", resultNumber);