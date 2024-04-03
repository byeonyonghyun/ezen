import React from "react"

const Viewer = ({number}) => {
  console.log("viewer component update")
  return (
  // <div>{number % 2 === 0 ? <h3>짝수 입니다.</h3> : <h3>홀수 입니다.</h3>}</div>
  <div>Viewer</div>
  )
}

export default Viewer

// React는 rendering이 매우 중요한 개념
// => html을 포함한 기타 웹 브라우저 parsing 할 수 있는 문서를 웹 브라우저가 화면에 출력해주는 기능 = rendering

// 0) component가 mount가 되는 순간 무조건 최초 rendering이 발생
// 1) component의 state값이 변경되면 무조건 rendering이 발생함
// 2) 부모 component로부터 받아오는 props의 값이 변경되면 무조건 rendering 발생
// 3) 부모 component가 rendering이 되면, 무조건 자식 component도 rendering이 됨