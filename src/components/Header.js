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
import "./Header.css"; // You can style components here
import emptyCart from '../assets/empty-cart.jpg'; 



const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartreducer.carts);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeItem = (id) => {
    dispatch(DLT(id));
  };

  const calculateTotal = () => {
    let price = 0;
    cartItems.forEach((item) => {
      price += item.price * item.qnty;
    });
    setTotalPrice(price);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-warning">FoodieZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Crads" className="text-light">Order</Nav.Link>
          </Nav>

          <Badge
            badgeContent={cartItems.length}
            color="primary"
            onClick={handleClick}
            sx={{ cursor: "pointer", ml: 3 }}
          >
            <i className="fa-solid fa-cart-shopping text-light fs-4"></i>
          </Badge>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "cart-button" }}
            PaperProps={{ style: { width: 380 } }}
          >
            {cartItems.length ? (
              <div className="p-2">
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <NavLink to={`/cart/${item.id}`} onClick={handleClose}>
                            <img src={item.imgdata} alt="" width="60" height="60" />
                          </NavLink>
                        </td>
                        <td>
                          <p>{item.rname}</p>
                          <p>Price: ₹{item.price}</p>
                          <p>Qty: {item.qnty}</p>
                          <i
                            className="fas fa-trash text-danger"
                            onClick={() => removeItem(item.id)}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <p className="text-center fw-bold mt-2">Total: ₹{totalPrice}</p>
              </div>
            ) : (
              <div className="text-center p-4">
                <i
                  className="fas fa-times text-danger"
                  onClick={handleClose}
                  style={{ cursor: "pointer", position: "absolute", top: 10, right: 20 }}
                ></i>
                <p className="mb-2">Your cart is empty</p>
                <img
                    src={emptyCart}
                    alt="empty cart"
                    width="100"
                    className="mx-auto"
/>
              </div>
            )}
          </Menu>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
