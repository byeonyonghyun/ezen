const container = document.querySelector("#container") as HTMLParagraphElement;

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

let text: string;
let hours2: number;

if(hours < 12) {
  text = "오전";
  hours2 = hours - 12;
} else {
  text = "오후";
  hours2 = hours;
}

container.innerText = `${text} ${hours}시 ${minutes}분 입니다.`;