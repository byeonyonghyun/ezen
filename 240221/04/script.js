// 오픈 버튼 불러오기
// 클로즈 버튼 불러오기
// 오픈 버튼 클릭시 컨테이너 요소 display:flex로 변경
// 클로즈 버튼 클릭시 컨테이너 요소 display : none으로 변rud


const openbtn = document.querySelector(".open");
const closebtn = document.querySelector(".close");
const contant = document.querySelector(".contauner");

openbtn.onclick = () => {
  contant.classList.toggle("active");
}