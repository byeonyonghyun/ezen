// const str = "hello";
// const greeting = "pneumonoultramicroscopicsilicovolcanoconiosis"
// const long = "taumatawhakatangihangakoauauotamateaturipukakapikimaungahoro nukupokaiwhenuakitanatahu"
// console.log(greeting.length);
// console.log(long.charAt(5));

// const string = prompt("문자열을 입력하세요");
// const letter = prompt("어떤 문자를 셀까요?");

// const counting = (str, ch) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }

//   }
//   return count;
// }

// const result = counting(string, letter);
// document.write(`${string}에는 ${letter}이(가) ${result}번 사용되었네요`)

// 12.문자열 & 배열
// -charAt(): 매개변수의 인덱스값을 가지고 있는 문자열을 찾아올 때
// (문자열[인덱스 값]으로도 사용가능!)

const str1 = "taumatawhakatangihangakoauauotamateaturipukakapikimaungahoro nukupokaiwhenuakitanatahu";
console.log(str1.indexOf("nuk"));
// console.log(str1.indexOf("hu", firstIndex + 1));

const str2 = "Hello, everyone";
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("hello"));
console.log(str2.startsWith("He"));
console.log(str2.startsWith("Hello, ev"));
console.log(str2.startsWith("el", 1));
console.log(str2.startsWith("o", 4));
// -indexOf() : 매개변수 문자열을 처음 찾았을 때의 인덱스 값을 찾아올때
// -startsWith() : 문자열 전체에서 처음 시작하는

console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("Everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("one"));
console.log(str2.endsWith("lo, everyone"));

// includes(): 문자열 안에 매개변수의 문자가 있으면 true / 아니면 false

const str3 = "ab cd ef";
const str3_1 = " ab cd ef ";
console.log(str3);
console.log(str3_1);
console.log(str3_1.trim());
console.log(str3_1.trimStart());
console.log(str3_1.trimEnd());

// -trim() / trimStart() / trimEnd():문자열의 앞 / 뒤 / 전체에서 빈문자열을 찾아서 없애주는 기능

let str4 = "Good Morning";
console.log(str4.toUpperCase());//대문자
console.log(str4.toLowerCase());//소문자


console.log(str4.substring(5, 8));
console.log(str4.substring(5));

// -substring() : 매개변수는 1개 혹은 2개입력 가능
// >매개변수 1개 : 해당 매개변수의 인덱스 값부터 문자열의 끝까지 모두 찾아오는 기능
// >매개변수 2개: 첫번째 매개변수부터 두번째 매개변수의 바로 앞까지 문자열을 찾아오는 기능
//slice와 차이점 : 음수값을 인식하지 못함 => 음수값을 0으로 치환해버린다.

console.log(str4.slice(0, 4));
console.log(str4.slice(0));
console.log(str4.slice(-5, 11));

// -slice() : 기본적으로 substring()과 동일 => 음수 매개변수 지정 가능


const str5 = "Hello, everyone";
const array1 = str5.split(" ");
const array2 = str5.split("");
console.log(array1);
console.log(array2);