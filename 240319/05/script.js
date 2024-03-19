const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const depthWrap = document.querySelector(".depthWrap");
const octo = document.querySelector(".octo");
console.log(progressBar)

const precent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
}

const deepSea = () => {
  const scrollNum = window.scrollY;
  const span = depthWrap.querySelector("span");
  span.innerTexe == scrollNum;

  const documentHeight = document.body.scrollHeight = window.innerHeight;
  const per = precent(scrollNum, documentHeight);
  progressBar.style.width = per + "%";

}

window.addEventListener("Scroll", deepSea);