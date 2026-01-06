import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Table from "@mui/material/Table";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";
import "./Header.css";
import emptyCart from "../assets/empty-cart.jpg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartreducer.carts);

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const removeItem = (id) => dispatch(DLT(id));

  // ✅ Calculate total safely
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.qnty) || 0;
      total += price * qty;
    });
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-warning">
          FoodieZone
        </Navbar.Brand>

        <Badge
          badgeContent={cartItems.length}
          color="primary"
          onClick={handleClick}
          sx={{ cursor: "pointer", ml: 1 }}
          className="d-lg-none me-2"
        >
          <i className="fa-solid fa-cart-shopping text-light fs-4"></i>
        </Badge>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/Admin" className="fw-bold text-warning">Admin</Nav.Link>
            <Nav.Link as={NavLink} to="/" className="fw-bold text-warning">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Crads" className="fw-bold text-warning">Order</Nav.Link>
          </Nav>

          <Badge
            badgeContent={cartItems.length}
            color="primary"
            onClick={handleClick}
            sx={{ cursor: "pointer", ml: 3 }}
            className="d-none d-lg-inline"
          >
            <i className="fa-solid fa-cart-shopping text-light fs-4"></i>
          </Badge>
        </Navbar.Collapse>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PaperProps={{ style: { width: 380 } }}>
          {cartItems.length ? (
            <div className="p-2">
              <Table borderless>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <NavLink to={`/cart/${item.id}`} onClick={handleClose}>
                          <img src={item.imgdata} alt={item.rname} className="cart-img" />
                        </NavLink>
                      </td>
                      <td>
                        <p className="fw-bold mb-1">{item.rname}</p>
                        <p className="mb-1 text-muted">
                          ₹{item.price} × {item.qnty} = <strong>₹{item.price * item.qnty}</strong>
                        </p>
                        <p className="mb-1">Qty: {item.qnty}</p>
                        <i
                          className="fas fa-trash text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeItem(item.id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="text-center fw-bold border-top pt-2">
                Total Amount: ₹{totalPrice}
              </div>
            </div>
          ) : (
            <div className="text-center p-4">
              <i
                className="fas fa-times text-danger"
                onClick={handleClose}
                style={{ cursor: "pointer", position: "absolute", top: 10, right: 20 }}
              ></i>
              <p className="mb-2">Your cart is empty</p>
              <img src={emptyCart} alt="empty cart" width="120" />
            </div>
          )}
        </Menu>
      </Container>
    </Navbar>
  );
};

export default Header;
