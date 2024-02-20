// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#profile");
// const img = document.querySelector("#profile img");
// const users = document.querySelectorAll(".user");
// const address = users[1];
// console.log(h1);
// console.log(profile);
// console.log(img);
// console.log(users);
// console.log(address);

// const h1 = document.getElementsByTagName("h1");
// const profile = document.getElementById("profile");
// const users = document.getElementsByClassName("user")

// console.log(h1);
// console.log(profile);
// console.log(users);

// const desc = document.querySelector("#desc");
// desc.innerText = "이름 : 홍길동";

// const descName = desc.innerText;
// console.log(descName);


// const descHtml = desc.innerHTML;
// console.log(descHtml);


// const descContext = desc.textContent;
// console.log(descContext);
// 특정요소를 무시하고 모든 값을 다 찾아옴
// ex)display:none


// 이벤트 핸들러 => 이벤트 작동 실행


// // title.onclick = function () {
// //   title.innerText = "마이 프로필";
// // }

// const title = document.querySelector("h1");

// title.onclick = () => (title.innerText = "마이 프로필");

// const userName = document.querySelector("#desc p");
// userName.onclick = () => userName.innerHTML = "이름 : <b>영심이</b>";

// const pfimg = document.querySelector("#profile img");
// console.log(pfimg);
// pfimg.onclick = () => pfimg.src = "./images/pf2.png";

// querySelector / getElement
// innertext / innerHtml / textCotent
// on이벤트 핸들러

const title = document.querySelector("h1");
const userName = document.querySelectorAll(".user")[0];
const al = document.querySelector(".al");

title.onclick = () => {
  title.style.backgroundColor = "black";
  title.style.color = "#fff";
};

// userName.onclick = () => {
//   userName.classList.add("clicked");
// };

// userName.onclick = () => {
//   userName.classList.remove("clicked");
// };

// const clickedTrue = userName.classList.contains("clicked");

// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//     alert("색이 변경되었어요");
//   } else {
//     userName.classList.remove("clicked");
//     alert("색이 변경되었어요");
//   }
// }


userName.onclick = () => {
  userName.classList.toggle("clicked");
  al.style.right = "100px";
}