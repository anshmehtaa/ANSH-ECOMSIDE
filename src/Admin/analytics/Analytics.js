import AdminSidebar from "../AdminSidebar";

export default function Analytics() {
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
              Analytics Dashboard
            </h5>

            {/* Stats Cards */}
            <div className="row mb-3">
              <div className="col-md-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Total Orders</h6>
                    <h4 className="fw-bold">1,245</h4>
                    <span className="badge bg-primary">Today</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Total Revenue</h6>
                    <h4 className="fw-bold">₹2,45,300</h4>
                    <span className="badge bg-success">This Month</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Delivered Orders</h6>
                    <h4 className="fw-bold">980</h4>
                    <span className="badge bg-success">Completed</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Cancelled Orders</h6>
                    <h4 className="fw-bold">65</h4>
                    <span className="badge bg-danger">Cancelled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Overview */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Sales Overview
              </div>
              <div className="card-body">
                <div className="alert alert-secondary text-center mb-0">
                  📊 Chart Placeholder (Daily / Weekly / Monthly Sales)
                </div>
              </div>
            </div>

            {/* Popular Items */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Top Selling Items
              </div>
              <div className="card-body p-0">
                <table className="table table-bordered mb-0 text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Item Name</th>
                      <th>Orders</th>
                      <th>Revenue (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Margherita Pizza</td>
                      <td>320</td>
                      <td>₹80,000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Veg Burger</td>
                      <td>250</td>
                      <td>₹45,000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pasta</td>
                      <td>180</td>
                      <td>₹38,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Status Breakdown */}
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                Order Status Summary
              </div>
              <div className="card-body p-0">
                <table className="table table-bordered mb-0 text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>Status</th>
                      <th>Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pending</td>
                      <td>120</td>
                    </tr>
                    <tr>
                      <td>Preparing</td>
                      <td>80</td>
                    </tr>
                    <tr>
                      <td>Out for Delivery</td>
                      <td>65</td>
                    </tr>
                    <tr>
                      <td>Delivered</td>
                      <td>980</td>
                    </tr>
                    <tr>
                      <td>Cancelled</td>
                      <td>65</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
