//사용자가 이메일주소를 입력하면, result 공간에 사용자의 이메일 정보를 출력.
//단, 이메일 주소 중 "@"앞의 내용 세자리까지만 출력. 4번째자리 부터는 ...으로 표기.
// ex) abcd@naver.com => abc..@naver.com

const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#userEmail").value;
  let domain = "";

  if (email !== "") {
    domain = email.split("@")[1];
    email = email.split("@")[0];
    email = email.substring(0, 3);
  }
  result.innerText = `${email}***@${domain}`;
})