import React, { useCallback, useState } from 'react';
import './TodoInsert.css'; 
import {MdAdd} from 'react-icons/md';

const TodoInsert = ({onInsert}) => {
  const [value,setValue] = useState('');
  // useCallback함수는 state, props가 바뀌어서 렌더링을 다시하게 되는 상황을 관리
  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    }, [] // []안의 변수가 mount 될 때만 실행
  );
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); // input에 value={value} 등록해야함
      e.preventDefault();
    }, [onInsert,value]
  );


  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input placeholder='할 일을 입력하세요.' onChange={onChange} value={value}/> {/* 리액트 특성상 state로 관리하고 트래킹을 하기 위해서 onChange로 작업 -> React Dveloper Tools*/}
      <button type='submit'><MdAdd /></button>
    </form>
  );
};

export default TodoInsert;