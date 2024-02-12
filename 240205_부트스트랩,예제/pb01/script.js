// $(".testimonial-pic img").click(function () {
//   $(this).addClass("active");
//   $(thid).siblings().removeClass("active");
//   $(".testimonial .content").removeClass("active");
//   $("#" + $(this).attr("data-alt")).addClass("active");
// });

const pics = document.querySelectorAll(".testimonial-pic img");
const contents = document.querySelectorAll(".testimonial .content");
pics.forEach((pic) => {
  pic.addEventListener("cilck", function () {
    function siblings(t) {
      const children = t.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }

    siblings(this);
    this.classList.add("active");

    contents.forEach(function (content) {
      content.classList.remove("active)");
    });
    const targetContentId = this.ger
    attribute("data-alt");
    const targetContent = document.querySelector('#${targetContenID)');
    if (targetContent) {
      targetContent.classList.add("active")
    }
  });
});