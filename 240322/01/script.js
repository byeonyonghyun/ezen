// HTML5 이후에 나온 문법
// ES6 문법에서 활용하게 됨!

// -Canvas API => 웹 문서상에 그림을 그리서나 디자인 작업을 하게 도와준다.
// -Localstorge API =>
// -getCurrentLocation API

//Canvas API를 활용해서 웹 브라우저에서 무언가를 그리겠다라고 한다면, 반드시 canvas라는 태그를 활용
//canvas 태그를 사용할 때에는 반드시 사이즈에 대한 정의가 필수!! 하지만 만약 사이즈가 정의가 되지 않았을 시에는 기본값으로 설정(300 * 150px)


//만약 웹 브라우저 전체화면을 canvas화 하고자 한다면 js를 활용해서 window의 객체인 inner를 활용한다.

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx.stroke();






// canvas.width = window.innerWidth
// canvas.height = window.innerHeight


// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
// ctx.arc(200, 100, 50, 0, (Math.PI / 180) * 180, false);
// ctx.fill()


// ctx.strokeStyle = "red";


// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.fillStyle = "rgb(0,200,0)"
// ctx.fill();



// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// // ctx.lineTo(50, 50);
// ctx.stroke();






// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect(10, 10, 50, 100);

// ctx.fillStyle = "rgb(200,0,0)";
// ctx.strokeStyle = " black";

// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "blue";
// ctx.fillRect(50, 50, 120, 100);

// ctx.clearRect(70, 80, 80, 45);





//canvas태그를 활용해서 웹브라우저 문서상에 실제 캔버스를 만들었다면 그 안에 그림을 그릴수있음
//canvas태그안에 그림을 그리려면, 반드시 getContext("2d")함수를 활용해서 객체를 생성해주어야함
//생성된 객체에 사용할 수 있는 다양한 속성 & 함수 존재
// - fillStyle 속성 : 채우기 컬러를 정의
// - fillReac 함수 : 사각형의 도형을 생성

//JS 세계관
//시간 : 1초 / 밀리초 1000
//각도 : 1도 45도 => deg X
//Radian => 라디언,래디언
//1래디언 = PI/180 =180도 = (PI /180) * 180 => (PI * 1)
//2래디언 = 360도 = PI * 2

// const radians = (Math.PI / 180) * 180