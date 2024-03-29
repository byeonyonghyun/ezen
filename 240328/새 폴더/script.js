new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
  navigation:true
});

const navBtn = document.querySelector("#nav_icon");
const nav = document.querySelector(".nav");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  nav.classList.toggle("active")
});
