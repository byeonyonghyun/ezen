const items = document.querySelectorAll(".navi li");
const photo = document.querySelector(".photo");
console.log(items);

items.forEach((item) => {
  item.addEventListener("mousover", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgrondImage = `url(${changeImage})`;
  });
  item.addEventListener("mouseleave", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgrondImage = "";
  });
});