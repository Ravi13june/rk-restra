import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/RK-Restra.png";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/user/userAction";

const Header = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const onLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    //
  }, [user]);

  return (
    <Navbar bg="light" expand="lg" className="rk-restra-nav shadow-sm">
      <div className="container">
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} alt="img" className="" height="50rem" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/offers">
              <i className="icofont icofont-sale-discount" /> Offers
              <span className="badge badge-danger">New</span>
            </NavLink>

            <NavDropdown title="Restaurants" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Listing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Detail + Cart</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <div className="d-inline-block">
                  <i className="fa fa-shopping-basket mr-1" />
                  <Link to="/cart">Cart<span className="ml-1 badge badge-success">5</span></Link>
                </div>
              }
              to="/cart"
              id="navbarScrollingDropdown"
              alignRight
            >
              <div className="dropdown-cart-top shadow-sm">
                <div className="dropdown-cart-top-header p-4">
                  <img
                    alt="img"
                    src="img/cart.jpg"
                    className="img-fluid mr-3"
                  />
                  <h6 className="mb-0">Gus's World Famous Chicken</h6>
                  <p className="text-secondary mb-0">
                    310 S Front St, Memphis, USA
                  </p>
                </div>
                <div className="dropdown-cart-top-body border-top p-4">
                  <p className="mb-2">
                    <i className="mr-1 text-success food-item icofont-ui-press" />
                    Corn &amp; Peas Salad x 1
                    <span className="float-right text-secondary">$209</span>
                  </p>
                  <p className="mb-2">
                    <i className="mr-1 text-success food-item icofont-ui-press" />
                    Veg Seekh Sub 6" (15 cm) x 1
                    <span className="float-right text-secondary">$133</span>
                  </p>
                  <p className="mb-2">
                    <i className="mr-1 text-danger food-item icofont-ui-press" />
                    Chicken Tikka Sub 12" (30 cm) x 1
                    <span className="float-right text-secondary">$314</span>
                  </p>
                  <p className="mb-2">
                    <i className="mr-1 text-success food-item icofont-ui-press" />
                    Corn &amp; Peas Salad x 1
                    <span className="float-right text-secondary">$209</span>
                  </p>
                </div>
                <div className="dropdown-cart-top-footer border-top p-4">
                  <p className="mb-0 font-weight-bold text-secondary">
                    Sub Total{" "}
                    <span className="float-right text-dark">$499</span>
                  </p>
                  <small className="text-info">Extra charges may apply</small>
                </div>
                <div className="dropdown-cart-top-footer border-top p-2">
                  <Link
                    to="/checkout"
                    className="btn btn-success btn-block py-3 text-white text-center dropdown-item dropdown-item"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </NavDropdown>
            {user?.success ? (
              <NavDropdown
                title={
                  <div className="d-inline-block">
                    <img
                      alt="user"
                      src="http://via.placeholder.com/300"
                      className="nav-rk-restra-pic rounded-pill"
                    />
                    My Account
                  </div>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/my-account/orders">
                  <i className="icofont icofont-food-cart" /> Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="/my-account/offers">
                  <i className="icofont icofont-sale-discount" /> Offers
                </NavDropdown.Item>
                <NavDropdown.Item href="/my-account/favourites">
                  <i className="icofont icofont-heart" /> Favourites
                </NavDropdown.Item>
                <NavDropdown.Item href="/my-account/payments">
                  <i className="icofont icofont-credit-card" /> Payments
                </NavDropdown.Item>
                <NavDropdown.Item href="/my-account/addresses">
                  <i className="icofont icofont-location-pin" /> Addresses
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(event) => onLogout(event)}>
                  <i className="icofont icofont-sign-out" /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/signup">Signup</NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
