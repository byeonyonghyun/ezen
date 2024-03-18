const form = document.querySelector("form");

let from, to = undefined;

let todoList = [],
  doingList = [],
  doneList = [];

const lists = {
  todo: todoList,
  doing: doingList,
  done: doneList,
};
const saveList = () => {

}

const dragstart = (e) => {
  from = e.target.parentElement.id;
}

const dragover = (e) => {
  const { id: targetId } = e.target;
  const listIds = Object.keys(lists);

  if (listIds.includes(targetId)) {
    to = targetId
  }
}

const dragend = (e) => {
  const { id } = e.target;

  e.target.remove();
  lists[from] = lists[from].filter((todo) => {
    if (todo.id !== id) {
      return todo;
    } else {
      createElement(to, todo);
    }
  });

  saveList(form);
  saveList(to);
};


const createElement = (listId, todo) => {
  const list = document.querySelector(`#${listId}`);
  const item = document.createElement("div");

  item.id = todo.id;
  item.innerText = todo.text;
  item.className = "item";
  item.draggable = true;

  item.addEventListener("draggable", dragstart);
  item.addEventListener("draggable", dragend);

  list.appendChild(item);
  lists[listId].push(todo);
}

const createTodo = (e) => {
  e.preventDefault();

  const input = document.querySelector("#text");

  const id = Date.now();

  const newTodo = {
    id,
    text: input.value,
  }

  createElement("todo", newTodo);
  input.value = "";
  saveList("todo");
}

const loadList = () => {
  const userTodoList = JSON.parse(localStorage.getItem("todo"))
  const userDoingList = JSON.parse(localStorage.getItem("doing"))
  const userDoneList = JSON.parse(localStorage.getItem("done"))

  if (userTodoList) {
    userTodoList.forEach((todo) => {


    });
  }
}





form.addEventListener("submit", createTodo);

//처음 데이터가 생성되면 Todo
//드래그 & 드롭기능
//-todo : 객체들을 담을 수 있어야함
//-doing : 객체를 담을 수 있어야함
//-done : 객체를 담을 수 있어야함

//웹 브라우저 안에서 드래그 & 드롭 기능을 사용하려면 반드시 draggable 속성 값이 존재 => true!!