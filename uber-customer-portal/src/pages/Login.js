import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.get('http://localhost:3012/api/customers');

      const customer = res.data.find(
        c => c.email.toLowerCase() === email.toLowerCase() && c.password === password
      );

      if (customer) {
        dispatch(setUser(customer)); // ✅ Store in Redux
        alert('✅ Login successful');
        navigate('/'); // ✅ Use navigate, NOT window.location.href
      } else {
        alert('❌ Invalid email or password');
      }
    } catch (error) {
      alert('❌ Login failed');
    }
  };

  return (
    <div
      className="position-relative"
      style={{
        height: '100vh',
        backgroundImage: `url('/login-back.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          zIndex: 0,
        }}
      />

      <div
        className="position-relative d-flex justify-content-end align-items-center h-100"
        style={{ paddingRight: '5vw', zIndex: 1 }}
      >
        <div
          className="card bg-dark text-white p-4"
          style={{
            width: '100%',
            maxWidth: '400px',
            opacity: 0.95,
            backdropFilter: 'blur(4px)',
          }}
        >
          <h2 className="text-center mb-4">Uber Login</h2>

          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-secondary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button className="btn btn-light w-100" onClick={handleLogin}>
            Login
          </button>

          <p className="text-center mt-3">
            Don’t have an account?{' '}
            <a href="/register" className="text-info">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
