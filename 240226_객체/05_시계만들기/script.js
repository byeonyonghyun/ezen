const today = new Date();

const displayDate = document.querySelector("#today");
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();

let day2 = "";

switch (day1) {
  case 0:
    day2 = "일";
    break;
  case 1:
    day2 = "월";
    break;
  case 2:
    day2 = "화";
    break;
  case 3:
    day2 = "수";
    break;
  case 4:
    day2 = "목";
    break;
  case 5:
    day2 = "금";
    break;
  case 6:
    day2 = "토";
    break;
}


displayDate.innerHTML = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">(${day2})</span>`;

const displayTime = document.querySelector("#clock");

const clock = () => {
  let current = new Date();
  let hour = current.getHours();
  let minute = current.getMinutes();
  let second = current.getSeconds();

  let period = "AM";
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
    period = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  displayTime.innerText = `${period} ${hour} : ${minute} : ${second}`;
}

setInterval(clock, 1000);