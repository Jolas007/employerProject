import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Figure from "react-bootstrap/Figure";

export default function NavBar({ user, handleLogout }) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <NavLink style={{ textDecoration: "none" }} to={"/"}>
          <Figure>
            <Figure.Image
              width={50}
              height={90}
              alt="171x180"
              src="https://i.pinimg.com/736x/20/fd/83/20fd83252ae65f1e22eb691f2833b405--brand-guide-lost-socks.jpg"
            />
          </Figure>
          <Navbar.Brand>Losts Socks</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <div>
              {/* Удален маршрут /home */}
              <Navbar.Text className="me-3">
                <NavLink to="/generator" style={{ textDecoration: "none" }}>
                  Genarator
                </NavLink>
                <NavLink
                  to="/cart"
                  style={{ textDecoration: "none", marginLeft: 7 }}
                >
                  Cart
                </NavLink>
                <NavLink
                  to="/"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", marginLeft: 7 }}
                >
                  Logout
                </NavLink>
              </Navbar.Text>
            </div>
          ) : (
            <div>
              <Navbar.Text className="me-3">
                <NavLink to="/signup">Sign Up</NavLink>
              </Navbar.Text>
              <Navbar.Text className="me-3">
                <NavLink to="/signin">Sign In</NavLink>
              </Navbar.Text>
            </div>
          )}
          <Navbar.Text>
            {user ? `Signed in as: ${user.name}!` : "Signed in as: Guest"}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
