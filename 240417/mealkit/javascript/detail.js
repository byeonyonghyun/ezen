// slider

const goodsSlider = document.querySelector(".goods-detail-slider");

const pics = [
  "goods-detail-01.jpg",
  "goods-detail-02.jpg",
  "goods-detail-03.jpg",
  "goods-detail-04.jpg",
];

goodsSlider.style.backgroundImage = `url(../images/${pics[0]})`;

const pagers= document.querySelectorAll(".pagers span");


let i = 0
const rotation = () => {
  i = (i + 1) % pics.length;
  pagers.forEach((pager, idx) => {
    if (i === idx) {
      pager.classList.add("active");
      goodsSlider.style.backgroundImage = `url(../images/${pics[i]})`;
    } else {
      pager.classList.remove("active");
    }
    pager.addEventListener("click", function() {
      pagers.forEach((pager) => {
        pager.classList.remove("active")
      })
      this.classList.add("active");
      goodsSlider.style.backgroundImage = `url(../images/${pics[idx]})`;
    });
  });
}


setInterval(rotation,3000);

// accordion

const titles = document.querySelectorAll(".goods-accordion .title");

titles.forEach((title) => {
  title.addEventListener("click", function() {
    const nextSibling = this.nextElementSibling;
    titles.forEach((title) => {
      if(title !== this) {
        title.nextElementSibling.style = "none"
      }
    })
    if(nextSibling.style.display === "block") {
      nextSibling.style.display = "none"
    }else {
      nextSibling.style.display = "block";
    }
  });
});
