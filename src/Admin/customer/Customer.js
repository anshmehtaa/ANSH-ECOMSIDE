import AdminSidebar from "../AdminSidebar";

export default function CustomerDetail() {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <AdminSidebar />
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <h5 className="bg-dark text-white text-center py-3 rounded">
              Customer Details
            </h5>

            {/* Customer Info */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Customer Information
              </div>

              <div className="card-body p-0">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>Customer ID</th>
                      <td>CUST1001</td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>Rahul Sharma</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>rahul@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>+91 98765 43210</td>
                    </tr>
                    <tr>
                      <th>Account Status</th>
                      <td>
                        <span className="badge bg-success">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>Registered On</th>
                      <td>10-Dec-2025</td>
                    </tr>
                    <tr>
                      <th>Total Orders</th>
                      <td>18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Address Details */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Delivery Address
              </div>

              <div className="card-body p-0">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>Address</th>
                      <td>
                        Flat 12, Green Park Society,<br />
                        Satellite, Ahmedabad,<br />
                        Gujarat – 380015
                      </td>
                    </tr>
                    <tr>
                      <th>City</th>
                      <td>Ahmedabad</td>
                    </tr>
                    <tr>
                      <th>State</th>
                      <td>Gujarat</td>
                    </tr>
                    <tr>
                      <th>Pincode</th>
                      <td>380015</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Summary */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Order Summary
              </div>

              <div className="card-body p-0">
                <table className="table table-bordered mb-0 text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>Total Orders</th>
                      <th>Delivered</th>
                      <th>Cancelled</th>
                      <th>Total Spent (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>18</td>
                      <td>15</td>
                      <td>3</td>
                      <td>₹7,850</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions */}
            <div className="text-end">
              <button className="btn btn-warning me-2">
                Block Customer
              </button>
              <button className="btn btn-danger">
                Delete Customer
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
