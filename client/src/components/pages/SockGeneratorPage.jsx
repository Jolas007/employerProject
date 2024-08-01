import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SockGenerator from "../ui/SockGenerator";
import axiosInstance from "../../axiosInstance";

export default function GeneratorPage() {
  const [myImages, setMyImages] = useState([]);
  const [myPatterns, setMyPatterns] = useState([]);
  useEffect(() => {
    axiosInstance("/socks/account/image").then(({ data }) => setMyImages(data));
  }, []);
  useEffect(() => {
    axiosInstance("/socks/account/pattern").then(({ data }) =>
      setMyPatterns(data)
    );
  }, []);
  const [isAdded, setisAdded] = useState(false);
  const addToCartHandler = async (obj) => {
    console.log(obj);
    const response = await axiosInstance.post(`/socks/account/basket/add`, obj);
    setisAdded((prev) => prev === false && true);
    console.log(isAdded);
  };
  return (
    <>
      <Row className="mt-3">
        <h1>Выберите дизайн</h1>
      </Row>
      <Row className="mt-3">
        <SockGenerator
          addToCartHandler={addToCartHandler}
          isAdded={isAdded}
          myImages={myImages}
          myPatterns={myPatterns}
        />
      </Row>
    </>
  );
}
