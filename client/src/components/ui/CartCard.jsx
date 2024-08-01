import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CartCard({
  socks,
  handleIncrement,
  handleDecrement,
  deleteHandler,
  colors,
}) {
  const navigate = useNavigate();

  const orderBy = () => {
    navigate("/favorite");
  };

  const color =
    colors.find((color) => color.id === socks.colorId)?.name ||
    "Неизвестный цвет";

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{color}</Card.Title>
        <Card.Text>Ваш выбор</Card.Text>
        <div className="d-flex align-items-center">
          <Button variant="secondary" onClick={() => handleDecrement()}>
            -
          </Button>
          <span className="mx-3">{socks.counter}</span>
          <Button variant="info" onClick={() => handleIncrement()}>
            +
          </Button>
          <Button variant="success" onClick={orderBy}>
            Купить
          </Button>
          <Button variant="danger" onClick={() => deleteHandler(socks.id)}>
            Удалить
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
