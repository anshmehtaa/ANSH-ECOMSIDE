import AdminSidebar from "../AdminSidebar";

export default function FoodDetail() {
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
              Food Details
            </h5>

            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                Food Information
              </div>

              <div className="card-body">
                <div className="row">
                  {/* Food Image */}
                  <div className="col-md-4 text-center">
                    <img
                      src="https://via.placeholder.com/300"
                      alt="Food"
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>

                  {/* Food Details */}
                  <div className="col-md-8">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th style={{ width: "30%" }}>Food Name</th>
                          <td>Margherita Pizza</td>
                        </tr>
                        <tr>
                          <th>Category</th>
                          <td>Pizza</td>
                        </tr>
                        <tr>
                          <th>Price</th>
                          <td>₹250</td>
                        </tr>
                        <tr>
                          <th>Status</th>
                          <td>
                            <span className="badge bg-success">
                              Available
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th>Rating</th>
                          <td>4.5 ⭐ (320 Reviews)</td>
                        </tr>
                        <tr>
                          <th>Description</th>
                          <td>
                            Classic Margherita pizza with fresh mozzarella,
                            basil, and rich tomato sauce.
                          </td>
                        </tr>
                        <tr>
                          <th>Created Date</th>
                          <td>15-Dec-2025</td>
                        </tr>
                        <tr>
                          <th>Last Updated</th>
                          <td>30-Dec-2025</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Action Buttons */}
                    <div className="mt-3">
                      <button className="btn btn-primary me-2">
                        Edit Food
                      </button>
                      <button className="btn btn-danger">
                        Delete Food
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
