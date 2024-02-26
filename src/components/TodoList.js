import React, { useCallback, useState } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import {List} from 'react-virtualized';
// 

const TodoList = ({todos,onRemove,onToggle}) => {
  const rowRender = useCallback(({index,key,style}) => {
      const todo = todos[index];
      return(
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      )
    },
  );  
  return (
    <div className='TodoList'>
      {
        todos.map(todo => <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>)
      }
    </div>
  );
};

export default React.memo(TodoList);