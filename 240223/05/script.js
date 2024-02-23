// const heading = document.querySelector("h1");
// heading.addEventListener("click", () => {
//   heading.remove();
// })

// const heading = document.querySelector("h1");
// const parentH1 = heading.parentNode;

// const items = document.querySelectorAll("li");
// console.log(items);
// for (let item of items) { 
//   item.addEventListener("click", () => {
//     item.parentNode.removeChild(item);
//   })
// }


const buttons = document.querySelectorAll("p span");
const products = document.querySelectorAll("p");
for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove();
  })
}
