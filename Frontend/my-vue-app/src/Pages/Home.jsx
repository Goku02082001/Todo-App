import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="container">
      <h1>Welcome to Task Manager</h1>
      <h3>Manage your tasks.</h3>
      <button onClick={handleLoginRedirect}>Login</button>
      <button onClick={handleRegisterRedirect}>Register</button>
    </div>
  );
};

export default Home;
