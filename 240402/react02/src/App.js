import './App.css';
import { useState } from 'react';


function App() {

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // }
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value)
  // }
  // const onChangeBio = (e) => {
  //   setBio(e.target.value)
  // }


  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state, [e.target.value]
    })
    }


  return(
    <div className='container'>
      <div>
        <input name="name" value={name} placeholder='이름' onChange={handleOnChange}/>
      </div>
      <div>
        <select name="gender" value={gender} onChange={handleOnChange}>
          <option key={""}></option>
          <option key={"W"}>여성</option>
          <option key={"M"}>남성</option>
        </select>
      </div>
      <div>
        <input name="birth" value={birth} type="date" onChange={handleOnChange} />
      </div>
      <div>
        <textarea name="bio" value={bio} onChange={handleOnChange}/>
      </div>
  </div>
    ) 
}

export default App;


//웹 브라우저 상에서 동적인 변화가 발생되었을 때, 감지하고, 업데이트를 시켜줄 수 있어야 => 데이터를
//가공 편집 전송

//1) 사용자가 입력한 값
//2) 사용자가 값을 입력했다는 사실을 인지할 수 있어야 한다.
// => 사용자로 인하여 상태가 업데이트 되었다.
//3) 사용자사 입력한 값을 가져온다

// state => 상태변화의 값을 컨트롤하기 위해서 리액트만의 문법 하나를 더 공부

//useState
//useEffect
//usrContext
//useRef

//meta : 개발자 구현 기능 다양
//react Hooks

// 숫자 하단에 버튼을 생성하고, 그 버튼이 클릭될 때마다 값이 증가하게 만들고 싶다

//state : 컴포넌트 안에 존재하는 어떠한 값
// (단 1개의 컴포넌트 안에는 다양한 복수의 state값 존재 가능)
// state의 상택 값을 변화시킬 수 있는 (제어할 수 있는) 리액트 훅이 존재 => useState훅
// => 함수

//useState 훅 함수 실행 => 배열값을 반환 => 초기값 / 초기값을 변경시킬 수 있는 함수

// 구조분해할당 방식으로 잣어
// useState 리액트 훅을 사용해서 state의 상태값이 변경될 때 마다 웹 브라우저는 해당 컴포넌트를
//다시 렌더링한다 =가시 새로고침해서 불러온다 => 리랜더링