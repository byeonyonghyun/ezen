//1.저자와 제목 가져오기
// input > .value
// 2.이벤트 작동을 위한 저장하기 버튼 정의
// e.preventDefault()
// 2.찾아온 값을 출력하는 이벤트 함수
// addEventListenenr
// 3.출력할 공간 정의
//  querySelector
// 4.삭제하기버튼 정의
// createElement, appendChild
// 6. 삭제하기 버튼이 복수로 생성 => 반복문을 사용해서 클릭한 삭제버튼 찾아오기
// 5. 삭제버튼 클릭시, 삭제시키는 이벤트 함수
// parentNode, remove()


const form = document.querySelector("form");
const bookList = document.querySelector("#booklist");

form.addEventListener("submit", (e) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  e.preventDefault();
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = "삭제";
  li.innerText = title.value + author.value;
  li.appendChild(span);
  bookList.appendChild(li);
  title.value = "";
  author.value = "";


  const deleteBtns = document.querySelectorAll("#booklist span");
  for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
});
