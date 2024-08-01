// NavBar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="https://img.freepik.com/premium-vector/socks-icon-leg-clothes-symbol-sign-launry-vector_744955-13.jpg"
              alt="Logo"
              height="40"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/favorites">
              <Nav.Link>Избранное</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>Корзина</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>Вход</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>Регистрация</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
