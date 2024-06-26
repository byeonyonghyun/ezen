import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [text, setText] = useState("");
  const textRef = useRef();
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if(text.length < 5){
      textRef.current.focus();
    }
    alert(text);
    textRef.current.value = "";
  }
  return (
    <div className="App">
      <input ref={textRef} onChange={handleOnChange} value={text} />
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  );
}

export default App;
