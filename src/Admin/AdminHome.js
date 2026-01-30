import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";
import "./AdminHome.css";

export default function AdminHome() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="admin-layout">

      {/* Mobile Header */}
      <div className="d-md-none d-flex justify-content-between align-items-center bg-dark text-white p-2">
        <button
          className="btn btn-outline-light"
          onClick={() => setShowSidebar(true)}
        >
          <i className="bi bi-list fs-4"></i>
        </button>
        <span className="fw-bold">Food Admin</span>
      </div>

      {/* Mobile Backdrop */}
      {showSidebar && (
        <div
          className="sidebar-backdrop d-md-none"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar-wrapper ${showSidebar ? "show" : ""}`}>
        <AdminSidebar closeSidebar={() => setShowSidebar(false)} />
      </div>

      {/* Main Content */}
      <div className="admin-content">
        <h4 className="fw-bold mb-3">Dashboard Overview</h4>

        {/* KPI Cards */}
        <div className="row g-3 mb-4">
          {[
            { title: "Today's Orders", value: "42", icon: "bag-check", color: "primary" },
            { title: "Today's Revenue", value: "₹8,450", icon: "currency-rupee", color: "success" },
            { title: "Pending Orders", value: "6", icon: "clock-history", color: "warning" },
            { title: "Total Foods", value: "85", icon: "fork-knife", color: "dark" },
          ].map((item, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className={`card shadow-sm text-center border-${item.color}`}>
                <div className="card-body">
                  <i className={`bi bi-${item.icon} fs-3 text-${item.color}`}></i>
                  <h6 className="mt-2">{item.title}</h6>
                  <h4 className="fw-bold">{item.value}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="card shadow-sm">
          <div className="card-header bg-dark text-white d-flex justify-content-between">
            <span>Recent Orders</span>
            <button
              className="btn btn-sm btn-light"
              onClick={() => navigate("/admin/orderlist")}
            >
              View All
            </button>
          </div>

          <div className="table-responsive">
            <table className="table table-hover mb-0 text-center">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ORD1021</td>
                  <td>Amit</td>
                  <td>₹520</td>
                  <td><span className="badge bg-warning text-dark">Preparing</span></td>
                </tr>
                <tr>
                  <td>#ORD1020</td>
                  <td>Neha</td>
                  <td>₹310</td>
                  <td><span className="badge bg-success">Delivered</span></td>
                </tr>
                <tr>
                  <td>#ORD1019</td>
                  <td>Rahul</td>
                  <td>₹450</td>
                  <td><span className="badge bg-info text-dark">Out for Delivery</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
