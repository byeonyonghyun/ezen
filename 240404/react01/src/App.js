import { useState, useRef } from 'react';

import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList'

const mockTodo = [
  {
    id: 0,
    isDone:false,
    content: "React.js 공부하기",
    createDate: new Date().getTime()
  },
  {
    id: 1,
    isDone:false,
    content: "3분할로 등 조지기",
    createDate: new Date().getTime()
  },
  {
    id: 2,
    isDone:false,
    content: "8시간 풀 수면⚰",
    createDate: new Date().getTime()
  }
]

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone:false,
      content,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => 
        it.id === targetId ? {...it, isDone: !it.isDone} : it 
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
};

export default App;


// CRUD프로세스
// -Create: 컨텐츠 생성
// -Read  : 컨텐츠 확인
// -Update: 컨텐츠 갱신
// -Delete: 컨텐츠 삭제
