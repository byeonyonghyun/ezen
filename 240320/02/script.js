const imgAll = document.querySelectorAll(".imageWrap .parallaxImage");
const subPageImg = document.querySelector(".subPage .parallaxImage");


let x = 0;
let targerX = 0;
const speed = 0.1;


window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  imgAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${-scrollNum / (5 * index)}px)`
    }
  })
});

window.addEventListener("mouseover", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targerX += (x - targerX) * speed;
  imgAll[4].style.transform = `scale(1.2) translateX(${-targerX / 50}px)`;
  imgAll[5].style.transform = `scale(1.5) translateX(${-targerX / 20}px)`;

  window.requestAnimationFrame(loop);
}

loop();