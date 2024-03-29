// anime({
//   targets: "ul.menu li",
//   translateX: 250,
//   easing: "innear",
//   loop: true,
//   direction: "alternate",
//   delay: anime.stagger(100),
//   endDelay: anime.stagger(100),
// });

// let tl = anime.timeline({
//   easing: "linear",
//   duration: 1000,
// });

// tl.add({
//   targets: ".circle1",
//   translateX:500,
// }).add({
//   targets:".circle1",
//   translateY: 500,
// }).add({
//   targets: ".circle1",
//   translateX:0,
// }).add({
//   targets:".circle1",
//   translateY: 0,
// }).add({
//   targets:".circle2",
//   scale: 1.5,
//   borderRadius: 0,
//   rotate: 360,
// });


anime({
  targets: "ul li",
  translateY: (el, i)=> {
    if(i % 2 == 0){
      return 100;
    } else {
      return -400;
    }
  },
  easing: "linear",
  duration: 1500,
})