// if(조건식 => true) {
// 실행문이 실행됨
// }

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }

// const userInput = prompt("당신의 이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하셨어요!")
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

// const score = Number(prompt("프로그램 점수:"));

//예외 조항 처리 : 대전제를 미리 깔고 간다(ex-취소버튼을 눌렀을때)
// 중첩 사용이 가능하다! = 반복해서 사용할 수 있음
// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("퇴학!");
//   }
// }

// 자료구조 & 알고리즘



// 조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지, 홀수인지 확인한 이후 알림창을 활용해서
// 사용자에세 짝수 혹은 홀수입니다.라는 메세지를 출력해주세요

// 1.사용자에게 숫자를 받는다
// 2.조건식을 통해 짝수인지 확인한다
// 3.출력

// 가장 좋은 변수명(식별자) = 명시적,직관적
// 1) 사용하면 안되는 변수명->예약어:이미 ex)JS & Window 사용중인 고유명사 x
// 2) 변수명 작명 가장 앞에 사용할 수 있는 것들 : $ , _ , 영문자 가능(숫자/특수문자 절대 불가)
// 3) 변수명 반드시 대. 소문자 구분

// camel표기법 = 서로 다른 단어의 첫글자를 대문자로 UserPick
// sneak표기법 = 서로 다른 단어의 사이에 _ user_pick
// 헝가리안표기법 = 첫글자만 대문자 Userpdick

// const x = prompt("숫자를 입력해주세요!");

// if (x != null) {
//   alert("취소했어요!")
//   const reset_num = Number(x);
//   if (reset_num % 2 === 0) {
//     alert("짝수입니다!");
//   } else {
//     alert("홀수입니다")
//   }
// }

// if (x != null) {
//   const reset_num = Number(x);
//   reset_num % 2 === 0 ? alert("짝수") : alert("홀수");
// } else {
//   alert("취소");
// }

// 사용자에게 1~12까지의 숫자 하나를 받은 후 전달받은 숫자에 따라서 알림메세지 출력
// 9~11 : 독서의 계절, 가을.
// 6~8 : 여행의 계절, 여름.
// 3~5 : 햇살 가득, 봄.
// 12~2 : 스키의 계절, 겨울.

// let x = prompt("1~12중 하나를 골라주세요");

// if (x != null) {
//   x = Number(x);
//   if (x < 13) {
//     if (x >= 9 && x <= 11) {
//       alert("독서의 계절, 가을.");
//     } else if (x >= 6 && x <= 8) {
//       alert("여행의 계절, 여름.")
//     } else if (x >= 3 && x <= 5) {
//       alert("햇살 가득, 봄.")
//     } else if (x >= 1 && x <= 12) {
//       alert("스키의 계절, 겨울.")
//     }
//   } else {
//     alert("1~12중에서 골라주세요!")
//   } 13
// } else {
//   alert("취소했어요!")
// }

// 사용자에게 id, pw 받고 다음과 같으면 "반갑습니다 어서오세요"
// id만 맞으면 비번확인
// 둘다 틀리면 아이디확인
// id:ezenit / pw:1234

// const id = prompt("아이디");
// const pw = prompt("비번");

// if (id != null && pw != null) {
//   if (id === "ezenit") {
//     if (pw === "1234") {
//       alert("환영합니다");
//     } else {
//       alert("비밀번호를 확인해주세요");
//     }
//   } else {
//     alert("아이디를 확인해주세요");
//   }
// } else {
//   alert("취소");
// }

// const id = "ezenit";
// const pw = "1234";

// const userId = prompt("아이디를 입력하세요");

// if (userId === id) {
//   const userPw = prompt("비밀번호를 입력하세요");
//   if (userPw === pw) {
//     alert(`${userId}님 환영합니다.`)
//   } else {
//     alert("비밀번호가 일치하지 않습니다.");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다.");
//   location.reload();
// }

// switch(조건식 => 참) {
//   case 값 : 실행문
//   break;
// }

// const subject = prompt("신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS");

