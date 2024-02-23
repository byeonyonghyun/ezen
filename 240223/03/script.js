// 9.DOM 심화

// const newP = document.createElement("p");
// const textNode = document.createTextNode("Typescript");
// newP.appendChild(textNode); //자식요소에 추가
// document.body.appendChild(newP);

//주문하기 버튼을 누르면 책 제목이 나오게 하기
//1. 버튼을 누른다
//2. 책 제목이 하단에 출력

// const order = document.querySelector("#order");
// const info = document.querySelector("#orderinfo")
// const h2 = document.querySelector("h2");
// console.log(order, info, h2);

// order.addEventListener("click", () => {
//   const newP = document.createElement("p");
//   const textNode = document.createTextNode(h2.innerText);
//   newP.appendChild(textNode);
//   newP.style.color = "blue";
//   newP.style.fontSize = "1.2rem";
//   info.appendChild(newP);
// }, { once: true });

const newImg = document.createElement("img");
const srcNode = document.createAttribute("src");
srcNode.value =
  "https://pbs.twimg.com/media/EWIuv28XgAMLuRU.jpg";
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);