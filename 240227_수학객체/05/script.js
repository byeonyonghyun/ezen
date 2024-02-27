const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
}


const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};
const heandler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = ""
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.array.forEach((todo) => {
      addItem(todo);
    });
  } else {
    heandler();
  }

  todos = userTodos;
};

init();

form.addEventListener("submit", heandler);

// localStorage.setItem("Hello", "world")
// const myData = localStorage.getItem("Hello");
// console.log(myData);

// React => JS 준수한 프로그래밍 코드 단계
//   => CRUD
//     => create read update delet
// -셀렉토 로고 컬러 / 디자인 , 스타일 가이드
// -컬러...
// -회원가입 / 멤버십 / 정기적 업데이트 / 탈퇴admin

//웹 UI/서버 언어