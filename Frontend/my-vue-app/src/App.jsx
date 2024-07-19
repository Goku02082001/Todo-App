import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/tasks" element={token ? <TaskList /> : <Login setToken={setToken} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
