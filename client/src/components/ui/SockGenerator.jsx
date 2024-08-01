import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SockGenerator({ addToCartHandler, isAdded }) {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPattern, setSelectedPattern] = useState(null);

  // Моковые данные для узоров и изображений
  const mockPatterns = [
    {
      name: "https://gas-kvas.com/uploads/posts/2023-01/1674487918_gas-kvas-com-p-risunki-uzori-rossii-14.png",
    },
    {
      name: "https://free-png.ru/wp-content/uploads/2021/10/free-png.ru-344.png",
    },
    {
      name: "https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-pryamoi-uzor-na-prozrachnom-fone-35.png",
    },
    {
      name: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612785028_6-p-goluboi-uzor-na-belom-fone-6.png",
    },
    {
      name: "http://png.pngtree.com/png-clipart/20220313/original/pngtree-fullcolor-flowers-corner-set-nature-vector-png-image_7431897.png",
    },
    // Добавьте остальные узоры
  ];

  const mockImages = [
    {
      name: "https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-babochka-dlya-detei-na-prozrachnom-fone-3.png",
    },
    { name: "https://pngicon.ru/file/uploads/malina.png" },
    {
      name: "https://www.conphetti.ru/upload/iblock/842/7l36l3splkd1u1vpftn0hfe92hzv6itu.jpg",
    },
    { name: "https://pngicon.ru/file/uploads/ezhik2.png" },
    {
      name: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612851481_2-p-krasnaya-mashina-bez-fona-2.png",
    },
    // Добавьте остальные изображения
  ];

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handlePatternClick = (pattern) => {
    setSelectedPattern(pattern);
  };

  const deletePicHandler = () => {
    setSelectedImage(null);
    setSelectedPattern(null);
    setBackgroundColor("black");
  };

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Col xs={6} md={4}>
          <div
            style={{
              position: "relative",
              width: "300px",
              height: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {/* Слой цвета */}
            <div
              style={{
                backgroundColor: backgroundColor,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                opacity: 0.7,
              }}
            />

            {/* Слой с выбранным узором */}
            {selectedPattern && (
              <Image
                src={selectedPattern.name}
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "10%",
                  width: "80%",
                  height: "auto",
                  zIndex: 2,
                  opacity: 0.5,
                  mixBlendMode: "multiply", // Применение стиля наложения
                }}
                alt="Pattern"
              />
            )}

            {/* Слой с выбранным изображением */}
            {selectedImage && (
              <Image
                src={selectedImage.name}
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  width: "30%",
                  height: "auto",
                  zIndex: 3,
                }}
                alt="Selected"
              />
            )}

            {/* Изображение носка */}
            <Image
              src="/socksfinal.png"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 4,
              }}
              alt="Sock"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "10px",
            }}
          >
            {isAdded ? (
              <Button
                style={{
                  width: "auto",
                  fontSize: "22px",
                  whiteSpace: "nowrap",
                }}
                onClick={() => (window.location.href = "/basket")}
              >
                Перейти в корзину
              </Button>
            ) : (
              <Button
                style={{
                  width: "auto",
                  fontSize: "22px",
                  whiteSpace: "nowrap",
                  backgroundColor: "#343a40",
                  border: "none",
                }}
                onClick={() =>
                  addToCartHandler({
                    color: backgroundColor,
                    image: selectedImage,
                    pattern: selectedPattern,
                  })
                }
              >
                Добавить в корзину
              </Button>
            )}
          </div>
        </Col>
        <Col xs={6} md={4} style={{ marginLeft: "50px" }}>
          <Form.Group controlId="colorSelect">
            <Form.Label>Выберите цвет</Form.Label>
            <Form.Control
              as="select"
              value={backgroundColor}
              onChange={handleColorChange}
            >
              <option>Выберите цвет</option>
              <option value="red">Красный</option>
              <option value="blue">Синий</option>
              <option value="green">Зеленый</option>
              <option value="black">Черный</option>
              <option value="white">Белый</option>
              <option value="yellow">Желтый</option>
              <option value="orange">Оранжевый</option>
              <option value="purple">Фиолетовый</option>
              <option value="pink">Розовый</option>
              <option value="gray">Серый</option>
              <option value="beige">Бежевый</option>
              <option value="brown">Коричневый</option>
            </Form.Control>
          </Form.Group>

          <Form.Label>Выберите узор</Form.Label>
          <div
            style={{
              display: "flex",
              overflowX: "scroll",
              whiteSpace: "nowrap",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            {mockPatterns.map((pattern, index) => (
              <Image
                key={index}
                src={pattern.name}
                style={{
                  width: "100px",
                  height: "auto",
                  margin: "0 10px",
                  cursor: "pointer",
                  border:
                    selectedPattern === pattern
                      ? "2px solid #000"
                      : "2px solid transparent",
                }}
                onClick={() => handlePatternClick(pattern)}
              />
            ))}
          </div>
          <Form.Label>Выберите изображение</Form.Label>
          <div
            style={{
              display: "flex",
              overflowX: "scroll",
              whiteSpace: "nowrap",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            {mockImages.map((image, index) => (
              <Image
                key={index}
                src={image.name}
                style={{
                  width: "100px",
                  height: "auto",
                  margin: "0 10px",
                  cursor: "pointer",
                  border:
                    selectedImage === image
                      ? "2px solid #000"
                      : "2px solid transparent",
                }}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Button
              style={{
                width: "auto",
                fontSize: "16px",
                whiteSpace: "nowrap",
                backgroundColor: "#343a40",
                border: "none",
              }}
              onClick={deletePicHandler}
            >
              Сбросить все
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SockGenerator;
