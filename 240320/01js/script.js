const mainHeader = document.querySelector(".mainHeader")
const coverWrap = document.querySelector(".coverWrap")
const coverTitle = coverWrap.querySelector(".coverTitle")
const ProgressBar = document.querySelector(".bar")
const dimd = coverWrap.querySelector(".dimd");
const contentWrap = document.querySelector(".contentWrap");

const coverHeight = window.innerHeight;

coverWrap.style.height = coverHeight + "px";
contentWrap.style.marginTop = coverHeight + "px";

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
}

const scrollEvent = () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight;

  console.log(scrollNum)

  const per = percent(scrollNum, documentHeight) + "%"
  ProgressBar.style.width = per;

  if (scrollNum >= coverHeight) {
    mainHeader.classList.add("fixed");
  } else {
    mainHeader.classList.remove("fixed");
    coverTitle.style.top = -scrollNum / 10 + "px";
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    dimd.style.backgroundColor = `rgba(0,0,0,${0.4 + scrollNum / 1000})`
  }
};

window.addEventListener("scroll", scrollEvent);