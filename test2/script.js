const form = document.querySelector("form");
const dlt = document.querySelector(".delete");
const result = document.querySelector(".result");
let win = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const total = document.querySelector(".total").value;
  const human = document.querySelector(".human").value;
  for (let i = 0; i < human; i++) {
    const num = Math.floor(Math.random() * total) + "번";
    win.push(num);
  }
  result.innerText = `당첨자:${win}`;
})

dlt.addEventListener("click", () => {
  result.innerText = ""
})