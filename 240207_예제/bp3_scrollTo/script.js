$("nav a").click(function (e) {
  $.scrollTo(this.hash || 0, 500);
  e.preventDefault();
});