import React, { useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username,setUsername] = useState(''); 
  const [email,setEmail] = useState(''); 
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const signup = async () => {
    try{
      await api.post('/auth/signup',{ username,email,password });
      alert('Signup successful');
      navigate('/');
    }catch(err){ alert('Signup failed'); }
  }

  return (
    <div style={{padding:'50px'}}>
      <h2>Signup</h2>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={signup}>Signup</button>
    </div>
  );
}

export default Signup;

