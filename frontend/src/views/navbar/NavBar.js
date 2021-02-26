import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../js/actions/userActions";
import "./NavBar-style.css";

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
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import LoginModal from "../auth/LoginModal";
import RegisterModal from "../auth/RegisterModal";
import { logout } from "../../js/actions/authActions";

const NavBar = () => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!dropdownOpen);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);
  const users = useSelector((state) => state.usersReducer.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
      <ButtonDropdown
        className="bntdropdown"
        isOpen={dropdownOpen}
        toggle={toggleDropdown}
      >
        {" "}
        <DropdownToggle>
          <div className="avatar">User</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>user</DropdownItem>
          <DropdownItem disabled>email</DropdownItem>
          <DropdownItem disabled>phone </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="/" onClick={logoutUser}>
            {" "}
            Logout
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <Link to="/dashboard">
       <Button color="success" className="btndashboard">Dashboard</Button>{" "}
      </Link>
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
      <Navbar color="dark" dark expand="sm" className="navbar">
        <Container>
          <NavbarBrand href="/Home">Home</NavbarBrand>
          <Link to="/bootcamps/list">
            <Button className="btnbootcamp" color="danger">
              Bootcamps
            </Button>
          </Link>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuth ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
