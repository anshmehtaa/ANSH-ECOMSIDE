import AdminSidebar from "../AdminSidebar";

export default function OrderDetail() {
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
              Order Details
            </h5>

            {/* Order Summary */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Order Summary
              </div>
              <div className="card-body p-0">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>Order ID</th>
                      <td>ORD1001</td>
                    </tr>
                    <tr>
                      <th>Order Date</th>
                      <td>01-Jan-2026</td>
                    </tr>
                    <tr>
                      <th>Order Status</th>
                      <td>
                        <span className="badge bg-warning text-dark">
                          Preparing
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>Payment Method</th>
                      <td>Online (UPI)</td>
                    </tr>
                    <tr>
                      <th>Payment Status</th>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Customer Details */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Customer Details
              </div>
              <div className="card-body p-0">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>Name</th>
                      <td>Rahul Sharma</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>+91 98765 43210</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>rahul@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Delivery Address</th>
                      <td>
                        12, Green Park Society,<br />
                        Satellite, Ahmedabad
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Items */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Ordered Items
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover mb-0 text-center">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Price (₹)</th>
                        <th>Qty</th>
                        <th>Total (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Margherita Pizza</td>
                        <td>250</td>
                        <td>1</td>
                        <td>250</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Veg Burger</td>
                        <td>100</td>
                        <td>2</td>
                        <td>200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Price Details */}
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                Price Details
              </div>
              <div className="card-body p-0">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>Subtotal</th>
                      <td>₹450</td>
                    </tr>
                    <tr>
                      <th>Delivery Fee</th>
                      <td>₹30</td>
                    </tr>
                    <tr>
                      <th>Tax</th>
                      <td>₹20</td>
                    </tr>
                    <tr className="table-success">
                      <th>Grand Total</th>
                      <td><strong>₹500</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions */}
            <div className="text-end mt-3">
              <button className="btn btn-warning me-2">
                Update Status
              </button>
              <button className="btn btn-danger">
                Cancel Order
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
