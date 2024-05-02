// const number1 = Number(prompt("100이하의 첫번째자연수 를 적으세요"));
// const number2 = Number(prompt("100이하의 두번째자연수 를 적으세요"));
// const number3 = Number(prompt("100이하의 세번째자연수 를 적으세요"));

// const result = (a, b, c) => {
//   if(a < b && a < c){
//     return a;
//   } else if (b < a && b < c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// if(number1 <= 100 && number2 <= 100 && number3 <= 100) {
//   alert(`${result(number1, number2, number3)}`);
// } else {
//   alert("100이하만 입력해주세요!")
// }

//삼각형이 완성되기 위한 전제조건 = 가장 긴 변의 길이가 나머지 두변의 길이의 합보다 작아야한다

// const a = Number(prompt("1번"));
// const b = Number(prompt("2번"));
// const c = Number(prompt("3번"));

// const tri = (a, b, c) => {
//   let answer = "YES";
//   let max;
//   let total = a + b + c;

//   if(a > b){
//     max = a ;
//   } else {
//     max = b ;
//   }
//   if(c > max) max = c;
//   if(total - max <= max) answer = "NO"

//   return answer;
// }
// console.log(
//   tri(a, b, c)
// ); 
  

// const student = Number(prompt("학생수"));

// const das = (a) => {
//   let pen = a / 12;
//   if(a % 12 > 0){
//     return pen + 1;
//   } else {
//     return pen;
//   }
// }
// console.log(Math.floor(das(student)));

const n = Number(prompt("20이하의 자연수"));

const sum = (n) => {
  if(n < 20) {
    let total = 0;
    for(let i = 0; i <= n; i++){
      total += i;
    }
    return total;
  } else {
    alert("20보다 작은 수를 입력하세요")
  }
}

console.log(sum(n));