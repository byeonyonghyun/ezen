//9.DOM심화
// -createElement()
// -createTextNode()
// -appendchild()
// -createAtrribute()
// -setAtrributeNode()
// -parentNode
// -removeChild()

const today = new Date();
const hrs = today.getHours();

const container = document.querySelector("#containner");
const newImg = document.createElement("img");

newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/affternoon.jpg";

container.appendChild(newImg);
