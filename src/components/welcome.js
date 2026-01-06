import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container d-flex flex-column min-vh-100">

      {/* Hero Section */}
      <section className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-3 fw-bold text-white">
          Welcome to <span className="text-warning">FoodieZone 🍕</span>
        </h1>
        <p className="lead text-light mt-3">
          Order food from your favorite restaurants, anytime, anywhere.
        </p>

        {/* Search Bar */}
        <div className="search-box mt-4">
          <input
            type="text"
            placeholder="Search for dishes or restaurants..."
            className="form-control form-control-lg"
          />
        </div>

        <Link to="/Crads" className="btn btn-lg btn-warning mt-4 shadow">
          🍽️ Start Ordering
        </Link>
      </section>

      {/* Categories Section */}
      <section className="container my-5">
        <h3 className="text-center mb-4 text-danger">Popular Categories</h3>
        <div className="row text-center">
          {["Pizza 🍕", "Burgers 🍔", "Biryani 🍛", "Desserts 🍰"].map(
            (item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="category-card shadow">
                  <h5>{item}</h5>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mb-5">
        <h3 className="text-center mb-4 text-danger">Why Choose FoodieZone?</h3>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <h5>Fast Delivery 🚀</h5>
              <p>Get your food delivered hot & fresh in under 30 minutes.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <h5>Live Order Tracking 📍</h5>
              <p>Track your order in real-time from kitchen to doorstep.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <h5>Secure Payments 🔒</h5>
              <p>Pay safely using UPI, Cards, or Cash on Delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-light py-5">
        <div className="container">
          <h3 className="text-center mb-4 text-danger">How It Works</h3>
          <div className="row text-center">
            <div className="col-md-4">
              <h5>1️⃣ Choose Food</h5>
              <p>Browse restaurants and select your favorite meals.</p>
            </div>
            <div className="col-md-4">
              <h5>2️⃣ Place Order</h5>
              <p>Add to cart and checkout in seconds.</p>
            </div>
            <div className="col-md-4">
              <h5>3️⃣ Enjoy 🍽️</h5>
              <p>Relax while we deliver happiness to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container my-5">
        <h3 className="text-center mb-4 text-danger">What Customers Say</h3>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow p-4">
              ⭐⭐⭐⭐⭐
              <p>"Best food delivery app! Super fast and tasty food."</p>
              <small>- Rahul</small>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card shadow p-4">
              ⭐⭐⭐⭐⭐
              <p>"Amazing discounts and great customer service."</p>
              <small>- Priya</small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center py-5">
        <h2 className="text-white">Hungry? Order Now! 🍔</h2>
        <Link to="/Crads" className="btn btn-lg btn-warning mt-3">
          Order Your Favorite Food
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} FoodieZone. All rights reserved.
        </p>
        <small>Made with ❤️ by Ansh Mehta</small>
      </footer>
    </div>
  );
};

export default Welcome;
