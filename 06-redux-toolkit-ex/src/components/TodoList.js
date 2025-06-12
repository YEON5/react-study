import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../features/todoSlice';

function TodoList() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div>
      <h2>Todo 앱</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="할 일을 입력하세요"/>
      <button onClick={handleAdd}>추가</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.title} {todo.completed ? "✅" : "❌"}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;