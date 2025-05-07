import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookRide from './pages/BookRide';
import RideHistory from './pages/RideHistory';
import UploadImage from './pages/UploadImage';
import UpdateCard from './pages/UpdateCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './pages/Account';
import PersonalInfo from './pages/PersonalInfo';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-ride" element={<BookRide />} />
        <Route path="/ride-history" element={<RideHistory />} />
        <Route path="/upload-image" element={<UploadImage />} />
        <Route path="/update-card" element={<UpdateCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/personal-info" element={<PersonalInfo />} />

      </Routes>
    </Router>
  );
}



export default App;
