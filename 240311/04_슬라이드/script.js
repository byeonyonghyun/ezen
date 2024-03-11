const sliderWrapper = document.querySelector("#container");
const sliderContainer = document.querySelector(".slider-container");
const sliders = document.querySelectorAll(".slider");

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");


const sliderCount = sliders.length;
for (let i = 0; i < sliderCount; i++) {
  sliders[i].style.left = `${i * 100}%`;
}

let topHeight = 0;

const calculateTallestSlide = () => {
  for (let i = 0; i < sliderCount; i++) {
    if (sliders[i].offsetHeight > topHeight) {
      topHeight = sliders[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();

let currentIndex = 0;

const updateNav = () => {
  if (currentIndex === 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }

  if (currentIndex === sliderCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
}


const gotoSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  updateNav();
}

navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    gotoSlide(currentIndex - 1);
  } else {
    gotoSlide(sliderCount - 1);
  }
});

navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < sliderCount - 1) {
    gotoSlide(currentIndex + 1);
  } else {
    gotoSlide(0);
  }
});

gotoSlide(0);