import AdminSidebar from "../AdminSidebar";

export default function ContactInformation() {
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
              Contact Information
            </h5>

            {/* Contact Details */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Company Contact Details
              </div>

              <div className="card-body p-0">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>Company Name</th>
                      <td>FoodExpress</td>
                    </tr>
                    <tr>
                      <th>Support Email</th>
                      <td>support@foodexpress.com</td>
                    </tr>
                    <tr>
                      <th>Order Help Email</th>
                      <td>orders@foodexpress.com</td>
                    </tr>
                    <tr>
                      <th>Phone Number</th>
                      <td>+91 98765 43210</td>
                    </tr>
                    <tr>
                      <th>WhatsApp Support</th>
                      <td>+91 98765 43210</td>
                    </tr>
                    <tr>
                      <th>Business Hours</th>
                      <td>10:00 AM – 11:00 PM (All Days)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Address Details */}
            <div className="card shadow-sm mb-3">
              <div className="card-header bg-dark text-white">
                Office Address
              </div>

              <div className="card-body p-0">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>Address</th>
                      <td>
                        2nd Floor, Food Plaza,<br />
                        Main Street, Ahmedabad,<br />
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
                      <th>Country</th>
                      <td>India</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Social Links */}
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                Social Media Links
              </div>

              <div className="card-body p-0">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>Instagram</th>
                      <td>@foodexpress</td>
                    </tr>
                    <tr>
                      <th>Facebook</th>
                      <td>facebook.com/foodexpress</td>
                    </tr>
                    <tr>
                      <th>Twitter (X)</th>
                      <td>@foodexpress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions */}
            <div className="text-end mt-3">
              <button className="btn btn-primary">
                Edit Contact Information
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
