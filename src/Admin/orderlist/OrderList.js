import AdminSidebar from "../AdminSidebar";

export default function OrderList() {
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
              Order List
            </h5>

            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white text-center py-3 rounded">
                All Orders
              </div>

              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover mb-0 text-center">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total (₹)</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Order Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>ORD1001</td>
                        <td>Rahul Sharma</td>
                        <td>Pizza, Burger</td>
                        <td>450</td>
                        <td>
                          <span className="badge bg-success">Paid</span>
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">
                            Preparing
                          </span>
                        </td>
                        <td>01-Jan-2026</td>
                        <td>
                          <button className="btn btn-sm btn-primary me-1">
                            View
                          </button>
                          <button className="btn btn-sm btn-danger">
                            Cancel
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>ORD1002</td>
                        <td>Anita Patel</td>
                        <td>Biryani</td>
                        <td>320</td>
                        <td>
                          <span className="badge bg-success">Paid</span>
                        </td>
                        <td>
                          <span className="badge bg-info text-dark">
                            Out for Delivery
                          </span>
                        </td>
                        <td>01-Jan-2026</td>
                        <td>
                          <button className="btn btn-sm btn-primary me-1">
                            View
                          </button>
                          <button className="btn btn-sm btn-danger">
                            Cancel
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>ORD1003</td>
                        <td>Vikram Singh</td>
                        <td>Pasta</td>
                        <td>280</td>
                        <td>
                          <span className="badge bg-secondary">COD</span>
                        </td>
                        <td>
                          <span className="badge bg-success">
                            Delivered
                          </span>
                        </td>
                        <td>31-Dec-2025</td>
                        <td>
                          <button className="btn btn-sm btn-primary me-1">
                            View
                          </button>
                          <button className="btn btn-sm btn-secondary" disabled>
                            Completed
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
