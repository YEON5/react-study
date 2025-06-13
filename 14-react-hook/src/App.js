import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import FocusInput from './components/FocusInput';
import ResponsiveText from './components/ResponsiveText';
import ResponsiveComponent from './components/ResponsiveComponent';

function App() {
  return (
    <div>
      <UserList />
      <FocusInput />
      <ResponsiveText />
      <ResponsiveComponent />
    </div>
  );
}

export default App;


