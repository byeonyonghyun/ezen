import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css"

const TodoEditor = () => {
  const {onCreate} = useContext(TodoDispatchContext)
  const [content,setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }
  const onSubmit = () => {
    if(!content) {
      inputRef.current.focus();
      return;
    } else {
      onCreate(content);
      setContent("");
    }
  };
  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSubmit();                        
    }
  }
  return (
    <div className='TodoEditor'>
      <h4>새로운 todo 작성하기📝</h4>
      <div className='editor_wrapper'>
        <input ref={inputRef} value={content} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder='새로운 Todo...' />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

export default TodoEditor;