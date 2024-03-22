const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audios = frame.querySelectorAll("audio")
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

// 개별 article의 각도 정의
const deg = 45;
//인덱스 값을 정의
let i = 0;
const len = lists.length - 1;

let num = 0;

let active = 0;


const activation = (active, lists) => {
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[active].classList.add("on");
};

const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on")
  })
}


prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
});


lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(./musicimg/member${i + 1}.jpg)`;
  i++;

  const play = list.querySelector(".play");
  const pause = list.querySelector(".pause");
  const load = list.querySelector(".load");
  play.addEventListener("click", (e) => {
    pic.classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    pic.classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });
  load.addEventListener("click", (e) => {
    pic.classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
});

