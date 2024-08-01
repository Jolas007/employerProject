import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function FavoriteCard({ socks, handleDecrement, handleIncrement, deleteHandler }) {
  const navigate = useNavigate();

  const orderBy = () => {
    navigate("/favorite");
  };

  return (
    <Card style={{ width: "40rm" }}>
      <Card.Body>
        <Card.Title>{socks.name}</Card.Title>
        <Card.Text>Лучшие Носки</Card.Text>
        <div className="d-flex align-items-center">
          <Button variant="secondary" onClick={() => handleDecrement(socks.id)}>
            -
          </Button>
          <span className="mx-3">{socks.counter}</span>
          <Button variant="info" onClick={() => handleIncrement(socks.id)}>
            +
          </Button>
          <Button variant="success" onClick={orderBy}>
            Купить
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Удалить
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FavoriteCard;
