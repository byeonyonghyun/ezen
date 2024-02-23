//1.버튼을 누른다
//2.nav요소가 왼쪽으로 나온다.
//3.버튼도 그만큼 움직인다.

const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");


btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});