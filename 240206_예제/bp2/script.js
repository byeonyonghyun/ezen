//jQuery 구현

// $(".stars .fas").click(function () {
//   $(this).addClass("active");
//   $(this).prevAll().addClass("active");
//   $(this).nextAll().removeClass("active");

//   const num = $(this).index();
//   const starRate = num + 1;
//   $(".print").text(starRate);

//   if (starRate === 1) {
//     $(".print").html("별로에요." + '<img src="./images/star-lv1.png"/>');
//   } else if (starRate === 2) {
//     $(".print").html("보통이에요." + '<img src="./images/star-lv2.png"/>');
//   } else if (starRate === 3) {
//     $(".print").html("그냥 그래요." + '<img src="./images/star-lv3.png"/>');
//   } else if (starRate === 4) {
//     $(".print").html("맘에 들어요!" + '<img src="./images/star-lv4.png"/>');
//   } else if (starRate === 5) {
//     $(".print").html("아주 좋아요!" + '<img src="./images/star-lv5.png"/>');
//   }
// });


// JAVAscript 구현

const stars = document.querySelectorAll(".stars .fas");
const print = document.querySelector(".print");
const imgs = ["./images/star-lv1.png", "./images/star-lv2.png", "./images/star-lv3.png", "./images/star-lv4.png", "./images/star-lv5.png"];

Element, prototype.preiouvElementSiblingALL = function () {
  let sibling = -[];
  let current = this.previousElementSibling;
  while (current! == null)
}

stars.forEach((star) => {
  star.addEventListener("cilck", function () {
    stars.forEach(function (e) {
      e.classLsit.remove("active");
    });
    this.classLsit.add("active");

    const preStars = Array.from(this.preiouvElementSiblingALL())
    preStars.classLsit.add("active");

    const num = Array.from(star).index0F(this);
    const starRate = num + 1;
    it(starRate === 1) {
      print.innerHTML = ' 별로에요' < img src = ${imgs{ 0 } }> '';
    }
  });
});
