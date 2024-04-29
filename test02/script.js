const img = document.querySelector(".slider-img");
const imgs = [
  "slide-01.jpg",
  "slide-02.jpg",
  "slide-03.jpg",
]
img.style.backgroundImage = `url(./img/${imgs[0]})`;


const btns = document.querySelectorAll("span");

let i = 0;
  const autoSlide = () => {
    i++;
    reset();
    if(i >= imgs.length) {
      i=0;
    }
    btns[i].classList.add("active");
    img.style.backgroundImage = `url(./img/${imgs[i]})`;
  }
  setInterval(autoSlide, 3000);


const reset = () => {
  btns.forEach((btn, idx) => {
    btns[idx].classList.remove("active");
  })
}

const imgChange = (e) => {
  const target = Number(e.target.dataset.index);
  reset();
  for (let i = 0; i < btns.length; i++) {
    if (target === i) {
      btns[i].classList.add("active");
      img.style.backgroundImage = `url(./img/${imgs[i]})`;
    }
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", imgChange);
})





