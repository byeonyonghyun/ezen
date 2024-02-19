const bodyTag = document.querySelector("#theBody");
const btn = document.querySelector("button");

const colors = ["yellow", "aqua", "purple", "crimson"];

let i = 0;
const changeColor = () => {
  i++;
  if (i >= colors.length) {
    i = 0;
  }
  bodyTag.computedStyleMap.backgroundColor = 
};
btn.addEventListener("click", changeColor);