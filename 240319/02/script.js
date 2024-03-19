const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

// 마우스의 좌표값
let x = 0, y = 0;

// 마우스 이동전 좌표값
let targetX = 0, targetY = 0;


//아이콘의 속도
const speed = 0.03;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  h1.innerText = `x: ${x} y : ${y}`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  box.style.top = `${targetY}px`;
  box.style.left = `${targetX}px`;
  // box.style.transform = `translate(${targetX}px, ${targetY}px)`

  window.requestAnimationFrame(loop);
}
loop();