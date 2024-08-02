import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SockGenerator from "../ui/SockGenerator";
import axiosInstance from "../../axiosInstance";

export default function GeneratorPage({ addToCartHandler }) {
  const [myImages, setMyImages] = useState([]);
  const [myPatterns, setMyPatterns] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    axiosInstance("/socks/account/image").then(({ data }) => setMyImages(data));
  }, []);
  useEffect(() => {
    axiosInstance("/socks/account/pattern").then(({ data }) =>
      setMyPatterns(data)
    );
  }, []);

  const localAddToCartHandler = async (obj) => { // Переименовал функцию
    console.log(obj);
    const response = await axiosInstance.post(`/socks/account/basket/add`, obj);
    setIsAdded(true);
  };

  return (
    <>
      <Row className="mt-3">
        <h1>Выберите дизайн</h1>
      </Row>
      <Row className="mt-3">
        <SockGenerator
          addToCartHandler={(item) => {
            addToCartHandler(item);
            setIsAdded(true);
          }}
          isAdded={isAdded}
          myImages={myImages}
          myPatterns={myPatterns}
        />
      </Row>
    </>
  );
}
