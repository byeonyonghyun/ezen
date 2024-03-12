const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const updateWidth = () => {
  const newWidth = `${(slideWidth + slideMargin) * slideCount - slideMargin}px`
  slides.style.width = newWidth;
};
updateWidth();

const setInitialPos = () => [];
setInitialPos();