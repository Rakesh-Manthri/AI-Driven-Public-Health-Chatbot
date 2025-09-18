import React, { useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState(''); 
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const login = async () => {
    try{
      const res = await api.post('/auth/login',{ email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    }catch(err){ alert('Login failed'); }
  }

  return (
    <div style={{padding:'50px'}}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;

