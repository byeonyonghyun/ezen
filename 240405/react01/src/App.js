import React ,{ useReducer, useRef , useCallback, useMemo } from 'react';
import './App.css';
// import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList'
import { type } from '@testing-library/user-event/dist/type';


// context
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext(); 

//state function
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE" : {
      return [action.newItem, ...state];
    }
    case "UPDATE" : {
      return state.map((it) =>it.id === action.targetId ? {...it, isDone: !it.isDone} : it);
    }
    case "DELETE" : {
      return state.filter((it) => it.id !== action.targetId);
    }
    default : 
      return state;

  }
};

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
  const [todo, dispatch] = useReducer(reducer,mockTodo);
  const idRef = useRef(3);


  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createDate: new Date().getTime(),
      }
    })
    idRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    })
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    })
  }, []);

  const memoizedDispatches = useMemo(()=>{
    return {onCreate,onUpdate,onDelete};
  }, [])
  return (
    <div className="App">
      <TodoStateContext.Provider value={{todo}}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
      <TodoEditor />
      <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
};

export default App;


// CRUD프로세스
// -Create: 컨텐츠 생성
// -Read  : 컨텐츠 확인
// -Update: 컨텐츠 갱신
// -Delete: 컨텐츠 삭제


//useReducer = 누산기

// useState() : 컴포넌트 바깥에서 실행 해본 적 없음 => 1번만 실행되고 무한 반복
// => setCount함수 컴포넌트 바깥으로 나가게 되면 컴포넌트가 리랜더링 되는 순간 count값을 최초의 초기값으로 reset

// * => wildcard selector(전체 선택자)


// 리엑트 최적화
// 1) useMemo()
// 메모이제이션을 하소자 하는 함수를 콜백함수로 사용, 두번째 매개변수로 의존성 배열
// 불필요한 함수 재호출 방지를 하고자 할 때 

//2) React.memo(리렌더링을 방지하고자하는 컴포넌트)
//  불필요한 컴포넌트 리렌더링을 방지하고자 할 때

// 컴포넌트 렌더링 3대 포인트
// -state 상태값 변화
// -props 값 변화
// -부모 컴포넌트 렌더링 => 자식 렌더링

// 원시타입자료: 문자열, 숫자, 불리언 
// 참조타입자료: 객체기반의 자료=> 객체, 배열, 함수

// 함수 => class / constructure => 프로토타입 객체 => 인스턴스 객체
// (부모 프로토타입 설정, 객체 키&메서드) 함수 => 객체기반 자료
//  변수 < 원본객체/ 2th변수 = 복사/ 수정

// 데이터효율
// Props Drilling 문제
// Context: 목차 => 맥락

// 데이터를 공급하는 root컴포넌트에서는 React.createContext() 활용해서 객체 컴포넌트를 생성
// 생성된 객체 컴포넌트에서 .Provider라는 속성을 사용해야지만 데이터를 공급할 수 있는 환경설정 가능

// 이떄, root 컴포넌트에서 공급받은 데이터중 자식 및 손자 컴포넌트에서 
// 전달하고자하는 데이터는 value라는 key를 활용해서 정의하면됨

// 이제 데이터를 공급 받아야하는 컴포넌트에서 준비
// react 라이브러리에서 useContext 훅을 찾아와서
// 해당 훅 함수의 반환값을 특정 변수에 할당
// (이때, 해당 훅 함수의 매개변수는 부모요소에서 정의했던 context api 적용)