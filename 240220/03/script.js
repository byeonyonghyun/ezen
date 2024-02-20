const body = document.querySelector("body");
const btn = document.querySelector("#toggle-box button");
const dark = document.querySelector(".dark");
const white = document.querySelector(".white");

btn.onclick = () => {
  body.classList.toggle("clicked");
  dark.classList.toggle("clicked");
  white.classList.toggle("clicked");
  if (!btn.classList.contains("clicked")) {
    btn.classList.add("clicked")
    btn.innerText = "라이트모드로 바꾸기"
  } else {
    btn.classList.remove("clicked")
    btn.innerText = "다크모드로 바꾸기"
  }
}