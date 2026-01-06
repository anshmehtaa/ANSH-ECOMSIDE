import AdminSidebar from "../AdminSidebar";

export default function Settings() {
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
              Settings
            </h5>

            {/* Profile Settings */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Admin Profile
              </div>

              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value="Admin User"
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value="admin@foodexpress.com"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="text-end">
                    <button className="btn btn-primary" disabled>
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Change Password */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Change Password
              </div>

              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label className="form-label">Current Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter current password"
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter new password"
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>

                  <div className="text-end">
                    <button className="btn btn-warning">
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Website Settings */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Website Settings
              </div>

              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Website Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value="FoodExpress"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Support Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value="support@foodexpress.com"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Support Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        value="+91 98765 43210"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Delivery Charge (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        value="30"
                      />
                    </div>
                  </div>

                  <div className="text-end">
                    <button className="btn btn-success">
                      Save Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="card shadow-sm border-danger">
              <div className="card-header bg-danger text-white">
                Danger Zone
              </div>

              <div className="card-body text-end">
                <button className="btn btn-outline-danger">
                  Logout Admin
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
