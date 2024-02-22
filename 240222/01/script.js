// 8. Event

//이벤트란?
//사용자가 웹,앱에 들어와서 액션(행위)를 하는 것 = 무엇인가를 실행시켜주는 것

//정적:동적 *이벤트

//=>click / load / submit

// 이벤트앞에 on 붙으면 이벤트핸들러가 된다.

// 변수 뒤에 붙을 수 있는 것 = 메소드 , 속성

// Refactoring : Cleancode => 특정 요소에 과한 기능이 포함되었을 경우, 해당 요소 버그 발생 시, 디버깅 하기가 매우 비효율적.
// =>미연 방지하기 위해서 각각의 독립적인 기능을 따로 분리시켜놓는 작업 => 향후 코드를 재가공&유지.보수

//1.웹 문서 로딩 이벤트 종류

//load   문서의 로딩이 종료되었을 때 실행 = document를 다 불러오면 이벤트를 실행시켜라!
// window.onload = alert("안녕하세요");
// scroll  문서 화면이 스크롤되었을 때
// error  문서가 정확하게 로드되지 않았을때 = node.js에서 많이 사용한다
// resize  문서화면의 크기가 바뀌었을때
// about  문서가 완전히 로딩되기 전에 불러오기를 멈추었을 때
// unload  문서를 벗어나게 되었을 때

// 2.마우스 이벤트 종류

const body = document.querySelector("body");
const bth = document.querySelector("button");
console.log(body, btn);

// click  사용자가 html요소를 클릭 했을때 실행
btn.onclick = () => {
  body.style.backgroundColor = "green";
};
// dbcilck  사용자가 html요소를 더블클릭했을때
// mousemove  사용자가 특정 요소에서 마우스 포인터를 움직일 때
// mouseover 마우스를 특정 요소 위로 옮길 때
// mouseout 마우스가 특정 요소를 벗어날 때
// mousedown  사용자가 특정 요소에서 마우스 버튼을 눌렀을 때 = Drag & Drop이벤트
// mouseup 특정 요소 위에 올려놀은 마우스 버튼에서 손을 땔 때 = Drag & Drop이벤트