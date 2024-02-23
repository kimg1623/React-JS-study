import React from 'react';
import './TodoTemplate.css'; // css스타일 지정

const TodoTemplate = ({children}) => { // children => <TodoTemplate>children</TodoTemplate
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>일정 관리</div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default TodoTemplate;