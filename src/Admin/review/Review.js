import AdminSidebar from "../AdminSidebar";

export default function Reviews() {
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
              Customer Reviews
            </h5>

            {/* Review Summary */}
            <div className="row mb-3">
              <div className="col-md-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Total Reviews</h6>
                    <h4 className="fw-bold">1,240</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Average Rating</h6>
                    <h4 className="fw-bold">4.3 ⭐</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>5★ Reviews</h6>
                    <h4 className="fw-bold">720</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Low Ratings (1–2★)</h6>
                    <h4 className="fw-bold text-danger">95</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Table */}
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                Reviews List
              </div>

              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover mb-0">
                    <thead className="table-dark text-center">
                      <tr>
                        <th>#</th>
                        <th>Customer</th>
                        <th>Item</th>
                        <th>Rating</th>
                        <th>Review</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>Rahul Sharma</td>
                        <td>Margherita Pizza</td>
                        <td className="text-center">5 ⭐</td>
                        <td>Awesome taste and fast delivery!</td>
                        <td className="text-center">01-Jan-2026</td>
                        <td className="text-center">
                          <span className="badge bg-success">Approved</span>
                        </td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="text-center">2</td>
                        <td>Anita Patel</td>
                        <td>Veg Burger</td>
                        <td className="text-center">3 ⭐</td>
                        <td>Good but packaging can improve.</td>
                        <td className="text-center">31-Dec-2025</td>
                        <td className="text-center">
                          <span className="badge bg-warning text-dark">
                            Pending
                          </span>
                        </td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-success me-1">
                            Approve
                          </button>
                          <button className="btn btn-sm btn-danger">
                            Reject
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="text-center">3</td>
                        <td>Vikram Singh</td>
                        <td>Pasta</td>
                        <td className="text-center">2 ⭐</td>
                        <td>Late delivery and cold food.</td>
                        <td className="text-center">30-Dec-2025</td>
                        <td className="text-center">
                          <span className="badge bg-danger">Rejected</span>
                        </td>
                        <td className="text-center">
                          <button className="btn btn-sm btn-secondary" disabled>
                            Action Taken
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
