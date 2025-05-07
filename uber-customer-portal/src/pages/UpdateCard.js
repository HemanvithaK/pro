import React, { useState } from 'react';
import axios from 'axios';

const UpdateCard = () => {
  const [card, setCard] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [message, setMessage] = useState('');
  const customerId = localStorage.getItem('customerId');

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!customerId) {
      alert('Please log in first');
      window.location.href = '/login';
      return;
    }

    try {
      await axios.put(`http://localhost:3012/api/customers/${customerId}/credit-card`, card);
      setMessage('✅ Credit card updated successfully!');
    } catch (err) {
      setMessage('❌ Failed to update card.');
    }
  };

  return (
    <div className="vh-100 bg-black text-white d-flex align-items-center justify-content-center">
      <div className="card bg-dark text-white p-4 w-100" style={{ maxWidth: 400 }}>
        <h2 className="text-center mb-4">Update Credit Card</h2>

        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={card.cardNumber}
          onChange={handleChange}
          className="form-control mb-3 bg-dark text-white border-secondary"
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={card.expiry}
          onChange={handleChange}
          className="form-control mb-3 bg-dark text-white border-secondary"
        />
        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          value={card.cvv}
          onChange={handleChange}
          className="form-control mb-3 bg-dark text-white border-secondary"
        />

        <button className="btn btn-light w-100" onClick={handleUpdate}>
          💳 Update Card
        </button>

        {message && <div className="alert alert-info text-center mt-3">{message}</div>}
      </div>
    </div>
  );
};

export default UpdateCard;
