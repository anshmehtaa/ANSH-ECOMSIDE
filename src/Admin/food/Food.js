import AdminSidebar from "../AdminSidebar";
import cardsData from "../../components/cardsData";
import { useNavigate } from "react-router-dom";

export default function FoodPage() {
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
            Food Items
          </h5>

          {/* Add Food Button */}
          <div className="text-end mb-3">
            <button className="btn btn-success">
              + Add New Food
            </button>
          </div>

          {/* Food Table */}
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              Food List
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-bordered table-hover mb-0 text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Food Name</th>
                      <th>Category</th>
                      <th>Price (₹)</th>
                      <th>Rating</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cardsData.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>

                        <td>
                          <img
                            src={item.imgdata}
                            alt={item.rname}
                            width="60"
                            className="rounded"
                          />
                        </td>

                        <td>{item.rname}</td>
                        <td>{item.address}</td>
                        <td>₹{item.price}</td>
                        <td>{item.rating} ⭐</td>

                        <td>
                          <button
                            className="btn btn-sm btn-info me-1"
                            onClick={() =>
                              navigate(`/admin/food/${item.id}`)
                            }
                          >
                            View
                          </button>

                          <button className="btn btn-sm btn-primary me-1">
                            Edit
                          </button>

                          <button className="btn btn-sm btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