// if (subject !== null) {
//   switch(subject) {
//     case "1" : alert("HTML");
//     break;
//     case "2" : alert("CSS");
//     break;
//     case "3" : alert("JS");
//     break;
//     default : alert("잘못입력했어요");
//   }
// }else {
//     alert("취소하셨습니다");
//   }

// 사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요!
// 쇼핑몰 : 쿠팡 / G마켓/11ST/마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군 안에 존재한다면 , prompt창에 "확인"버튼을 클릭하는 순간 이동
// window.location.href=쿠팡

// const shop = prompt("즐겨찾는 쇼핑몰은 어딘가요?");

// if (shop !== null) {
//   switch (shop) {
//     case "쿠팡": location.href = "https://www.coupang.com/"
//       break;
//     case "G마켓": location.href = "https://www.gmarket.co.kr/"
//       break;
//     case "11ST": location.href = "http://www.11st.co.kr/"
//       break;
//     case "마켓컬리": location.href = "https://www.kurly.com/"
//       break;
//     default: alert("다시 생각해보시죠");
//   }
// } else {
//   alert("cancel");
// }

// for(초기값; 조건식; 증감문){
//   실행문
// }

// const students = ["park", "kim", "lee", "kang"];

// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}`);
// }

// 배열.forEach(function(배열안에 있는 각각의 아이템){
// 실행문
// });

// students.forEach(function (student) {
//   document.write(`${student},`);
// });

// for문 활용해서 구구단 출력하기

// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + "[구구단 " + a + "단] " + "</h2>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(a + "x" + b + "=" + (a * b));
//     document.write("<br>");
//   };
// }

// 중첩 for문 활용해서 5행 5열 테이블!!

// let num = 1;
// let t = "<table border=1>";
// for (let i = 1; i <= 5; i++) {
//   t += "<tr>";
//   for (let k = 1; k <= 5; k++) {
//     t += "<td>" + num + "</td>";
//   }
//   t += "</tr>";
// }
// t += "</table>";
// document.write(t);

// for in => 객체 전용
// for of => 배열 전용

// const gitBook = {
//   title: "깃허브",
//   pubData: "202402",
//   pages: 272,
//   finished: true,
// };

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]} <br>`);
// }

// const students = ["park", "kim", "lee", "kang"];

// for (stubat of students) {
//   document.write(`${students}`);
// }
// while(조건식 => true) {
//   실행문
// }

// const stars = Number(prompt("별점을 매겨주세요"));
// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

// do {
//   document.write("*");
//   stars--;
// } while (stars > 0);

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     document.write("<p class='red'>" + i + "</p>");
//   }
//   else if (i % 7 == 0 && i % 5 != 0) {
//     document.write("<p class='blue'>" + i + "</p>");
//   }
//   else {
//     document.write("<p class='green'>" + i + "</p>");
//   }
// }

//break문예시

// for (let i = 1; 1 <= 10; i++) {
//   if (1 === 6) {
//     break;
//   } else {
//     document.write(i, "<br>");
//   }
// }

// continue문 예시

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br>");
//   }
// } 

// 사용자에게 숫자 하나 받기
// 해당 숫자가 소수인지 식별하고, 소수라면 00은 소수입니다
// 단락회로평가 : 특정값이 논리형

// const x = Number(prompt("숫자를 입력하세요"));

// if (x === 2) {
//   isPrime =true;
// }else {
//   for (let i = 2; i< x; i++ ) {
//     if(x% i===0){
//       isPrime = false;
//       break;
//     }else {
//       isPrime =true;
//    }
//   }
// }


// 웹 브라우저 화면에 아래 보이는배열 아이템중 10이상되는 숫자만 출력
// const arr = [1, 3, 5, 7, 8, 11, 13, 15, 17, 19];
// 배열에 있는 아이템을 먼저 가져온다

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}`);
//   }
// }

// 사용자에게 1보다 큰수 받기 / 짝수들만 모두 더해서 출력

const x = Number(prompt("숫자 하나만 적어요"));
let sum = 0;

for (let i = 1; i <= x; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    sum += i;
    document.write(`${sum}<br>`);
  }
}