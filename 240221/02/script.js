// 상세설명 버튼을 누르면 아래 본문이 사라짐

// 버튼을 찾는다
// 본문 찾아오기
// 버튼 클릭시 본문 display none

const viewBtn = document.querySelector("#view");
const detail = document.querySelector("#detail");
viewBtn.onclick = () => {
  detail.classList.toggle("hidden")
}