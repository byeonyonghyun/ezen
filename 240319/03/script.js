const contentAll = document.querySelectorAll(".contentWrap img");
const [shadow, date, human, textImg] = contentAll;

let x = 0;
let targetX = 0;

const speed = 0.1;



window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});



const loop = () => {
  targetX += (x - targetX) * speed
  shadow.style.transform = `translateX(${targetX / 18}px)`;
  human.style.transform = `translateX(${-targetX / 15}px)`;
  date.style.transform = `translateX(${targetX / 25}px)`;
  textImg.style.transform = `translateX(${-targetX / 8}px)`;

  window.requestAnimationFrame(loop);
}





loop();