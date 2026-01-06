import React, { useState } from "react";
import { Button, Card, Alert, Badge } from "react-bootstrap";
import cardsData from "./cardsData";
import "./Crads.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const Crads = () => {
  const [data] = useState(cardsData);
  const [showMsgId, setShowMsgId] = useState(null);
  const [qty, setQty] = useState({});
  const dispatch = useDispatch();

  const send = (item, id) => {
    // ✅ Use qnty, not qty
    dispatch(ADD({ ...item, qnty: qty[id] || 1 }));
    setShowMsgId(id);
    setTimeout(() => setShowMsgId(null), 1500);
  };

  const updateQty = (id, value) => {
    setQty({ ...qty, [id]: Math.max(1, value) });
  };

  return (
    <div className="container d-flex flex-column min-vh-100">
      <h2 className="text-center display-4 fw-bold text-danger my-4">
        🍽️ Explore Our Menu
      </h2>

      <div className="row justify-content-center">
        {data.map((item, id) => (
          <div className="col-lg-4 col-md-6 mb-4" key={id}>
            <Card className="food-card h-100">
              <div className="img-wrapper">
                <img src={item.imgdata} alt={item.rname} className="food-img" />
                <Badge bg="success" className="price-badge">
                  ₹{item.price}
                </Badge>
              </div>

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{item.rname}</Card.Title>
                <p className="text-muted small">
                  Fresh & delicious food prepared by top chefs.
                </p>

                <div className="rating">⭐⭐⭐⭐☆</div>

                {/* Quantity Selector */}
                <div className="d-flex justify-content-between align-items-center my-3">
                  <span className="fw-semibold">Quantity</span>
                  <div className="qty-control">
                    <button onClick={() => updateQty(id, (qty[id] || 1) - 1)}>-</button>
                    <span>{qty[id] || 1}</span>
                    <button onClick={() => updateQty(id, (qty[id] || 1) + 1)}>+</button>
                  </div>
                </div>

                <Button
                  variant="danger"
                  className="mt-auto w-100 add-cart-btn"
                  onClick={() => send(item, id)}
                >
                  🛒 Add to Cart
                </Button>

                {showMsgId === id && (
                  <Alert variant="success" className="text-center mt-3 py-1">
                    ✔ Added to cart
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} FoodieZone. All rights reserved.
        </p>
        <small>Made with ❤️ by Ansh Mehta</small>
      </footer>
    </div>
  );
};

export default Crads;
