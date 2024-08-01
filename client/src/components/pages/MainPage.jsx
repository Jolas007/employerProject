import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePage from "./HomePage";

export default function MainPage() {
  const [socks, setSocks] = useState([]);

  useEffect(() => {
    axiosInstance.get("/socks").then((res) => setSocks(res.data));
  }, []);

  return (
    <>
      <Container>
        <HomePage />
      </Container>
    </>
  );
}
