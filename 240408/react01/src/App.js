import './App.css';
import { useState } from 'react';
import Section from'./components/Section';

// 가위바위보에 대한 데이터 관리
const choice = {
  scissors: {
    name:"scissors",
    img:"https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp",
  },
  rock: {
    name:"rock",
    img:"https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg"
  },
  paper: {
    name:"paper",
    img:"https://i.namu.wiki/i/HZUMLJivyd1QwdPZfAO8OB2kRCdjbZCnS2o5m5mKCtj9ZSZtULRv9eSLQtbMLoVyRzyw0H8XSGIeb8QIVude1A.webp"
  },
}

function App() {
  const [userSelect, setUserSelect] = useState("");
  const [computerSelect, setComputerSelect] = useState("");
  const [result, setresult] = useState("");

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem =Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  }
const judgement = (user, computer) => {
  if( user.name === computer.name) {
    return "tie";
  } else if (user.name === "scissors") {
    return 
  } else if (user.name === "rock") {
    return 
  } else if (user.name === "paper") {
    return 
  }
}

  const play = (item) => {
    setUserSelect(choice[item]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setresult(judgement(choice[item], computerChoice));
  };
  return (
    <div className='App'>
    <div className='container'>
      <h1>가위바위보</h1>
      <div className='main'>
        <Section title="you" item={userSelect} result={result}/>
        <Section title="com" item={computerSelect} result={result}/>
      </div>
      <div className='buttons'>
        <button onClick={() => play("scissors")}>✌</button>
        <button onClick={() => play("rock")}>✊</button>
        <button onClick={() => play("paper")}>✋</button>
      </div>
    </div>
    </div>
  );
}

export default App;

// JavaScript를 활용한 가위 바위 보 게임

// 1.사용자(=나)가 가위바위보 중 하나를 선택한다
// > 나의 의지로 직접 선택
// > 이벤트(웹 브라우저 화면 => 버튼// 클릭이벤트)
// > 상태변화 = 업데이트 : useState

// 2. 컴퓨터가 가위바위보 중 하나를 선택
// > 랜덤형식으로 선택
// > JS / renderToStaticNodeStream() /Math => 0, 1, 2

// 3. 사용자 vs 컴퓨터 중 둘 중에 누가 이기고, 졌는지 판단!!!
// > 사용자 & 커푸터 각각 선택한 값 => 공통된 하나의 값에서 출력.관리
// > 배열

// 4.결론
// -가위 바위 보 게임을 만들기 위해서 자료의 형태 => 배열
// -배열 : 데이터의 순서를 정렬 할 수 있는 장점
// -단점 : 객체처럼 

// UI구성

// 1.버튼
// 2.출력 이미지 (가위 바위 보)X2개 => 내것,컴퓨터(state 값이 업데이트)
// 3.2개의 그룹으로 분리 => 2개의 컴포넌트로 분리
// 4. APP => 2개의 컴포넌츠를 만들고=> props관리