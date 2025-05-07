import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/user/userSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customerId = useSelector(state => state.user.customerId);
  const userInfo = useSelector(state => state.user.userInfo);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  if (!customerId) {
    return <p className="text-center mt-5">🔒 Please log in to access your dashboard.</p>;
  }

  return (
    <>
      {/* Info Bar */}
      <div className="bg-black text-white py-3 px-4 d-flex justify-content-between align-items-center mt-2">
        <div>
          <span className="fw-bold">Welcome back,</span> {userInfo?.firstName || 'Customer'}
          <span className="ms-4">📅 You have no upcoming trips</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/update-card')}>
            💳 Wallet
          </button>
          <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/account')}>
            👤 Account
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="container-fluid px-0">
        <div className="row min-vh-100 g-0">
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-start p-5 bg-white">
            <div>
              <h1 className="fw-bold mb-2">Request a ride</h1>
              <p className="text-muted mb-4">Customer #{customerId?.slice(0, 6)}...</p>
            </div>

            <div className="d-grid gap-3 w-100">
              <button className="btn btn-dark btn-lg text-start px-4" onClick={() => navigate('/book-ride')}>
                🚖 Book a Ride
              </button>
              <button className="btn btn-dark btn-lg text-start px-4" onClick={() => navigate('/ride-history')}>
                📜 View Ride History
              </button>
              <button className="btn btn-dark btn-lg text-start px-4" onClick={() => navigate('/update-card')}>
                💳 Update Credit Card
              </button>
              <button className="btn btn-outline-danger mt-2" onClick={handleLogout}>
                🚪 Logout
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-5 d-none d-md-block">
            <img
              src="/dashboard-art.jpg"
              alt="Ride illustration"
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
