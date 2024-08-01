import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#343a40", // bg-dark color
    color: "white", // text-white color
    padding: "0.5em 0", // reduced padding to make it smaller
    fontSize: "0.8em",
    zIndex: 999,
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col className="text-center">
            <h5 style={{ fontSize: "1.2em" }}>Контакты</h5>
            <ul className="list-unstyled">
              <li>Email: lostSocks@socks.com</li>
              <li>ул. Тверская, д. 7, Москва, Россия</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
