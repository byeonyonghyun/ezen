//객체 값 반복 실행!!

// const bag = {
//   type: "bagpack",
//   colorL"blue",
//   size: 15,
// };
// for (key in bag) {

// }

const book1 = {
  title: "자바스크립트",
  pages: 648,
  buy: function () {
    console.log("이책을 삼디ㅏ")
  }
}

const keys = Object.keys(book1);
const value = Object.values(book1);
const entries = Object.entries(book1);