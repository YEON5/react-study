// import React from 'react';
// import './App.css';

// function App() {
//   const name = "ReactJS";

//   return (
//     <div className="App">
//       <h1>안녕하세요, {name}!</h1>
//       <p>JSX를 이용한 화면 구성입니다.</p>
//     </div>
//   );
// }

// export default App;


// 함수형 컴포넌트js와 클래스형 컴포넌트js 불러오기 예제
// import React from "react";
// import FunctionalComponent from "./FunctionalComponent";
// import ClassComponent from "./ClassComponent";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <FunctionalComponent />
//       <ClassComponent />
//     </div>
//   );
// }

// export default App;


// components 폴더에서 컴포넌트js 불러오기 예제
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;