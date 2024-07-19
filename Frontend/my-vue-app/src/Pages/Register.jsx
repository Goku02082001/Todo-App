import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', { username, password });
      alert('User registered successfully');
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div  style={{marginLeft:"250%" ,marginTop:"-70%",height:'250px', border:'none',width:'250px', borderRadius:'20px',backgroundColor:'#212121'}}>
      <h2 style={{marginTop:'40px', marginLeft:'65px',color:"white"}}>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit" style={{marginLeft:'60px',marginTop:'30px', backgroundColor:'blue',color:'white'}}>Register</button>
      </form>
    </div>
  );
};

export default Register;