import './App.css';
import Header from "./components/Header";
import Body from './components/Body';
import Footer from './components/Footer';
import Buttons from './components/buttons';

const ChildComp = () => {
  return <div>Child Component</div>
}


function App() {
  const BodyProps = {
    name: "DDD",
    location: "서울시",
    // favorList: ["Pasta", "chicken", "pizza"]
  }
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps}/>
      <Buttons/>
      <Footer>
        <ChildComp />
      </Footer>
    </div>
  );
}

export default App;

//props로 데이터를 받아올때 구조분해할당을 통해 바로 변수값을 찾아올 수 있음
// (이때 반드시 객체내 key네이밍과 동일한 변수명 설정)
// 심지어 props는 컴포넌트로 전송이 가능함
// (단, 컴포넌트 전송할 때에는 key값이 children으로 자동설정)
