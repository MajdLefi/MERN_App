import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from "reactstrap";

import LoginModal from "../auth/LoginModal";
import RegisterModal from "../auth/RegisterModal";
import { logout } from "../../js/actions/authActions";

const AppNavBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
      <NavItem>
        <Link to="/dashboard">
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : null}</strong>
          </span>
        </Link>
      </NavItem>
      <NavLink href="/" onClick={logoutUser}>
        {" "}
        Logout
      </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment className="register-btn">
      <NavItem>
        <RegisterModal className="register-btn" />
      </NavItem>
      <NavItem>
        <LoginModal className="login-btn" />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuth ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
        <Button color="danger" className="btn-courses">
          Courses
        </Button>{" "}
      </Navbar>
    </div>
  );
};
export default AppNavBar;
