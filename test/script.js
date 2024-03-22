const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll("nav a");

btns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    slides[index].style.transform = `translateX(-${index * 100}vw)`
    slides[index].classList.toggle("active");
  })
})