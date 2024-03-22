const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.font = "italic 60px serif";
// ctx.fillText("Javascrpit", 50, 70);

// ctx.font = "bold 60px sans-serif";
// ctx.fillText("Javascrpit", 50, 150);

let img = new Image();
img.onload = () => {
  // ctx.drawImage(img, 0, 0, 300, 200);
};

img.src = "./cat.jpg";

//이미지를 잘라낸다는 개념
//어느 지점에서부터 이미지를 잘라낼것인자, 좌표값
//해당 좌표값으로부터 얼만큼 떨어진 지점인지
//해다 좌표값을 기준으로 w / h 값을 어떻게 되는지
//잘라낸 이미지를 어떤 w / h 값을 출력