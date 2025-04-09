import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({ id: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://fsdbackenddsb2.onrender.com/users/${loginData.id}`);
      if (res.data.password === loginData.password) {
        alert('Login Successful!');
        navigate('/dashboard'); // ✅ Redirect to dashboard
      } else {
        alert('Incorrect password!');
      }
    } catch (err) {
      alert('User not found!');
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleLogin}>
        <label>User ID:</label>
        <input type="text" name="id" value={loginData.id} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={loginData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
