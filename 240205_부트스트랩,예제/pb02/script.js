const btns = document.querySelectorAll(".btn li");
const contents = document.querySelectorAll(".tabs div");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    function sibling(e) {
      const children = e.parenElement.children;
      for (let i = 0; i < children.lenght; i++) {
        children[i].classList.remove("active");
      }
    }
    sibling(this);
    this.classList.add("active");

    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const targetContentId = this.getAttribute("data-alt");
    const targetContent = document.querySelector('#${targetContentId}');
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});