const staggerWrap = document.querySelector("ul");
const fragment = document.createDocumentFragment();

const grid = [9, 5];
const [col, row] = grid;
const allElem = col * row ;

for(let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}

staggerWrap.appendChild(fragment);

// anime({
//   targets: "ul li",
//   easing: "linear",
//   duration: 1000,
//   scale: anime.stagger([0.5, 1], {
//     grid: [50, 50],
//     from:"center",
//     axis: "z",
//   }),
// });

const tl = anime.timeline({
  targets: "ul li",
  delay: anime.stagger(200, {grid: [9,5],
  form: " center", axis: "z"}),
  loop: true,
  direction: "alternate",
})

tl.add({
  scale:[{ value:0.1, easing:"easeOutSine",
  duration: 500 },
  { value:1, easing:"easeOutQuad",
  duration: 1200 }],
})