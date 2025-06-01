import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css'; 
import bgImage from '../assets/food-bg.jpg';

const Welcome = () => {
  return (
    <div className="welcome-container d-flex flex-column min-vh-100">
      {/* Hero Section */}
      <div className="text-center py-5 bg-light flex-grow-1">
        <h1 className="display-3 fw-bold text-danger">Welcome to FoodieZone 🍕</h1>
        <p className="lead mt-3">Delicious food delivered fast to your door!</p>
        <Link to="/Crads" className="btn btn-lg btn-warning mt-4 shadow">
          🍽️ Start Ordering
        </Link>
      </div>

     {/* Feature Section */}
<div className="container mt-5 mb-5">
  <h3 className="text-center mb-4" style={{ color: '#ff5722' }}>Why Choose Us?</h3>

  <div className="row text-center">
    <div className="col-md-4 mb-4">
      <div className="card shadow p-3 h-100">
        <h5>Fast Delivery 🚀</h5>
        <p>We deliver your order within 30 minutes or it's free!</p>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card shadow p-3 h-100">
        <h5>Fresh Ingredients 🥗</h5>
        <p>We use only fresh, high-quality ingredients in every meal.</p>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card shadow p-3 h-100">
        <h5>Best Prices 💸</h5>
        <p>Affordable meals without compromising on taste or quality.</p>
      </div>
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <p className="mb-0">&copy; {new Date().getFullYear()} FoodieZone. All rights reserved.</p>
        <small>Made with ❤️ by Ansh Mehta</small>
      </footer>
    </div>
  );
};

export default Welcome;

