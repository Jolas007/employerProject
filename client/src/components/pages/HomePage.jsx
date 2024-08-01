import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Row>
        <Col>
          <h1>Добро пожаловать в Lost Socks</h1>
          <p>
            Мы рады приветствовать вас на нашем сайте. Здесь вы найдете лучшие
            носки в мире, которые подходят для любых приключений.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link
            to="/generator"
            style={{
              color: "white",
              textDecoration: "none",
              backgroundColor: "#343a40",
            }}
            className="btn"
          >
            Перейти к генератору носков
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
