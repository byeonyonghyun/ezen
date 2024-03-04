// const season = [];
// season[0] = "spring";
// season[1] = "summer";
// console.log(season);

// const fruits = new Array("사과", "복숭아", "포도");

// fruits[4] = "배"

// fruits[0] = "오랜지";

//배열의 전체 아이템 갯수 : length

//code룰 따로 작성해서 UI로 구현하고자하는 거의 대부분의 값들 => 복수!!
//1개 이상의 이미지 혹은 동영상

//배열을 사용하는 정말 중요한 이유 중 하나 !!! => 반복문!!
//for문 / for of문 / forEach 문

const colors = ["red", "green", "blue", "white", "black"];

// colors.forEach((color) => {
//   console.log(color);
// })

// colors.forEach((color, index) => {
// console.log(`colors[${index}] : ${color}`);
// })

colors.forEach((color, index, array) => {
  console.log(`[${array}][${index}]:${color}`);
});