//100% = (스크롤이 끝나는ㄴ 마지막 좌표값 / 스크롤이 가능한 영역까지 포함한 전체문서 - 현재 보여지고 있는 웹브라우저 화면 영역 ) * 100

const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");

const precent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
}

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;
  const per = precent(scrollNum, documentHeight) + "%";

  h1.innerText = per
  progressBar.style.width = `${per}`;
})

