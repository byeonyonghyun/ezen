import './App.css';
import Viewer from './components/Viewer';
import { useState } from 'react';  // 상태가 변화하는 값이 있다? => 무조건 useState()!

function App() {
  const [number, setNumber] = useState(0);
  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div className="App">
      <h2>{number}</h2>
      <Viewer number={number} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}

export default App;


// state 변수: component가 가지고 있는 상태값
// - 상태값을 변경하려면 useState(): React Hooks 중 하나
// - form 태그 요소 안에있는 기본적인 input태그 || textarea || select && option
// - 상태의 변화값을 check하고, state변수값이 업데이트가 될수 있도록 제어

// 왜 컴포넌트를 만들어서 작업하나요?
// 1) React 장점: JS를 활용 작업 => 300줄 / 문제 = bug
// 300줄 달하는 JS문장 하나씩 검증 => debuging
// 2) 하나의 component안에 존재하는 state 변수값이 업데이트가 되는 순간 => 리렌더링

//리액트 훅 : useRef();
// -기존 JS, DOM을 활용해서 html문서를 컨트롤하는 기능


// useState(): component의 state 변수값을 컨트롤 해주는 훅 함수
// useRef(): 특정 요소의 DOM을 컨트롤 해주는 훅 함수
// useEffect(): Component의 "생애주기(Life cycle)"를 컨트롤해주는 훅 함수
// -사람 : 생애주기
// -아기 -> 유아기 -> 청소년기 -> 성인 -> 노인 -> 사망
// component의 생애주시
// mount -> update -> unmount

// 1) 의존성 배열이 업데이트 || 변경되면 useEffect() 안에 callback 실행
// => 외부 API => state => 웹 브라우저 처음 켜졌을 때에는 data x
// => 사용자가 지역 매장정보 버튼 / select
// => 의존성 배열에 복수의 state값을 적용한 경우, 그 중 1개만 업데이트가 되어도 useEffect() 실행

// 2) 만약, 의존성 배열을 설정하지 않은 경우, 컴포넌트가 랜더링 될 때마다 콜백함수를 실행

// 3) 만약, 의존성 배열에 빈 배열을 적용하는 경우, 컴포넌트가 최초 mount가 되는 시점에만 딱 한 번 실행