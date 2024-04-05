import { useState, useMemo, useContext} from 'react';
import { TodoStateContext } from '../App';
import './TodoList.css'
import TodoItem from './TodoItem';

const TodoList = () => {
  const {todo} = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter(
      (it) => it.content.toLowerCase().includes(search.toLowerCase()));
  }
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone ).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);


  const { totalCount, doneCount, notDoneCount} = analyzeTodo;
  return (
    <div className='TodoList'>
      <div className='list_right'>
      <div className="Header">
        <h3>오늘은 📅</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>
      <div className='count'>
        <h4>Count List</h4>
        <div>✅총 개수:{totalCount}</div>
        <div>✅완료된 할 일:{doneCount}</div>
        <div>✅아직 완료하지 못한 할 일:{notDoneCount}</div>
      </div>
      </div>
      <div className='list'>
      <h4>TodoList 📕</h4>
        <input value={search} className='searchbar'
          placeholder='검색어를 입력하세요'
          onChange={onChangeSearch} />
        <div className='list_wrapper'>
          {getSearchResult().map((it) => (
            <TodoItem key={it.id} {...it}/>
          ))}
        </div>
      </div>
    </div>
  )
}

// TodoList.defaultProps = {
//   todo: [],
// }

export default TodoList;


