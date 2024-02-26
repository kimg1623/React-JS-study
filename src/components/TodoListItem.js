import React from 'react';
import './TodoListItem.css'; // css스타일 지정
import {MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox} from 'react-icons/md';

const TodoListItem = ({todo,onRemove,onToggle}) => {
  const {id, text, checked} = todo; // {id:1, text:'일정1', checked:true}
  return (
    <div className='TodoListItem'>
      <div className={checked ? 'checkbox checked':'checkbox'} onClick={() => onToggle(id)}>
        {
          checked ? <MdCheckBox />: <MdCheckBoxOutlineBlank />
        }
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div> 
    </div>
  );
};

export default React.memo(TodoListItem);


