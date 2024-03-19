// 마우스의 움직임에 따라서 좌표값이 변경되고 있다는 사실을 확인해야한다.
//window 객체안에 포함되어있는 이벤트


//clientX : 스크롤을 인식하지 않은 상태에서 단순히 웹 브라우저상의 마우스 위치값을 계속 반환
//if, 스크롤이 발생될 수 밖에 없는 페이지안에서 스크롤이 내려가는 상황에서도 나의 x 혹은 y좌표값을 찾아오고 싶다면, 반드시 pageX값을 사용해야 한다.

//현재 마우스가 위치해 있는 마우스의 좌표값
//이동후 마우스가 위치해 있는 마우스의 좌표값
//현재의 좌표값과 이동 후의 좌표값의 속도 비율 => 1:1

const cursorItem = document.querySelector(".cursorItem");
const buttonAll = document.querySelectorAll("a");
const circle = cursorItem.querySelector(".circle")

let x = 0, y = 0;

let targetX = 0, targetY = 0;

const speed = 0.075;

buttonAll.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    circle.style.animation = "beat 0.3s linear infinite"
  })
  button.addEventListener("mouseleave", () => {
    circle.style.animation = "beat 1s linear infinite"
  })
})

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

});

const loop = () => {

  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
}

loop();