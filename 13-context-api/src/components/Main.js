import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Main() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '2rem',
      }}
    >
      <h1>현재 테마: {theme}</h1>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default Main;