document.write("<h1>컴퓨터와 나의 가위, 바위, 보! 맞추기 게임</h1>");
//컴퓨터:random=>1,2,3중에서 나오게 만들자!
const game = prompt("가위, 바위, 보 중 선택하세요!", "ex)가위");
let gameNum = 0;

switch (game) { //조건이 여러가지일 경우에는 switch가 적절하다
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("가위바위보도 못하다니 멍청하구나!");
    location.reload;
}

const com = Math.ceil(Math.random() * 3); // random은 1을 넘지못한다=>3을 곱했을때 나올 수 가장 큰 정수 = 2
document.write(`<img src="./images/math_img_${com}.jpg"></img>`);

if (gameNum === com) {
  document.write("비겼습니다!")
} else {
  document.write("흠...")
}
console.log(gameNum, com);

