import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import LoginRedirect from './pages/LoginRedirect';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<h2>🔒 로그인 페이지</h2>} />
          <Route path="/private" element={<LoginRedirect />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
