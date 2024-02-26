import React, { useCallback, useRef, useState, useSyncExternalStore } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function createBulkTodos(){
  const array = [];
  for (let index = 0; index < 2500; index++){
    array.push({id:index+1, text:'할 일'+(index+1), checked:false});
  }
  return array;
}

const App = () => {
  const [todos,setTodos] = useState(createBulkTodos); // 딜레이가 조금 발생
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const nextTodo = {id:nextId.current, text:text, checked:false};
      setTodos(todos.concat(nextTodo));
      nextId.current = nextId.current+1;
    },[] // 기존 코드에서 [todos] -> [] 빈배열로 넘기기, 성능향상
  ); 

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(
        todo => todo.id === id ? {...todo,checked:!todo.checked} : todo
      ));
    },[todos] // 빈배열로 만들면 다중 선택이 안됨.
  );

  // TodoListItem 에서 remove버튼을 클릭하면 id를 전달해 줌
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id != id)); // todos 안에서 filter(찾겠다) todo.id와 id가 다르면 todo남길것!
    }, [] // 기존 코드에서 [todos] -> [] 빈배열로 넘기기, 성능향상
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