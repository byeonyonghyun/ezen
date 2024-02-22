//이벤트 전파
//>이벤트 버블링
//

const elements = document.querySelectorAll("*");//모든 태그 요소 불러오기
for (let element of elements) {//elemens 안에 element라고 정의
  element.addEventListener("click", (e) => {
    console.log(`e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`);
  });
}