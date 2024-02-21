//인풋요소 가져오기
// 등록버튼 가져오기
// 입력값을 받음
// 버튼을 누르면 할일이 추가가됨
// 아래쪽에 할 일 내용표시

// 1.사용자가 입력하는 값을 찾아오기 위해 입력창 정의
// 2.사용자가 클릭할 버튼 정의
// 3.버튼을 클릭했을 때 이벤트에 대한 기능 정의(함수)
// li태그 DOM생성 => 입력창을 통해서 전달받은 값을 ㅣㅑ태그 삽입=>ul태그 자식요소
// 4.사용자가 입력한 값을 출력할 공간에 대한 정의

const todo = document.querySelector("#todo");
const add = document.querySelector("#add");
// document.querySelector("form")=> form태그를 찾아와서 onsubmit이벤트태그를 지정해도 된다.
const list = document.querySelector("ul");

const formFnc = (e) => {
  e.preventDefault();
  if (todo.value !== "") {
    const li = document.createElement("li");//li태그 만들기
    li.innerText = todo.value;//아래에서 value값을 텍스트로 li에 넣기
    list.appendChild(li);
    todo.value = "";//input값 초기화
    const text = todo.value;//value는 이벤트가 작동해야지만 값이 나온다.
  }
};


add.onclick = formFnc;
