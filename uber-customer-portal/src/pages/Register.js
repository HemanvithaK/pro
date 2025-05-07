import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    ssn: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:3012/api/customers', form);
      const customer = res.data;

      dispatch(setUser(customer));
      alert('✅ Registered successfully!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || '❌ Registration failed');
    }
  };

  return (
    <div
      className="position-relative"
      style={{
        height: '100vh',
        backgroundImage: `url('register.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          zIndex: 0,
        }}
      />

      {/* Centered form */}
      <div
        className="position-relative d-flex justify-content-center align-items-center h-100"
        style={{ zIndex: 1 }}
      >
        <div
          className="card bg-dark text-white p-4 overflow-auto"
          style={{
            width: '100%',
            maxWidth: '450px',
            maxHeight: '90vh',
            opacity: 0.95,
            backdropFilter: 'blur(4px)',
          }}
        >
          <h2 className="text-center mb-4">Register as Customer</h2>

          {Object.entries(form).map(([key, value]) => (
            <div className="mb-3" key={key}>
              <label className="form-label text-white">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                name={key}
                type={key === 'password' ? 'password' : 'text'}
                className="form-control bg-dark text-white border-secondary"
                value={value}
                onChange={handleChange}
                placeholder={key}
              />
            </div>
          ))}

          <button className="btn btn-light w-100" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
