// 8. Event

//이벤트란?
//사용자가 웹,앱에 들어와서 액션(행위)를 하는 것 = 무엇인가를 실행시켜주는 것

//정적:동적 *이벤트

//=>click / load / submit

// 이벤트앞에 on 붙으면 이벤트핸들러가 된다.

// 변수 뒤에 붙을 수 있는 것 = 메소드 , 속성

// Refactoring : Cleancode => 특정 요소에 과한 기능이 포함되었을 경우, 해당 요소 버그 발생 시, 디버깅 하기가 매우 비효율적.
// =>미연 방지하기 위해서 각각의 독립적인 기능을 따로 분리시켜놓는 작업 => 향후 코드를 재가공&유지.보수

// 모든 이벤트에 해당하진 않지만 거의 대부분 웹에서 이벤트가 발생하게 되면 이벤트 객체라는 것이 생성이 됨.
// 이벤트 객체 => 이벤트 발생시에 윈도우에 생성됨 => 함수의 매개변수(참조변수)에 넣을 수 있음 (event , e)

//1.웹 문서 로딩 이벤트 종류

//load   문서의 로딩이 종료되었을 때 실행 = document를 다 불러오면 이벤트를 실행시켜라!
// window.onload = alert("안녕하세요");
// scroll  문서 화면이 스크롤되었을 때
// error  문서가 정확하게 로드되지 않았을때 = node.js에서 많이 사용한다
// resize  문서화면의 크기가 바뀌었을때
// about  문서가 완전히 로딩되기 전에 불러오기를 멈추었을 때
// unload  문서를 벗어나게 되었을 때

// 2.마우스 이벤트 종류

// const btn = document.querySelector("button");

// click  사용자가 html요소를 클릭 했을때 실행
// const btnFnc = () => {
//   document.body.style.backgroundColor = "green";
// };

// btn.onclick = btnFnc;

// dbcilck  사용자가 html요소를 더블클릭했을때
// mousemove  사용자가 특정 요소에서 마우스 포인터를 움직일 때
// mouseover 마우스를 특정 요소 위로 옮길 때
// mouseout 마우스가 특정 요소를 벗어날 때
// mousedown  사용자가 특정 요소에서 마우스 버튼을 눌렀을 때 = Drag & Drop이벤트
// mouseup 특정 요소 위에 올려놀은 마우스 버튼에서 손을 땔 때 = Drag & Drop이벤트

// 3.키보드 이벤트 종류

// const result = document.querySelector("#result");

//keydown  키를 누르는 순간=어떤 키를 눌렀는가
// document.body.onkeydown = (e) => {
// result.innerText = e.key;
//   result.innerText = `
//   code:${e.code}
//   key:${e.key}
//   `
// };
// keyup 키에서 손을 땔 때
// keypress  키를 눌렀을 때(*점차 사용하지 않는 추세) = 키를 눌렀는가 = 한국어를 인식하지 못한다

// 4.폼 이벤트 종류
// submit  [submit]속성값을 갖고있는 버튼을 클릭했을 때
// change  목록이나 체크 등의 상태변화가 발생했을 때 = select > option변경되었을때 가장 많이 쓰임
// focus  폼 요소에 마우스를 포커스했을 때
// blur  폼 요소에 포커스를 해제했을 때
// reset 폼 안에 있는 내용이 리셋되었을 때



// 이벤트 처리 방법

// >인라인 스크립트 :html문서에 직접 이벤트를 정의
// >외부 스크립트:이벤트 핸들러
// const button = document.querySelector("button");

// button.onclick = () => {
//   document.body.style.backgroundColor = "yellowgreen";
// }

// >외부 스크립트:이벤트 리스너
// button.addEventListener("click", () => { //=>addEventListener를 많이 사용하는 이유 = 콜백함수(함수 속 함수)
//   document.body.style.backgroundColor = "red";
// });

// const form = document.querySelector("form");
// const button = document.querySelector("input[type='submit']");

// form.addEventListener("submit", () => {

// })

// button.addEventListener("click", (e) => {
//   const result = document.querySelector(".result");
//   const input = document.querySelector("input[type='text']");
//   e.preventDefault();
//   const word = input.value;
//   const count = word.length;
//   result.innerText = `${word},${count}`;

//   if (count >= 10) {
//     alert("어서오시게");
//   } else {
//     alert("아이디10자이상");
//   }
// });

//5.event 객체 프로퍼티 & 메서드

//프로퍼티
// charCode  keypress이벤트가 발생했을 때 어떤 키를 눌렀는지 *유니코드 값으로 반환
// clientX  이벤트가 발생한 가로 위치값 반환
// clientY  이벤트가 발생한 세로 위치값 반환
// pageX  현재 작업중인 html 전체문서를 기준으로 이벤트가 발생한 가로 위치 반환
// pageY  현재 작업중인 html 전체문서를 기준으로 이벤트가 발생한 세로 위치 반환
// screenX  현재 화면을 기준으로 이벤트가 발생한 가로 위치 반환
// screenY  현재 화면을 기준으로 이벤트가 발생한 세로 위치 반환
// target  이벤트가 발생한 대상
// altKey  이벤트가 발생했을 때 alt를 클릭하고 있었는지의 여부를 확인하고 ture/false값으로 반환
// shiftKey  이벤트가 발생했을 때 shift를 클릭하고 있었는지의 여부를 확인하고 ture/false값으로 반환
// code  키보드 이벤트가 발생했을 때, 어떤키를 입력했는지 확인하고자 할때(키의 코드값 반환)
// key  키보드 이벤트가 발생했을 때, 어떤 키를 입력했는지 확인하고자 할때 
//메서드
// preventDefault  기본적으로 탑제되어있는 기능을 무력화하거나 취소시키고자 할 때

// const box = document.querySelector("#box");
// box.addEventListener("click", (e) => {
//   alert(`이벤트 발생 위치 : ${e.pageX} , ${e.pageY}`);
// });

document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code:${e.code},
  key:${e.key}
  `;
});