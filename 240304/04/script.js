// //배열에 사용할 수 있는 메서드
// //consat() : 두 개 이상의 배열을 추가해서 하나의 배열로 만들고자 할 때

// // const vegitable = ["양상추", "토마토", "피클"];
// // // const meat = ["불고기"];
// // const cheese = ["모짜렐라", "슈레드"];

// // const meatBurger = vegitable.concat(meat, "빵");
// // const meatBurger = meat.concat(vegitable, "빵");
// // console.log(meatBurger);

// // const cheeseBurger = [...vegitable, ...cheese];
// // console.log(cheeseBurger);


// // //배열 정렬
// // const numbers = [6, 9, 3, 21, 18];
// // numbers.reverse();//입력되어진 배열값을 거꾸로 나열함
// // console.log(numbers);

// // const values = [5, 20, 3, 11, 4, 15];
// // // values.sort();// sort함수는 작은 숫자부터 좌측정렬
// // // console.log(values);

// // values.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// //   if (a === b) return 0;
// // })

// // values.sort(() => {
// //   return a - b;
// //   console.log(values)
// // })

// // 배열안에 아이템을 추가 및 삭제하는 메서드

// // const animals = ["lion", "bear", "bird"];
// // console.log(animals);

// // animals.pop();
// // console.log(animals);

// // animals.push("tiger");
// // console.log(animals);



// //splice() //잘라내기
// // const fruits = ["apple", "pear", "banana", "orange", "pineapple"];
// // console.log(fruits);

// // fruits.shift();
// // console.log(fruits);

// //splice함수 && slice함수 => 매개변수를 1개만 받았을 경우, 해당 매개변수의 인덱스 값부터 끝까지의 값을 추출해온다.

// //splice함수 : 원본 배열 데이터에도 영향을 미친다.
// //slice 함수 : 원본 배영 데이터에 영향을 미치치 않는다


// // map() / reduce() 
// //map() : 원본 배열을 그대로 둔 상태에서 특정 연산 작업을 한 결과값을 배열로 만들고 싶을때

// // const numbers = [1, 2, 3, 4, 5];
// // // const newNumber = numbers.map((number) => {
// // //   return number * 2;
// // // });
// // const newNumber = numbers.map((number), index => {
// //   return index + number * 3;
// // });
// // console.log(newNumber);

// const scores = [90, 35, 64, 88, 45, 92];
// const highScores = scores.filter((score) => {
//   return score >= 85;
// })

// console.log(highScores);

// const highScores2 = scores.filter((score, index) => {

// })

// // reduce:누산기
// const number = [1, , 2, 3, 4, 5];
// const result = number.reduce((total, current) => {
//   return total + current;
// }, 0);

// console.log(result);

// 1.map
// 2.filter
// 3.sort
// 4.reduce