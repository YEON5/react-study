// props 예제
// import React from "react";
// import User from "./components/User";

// function App() {
//   return (
//     <div className="App">
//       <User name="홍길동" age={28} />
//       <User name="김희동" age={30} />
//     </div>
//   );
// }

// export default App;


// 카운터 예제
// import React from 'react';
// import CounterHooks from './components/CounterHooks';

// function App() {
//   return (
//     <div className="App">      
//       <CounterHooks />
//     </div>
//   );
// }

// export default App;



// state 예제
// import React from "react";
// import User from "./components/User";

// function App() {
//   return (
//     <div className="App">
//       <User name="홍길동" age={28} />
//       <User name="김희동" age={30} />
//     </div>
//   );
// }

// export default App;


// Todolist
import React from 'react';
import TodoList from './components/todoList';

function App() {
  const initialTodos = ["React 공부하기", "운동하기"];

  return (
    <div className="App">
      <TodoList initialTodos={initialTodos} />
    </div>
  );
}

export default App;