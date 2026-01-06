import React from "react";
import AdminSidebar from "./AdminSidebar";
import Settings from "./setting/Setting";
import { useNavigate } from "react-router-dom";


export default function AdminHome() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid my-3">
      <div className="row">
        
        {/* Sidebar */}
        <div className="col-md-3">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h5 className="bg-dark text-white text-center py-3 rounded">
            Admin Dashboard
          </h5>

          {/* Stats Cards */}
          <div className="row mb-3">
            {[
              { title: "Total Orders", value: "1,245" },
              { title: "Total Revenue", value: "₹2,45,300" },
              { title: "Total Customers", value: "620" },
              { title: "Total Foods", value: "85" },
            ].map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>{item.title}</h6>
                    <h4 className="fw-bold">{item.value}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="card shadow-sm mb-3">
            <div className="card-header bg-dark text-white">
              Recent Orders
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-bordered table-hover mb-0 text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Total (₹)</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>ORD1005</td>
                      <td>Amit Patel</td>
                      <td>520</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          Preparing
                        </span>
                      </td>
                      <td>01-Jan-2026</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>ORD1004</td>
                      <td>Neha Shah</td>
                      <td>310</td>
                      <td>
                        <span className="badge bg-success">
                          Delivered
                        </span>
                      </td>
                      <td>01-Jan-2026</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>ORD1003</td>
                      <td>Rahul Sharma</td>
                      <td>450</td>
                      <td>
                        <span className="badge bg-info text-dark">
                          Out for Delivery
                        </span>
                      </td>
                      <td>31-Dec-2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              Quick Actions
            </div>
            <div className="card-body text-center">
              <button className="btn btn-primary me-2">View Orders</button>
              <button className="btn btn-success me-2">Add Food</button>
              <button className="btn btn-warning me-2">View Customers</button>
                <button className="btn btn-secondary" onClick={() => navigate("/admin/Setting")}>Settings </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
