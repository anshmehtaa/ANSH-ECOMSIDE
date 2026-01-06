import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { INC, DEC, DLT } from "../redux/actions/action";
import "./CradsDetail.css";

const CradsDetail = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartreducer.carts);

  useEffect(() => {
    const filteredData = cartData.filter((item) => item.id === Number(id));
    setData(filteredData);
  }, [id, cartData]);

  const removeItem = (id) => {
    dispatch(DLT(id));
    navigate("/Crads");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold text-danger mb-4">
        🛒 Cart Item Details
      </h2>

      {data.map((item) => (
        <div className="cart-detail-card shadow" key={item.id}>
          <div className="row g-4 align-items-center">
            {/* Image */}
            <div className="col-md-4 text-center">
              <img
                src={item.imgdata}
                alt={item.rname}
                className="cart-detail-img"
              />
            </div>

            {/* Details */}
            <div className="col-md-8">
              <Table borderless>
                <tbody>
                  <tr>
                    <td>
                      <p><strong>Restaurant:</strong> {item.rname}</p>
                      <p><strong>Dishes:</strong> {item.address}</p>
                      <p><strong>Price:</strong> ₹{item.price}</p>
                      <p className="total-price">
                        <strong>Total:</strong> ₹{item.price * item.qnty}
                      </p>

                      {/* Quantity Control */}
                      <div className="qty-wrapper mt-3">
                        <button
                          className="qty-btn plus"
                          onClick={() => dispatch(INC(item.id))}
                        >
                          +
                        </button>
                        <span className="qty-value">{item.qnty}</span>
                        <button
                          className="qty-btn minus"
                          onClick={() => dispatch(DEC(item.id))}
                        >
                          −
                        </button>
                      </div>
                    </td>

                    <td>
                      <p>
                        <strong>Rating:</strong>{" "}
                        <span className="rating-badge">{item.rating}</span>
                      </p>
                      <p>
                        <strong>Review:</strong> {item.somedata}
                      </p>
                      <p className="remove-item">
                        <strong>Remove:</strong>{" "}
                        <i
                          className="fas fa-trash"
                          onClick={() => removeItem(item.id)}
                        ></i>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CradsDetail;
