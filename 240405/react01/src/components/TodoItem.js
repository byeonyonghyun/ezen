import React, {useContext} from 'react';
import { TodoDispatchContext } from '../App';
import './TodoItem.css'

REACT_APP_API_KEY = "0fada5c8500a6c81585969f37f0e6edf";

const API_KEY = REACT_APP_API_KEY;

const TodoItem = ({id, isDone, content, createDate}) => {
  const {onUpdate, onDelete} = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  }
  const onClickDelete = () => {
    onDelete(id);
  }
  return (
    <div className='TodoItem'>
      <div className='checkbox_col'>
        <input onChange={onChangeCheckbox} checked={isDone} type='checkbox' />
      </div>
      <div className='title_col'>{content}</div>
      <div className='date_col'>{new Date(createDate).toLocaleDateString()}</div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  )
}

export default React.memo(TodoItem);