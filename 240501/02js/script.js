const open = document.querySelector(".open");
const modal = document.querySelector(".modal");

open.addEventListener("click", () => {
  modal.classList.add("active");
});

const close = document.querySelector(".btn-close");

close.addEventListener("click", () => {
  modal.classList.remove("active");
});