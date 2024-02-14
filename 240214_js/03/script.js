//  1. 시용자가 입력한 소비자가를 찾아온다
// 2. 사용자사 입력한 할인률 값을 찾아온다
// 3.사용자가"할인가격계산하기""
//  버튼을 클릭한다면, 이벤트가 작동하게 해준다.
// 4.계산 이벤트를 정의
// 5."할인된 가격 출력" 공간에 계산된 값을 풀력시켜준다.

const originPrice = document.querySelector("#price");
const rate = document.querySelector("#rate");
const btn = document.querySelector("#button");
const showResult = document.querySelector("#showResult");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const originPrice = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  const savedPrise = originPrice * (rate / 100);
  const resultPrice = originPrice - savedPrise;
  showResult.innerHTML = `${resultPrice}`;
});