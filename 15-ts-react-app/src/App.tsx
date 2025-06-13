import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <div style={{ padding: '2rem' }}>
        <h1>👤 사용자 목록</h1>
        <UserCard name="홍길동" age={25} email="hong@example.com" />
        <UserCard name="김철수" age={30} email="kim@example.com" />
      </div>

      <InputForm />
    </div>
  );
}

export default App;
