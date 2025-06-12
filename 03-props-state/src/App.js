import React from "react";
import User from "./components/User";
import CounterHooks from './components/CounterHooks';
import TodoList from './components/todoList';


function App() {

  // props 예제
  // return (
  //   <div className="App">
  //     <User name="홍길동" age={28} />
  //     <User name="김희동" age={30} />
  //   </div>
  // );


  // state 예제
  // return (
  //   <div className="App">
  //     <User name="홍길동" age={28} />
  //     <User name="김희동" age={30} />
  //   </div>
  // );


  // 카운터 예제
  // return (
  //   <div className="App">      
  //     <CounterHooks />
  //   </div>
  // );


  // Todolist 예제
  const initialTodos = ["React 공부하기", "운동하기"];

  return (
    <div className="App">
      <TodoList initialTodos={initialTodos} />
    </div>
  );
}

export default App;