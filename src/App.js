import React, { useCallback, useRef, useState, useSyncExternalStore } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import userEvent from '../node_modules/@testing-library/user-event/dist/index';

const App = () => {
  const [todos,setTodos] = useState([
    {id:1, text:'일정1', checked:true},
    {id:2, text:'일정2', checked:false},
    {id:3, text:'일정3', checked:true}
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const nextTodo = {id:nextId.current, text:text, checked:false};
      setTodos(todos.concat(nextTodo));
      nextId.current = nextId.current+1;
    },[todos]
  );
  const onToggle = useCallback(
    id => {
      setTodos(todos.map(
        todo => todo.id === id ? {...todo,checked:!todo.checked} : todo
      ));
    },[todos]
  );

  // TodoListItem 에서 remove버튼을 클릭하면 id를 전달해 줌
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id != id)); // todos 안에서 filter(찾겠다) todo.id와 id가 다르면 todo남길것!
    }, [todos]
  );
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;