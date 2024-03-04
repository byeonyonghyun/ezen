// // //생성자함수 => 프로토타입 => 인스턴스
// // //Object(__proto__) => Book(prototype) => book1

// // const Book = function (title, pages, done) {
// //   this.title = title;
// //   this.pages = pages;
// //   this.done - done;

// //   // finish() {
// //   //   let str = "";
// //   //   this.done === false ? str = "읽는 중" : str = "완독";
// //   // }
// // };

// // Book.prototype.finish = function () {
// //   this.done === false ? str = "읽는 중" : str = "완독";
// //   return str;
// // };

// // const book1 = new Book("HTML5", 380, false);
// // // console.log(book1.finish());

// // function Book(title, price) {
// //   this.title = title;
// //   this.price = price;
// // }

// // Book.prototype.buy = function () {
// //   console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`)
// // };

// // const book1 = new Book("a", 1000);
// // console.log(book1.buy());

// // //위에서 만든 생성자함수와 비슷하면서 기능이 추가된 함수를 또 만들고 싶다면?

// // function Textbook(title, price, major) {
// //   Book.call(this, title, price);
// //   this.major = major;
// // }
// // Textbook.prototype.buyTextBook = function () {
// //   console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다`)
// // };
// // Object.setPrototypeOf(Textbook.prototype, Book.prototype);

// // const book2 = new Textbook("타입스크립트", 50000, "컴퓨터공학");
// // book2.buyTextBook();
// // book2.buy();

// class Book {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }

//   buy() {
//     console.log(`${this.title}을 ${this.price}에 구매 했어요`)
//   }
// }

// const book1 = new Book("자바스크립트", 9000);
// book1.buy();

// class Textbook extends Book {
//   constructor(title, price, major) {
//     super(title, price);
//     this.major = major;
//   };

//   buyTextbok() {
//     console.log(`${this.major}전공서적 ${this.title}을 구매 했어요`);
//   };
// }

// const book2 = new Textbook("타입스크립트", 19000, "컴퓨터공학");
// book2.buyTextbok();
// book2.buy();

// -객체속성반복
// >Object.key()
// >Object.values()
// >Object.entries()
// -생성자함수 & class 상속
// >Prototype 속성
// >__proto__ 속성
// >생성자함수:Object.setPrototypeOf(상속받고자 하는 함수, 상속가능한 함수)
// >class : extends키워드를 활용해서 상속