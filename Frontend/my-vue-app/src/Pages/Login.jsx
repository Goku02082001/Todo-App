import  { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      alert('Logged in successfully');
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div style={{marginLeft:"250%" ,marginTop:"-70%",height:'250px', border:'none',width:'250px', borderRadius:'20px',backgroundColor:'#212121'}}>
      <h2  style={{marginTop:'40px', marginLeft:'85px',color:"white"}}>Login</h2>
      <form onSubmit={handleLogin}>
        <input style={{marginLeft:'30px'}}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input style={{marginLeft:'30px'}}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" style={{marginLeft:'80px',marginTop:'30px', backgroundColor:'blue',color:'white'}}>Login</button>
      </form>
    </div>
  );
};

export default Login;