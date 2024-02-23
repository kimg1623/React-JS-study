import React from 'react';
import './TodoListItem.css'; // css스타일 지정
import {MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md';

const TodoListItem = ({todo}) => {
  return (
    <div className='TodoListItem'>
      <div className='checkbox'>
        <MdCheckBoxOutlineBlank />
        <div className='text'>{todo.text}</div>
      </div>
      <div className='remove'>
        <MdRemoveCircleOutline />
      </div> 
    </div>
  );
};

export default TodoListItem;