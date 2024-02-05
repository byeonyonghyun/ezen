$(".testimonial-pic img").click(function () {
  $(this).addClass("active");
  $(thid).siblings().removeClass("active")
  $(".testimonial .content").removeClass("active")
  $("#" + $(this).attr("data - alt")).addClass("active")
});