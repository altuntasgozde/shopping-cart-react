import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const NavbarItem = ({ count }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="danger" dark expand="md">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <NavbarBrand>BRAND</NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <Link to="/cart" style={{ textDecoration: "none"}}>
                  <NavLink className="rounded" style={{color:"#DC3545", backgroundColor:"white", padding:"5px 15px"}}>Cart {count}</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarItem;
