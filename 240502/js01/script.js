const titles = document.querySelectorAll(".title");
const contents = document.querySelectorAll(".content");
contents[0].style.display = "block";
console.log(contents);

titles.forEach((title) => {
  title.addEventListener("click", function() {
    contents.forEach((content) => {
      content.style.display = "none";
    })
    titles.forEach((otherTitle) => {
      otherTitle.classList.remove("active");
    })
    const content = this.nextElementSibling;
    this.classList.toggle("active");
    content.style.display = content.style.display === "block" ? "none" : "block";
    })
  })