import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BookRide = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [fare, setFare] = useState('');
  const [message, setMessage] = useState('');

  const customerId = useSelector((state) => state.user.customerId);

  const handleBook = async () => {
    if (!pickup || !dropoff || !fare) {
      alert('All fields are required.');
      return;
    }

    try {
      const rideData = {
        customerId,
        driverId: '000000000000000000000000', // test driver ID or fetch real one
        pickup: {
          latitude: 0,
          longitude: 0,
          address: pickup
        },
        dropoff: {
          latitude: 0,
          longitude: 0,
          address: dropoff
        },
        fare
      };

      const res = await axios.post('http://localhost:3014/api/rides', rideData);
      setMessage(`✅ Ride booked! Ride ID: ${res.data._id}`);
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to book ride.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Request a Ride</h2>

      <div className="mb-3">
        <label className="form-label">Pickup Location</label>
        <input
          type="text"
          className="form-control"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Enter pickup address"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Dropoff Location</label>
        <input
          type="text"
          className="form-control"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          placeholder="Enter dropoff address"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Fare ($)</label>
        <input
          type="number"
          className="form-control"
          value={fare}
          onChange={(e) => setFare(e.target.value)}
          placeholder="Enter estimated fare"
        />
      </div>

      <button className="btn btn-dark" onClick={handleBook}>
        Book Ride
      </button>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default BookRide;
