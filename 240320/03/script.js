const imgAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imgAll.length;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  if (scrollNum < 2013) {
    imgAll.forEach((item, index) => {
      item.style.transform = `perspective(400px) translate3d(0, 0, ${scrollNum / (2 * (totalNum - index))}px)`
    })
  }
})
