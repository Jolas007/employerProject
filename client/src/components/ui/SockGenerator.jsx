import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function SockGenerator({ addToCartHandler, isAdded, myImages, myPatterns }) {
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [selectedImage, setSelectedImage] = useState();
  const [selectedPattern, setSelectedPattern] = useState();

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handlePatternClick = (image) => {
    setSelectedPattern(image);
  };
  const deletePicHandler = (event) => {
    setSelectedImage(null);
    setSelectedPattern(null);
  };
  //   const deletePatHandler = (event) => {
  //     setSelectedPattern(null);
  //   };

  return (
    <Container>
      <Row
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Col xs={6} md={4}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ position: 'relative', width: '500px' }}>
              {selectedPattern && (
                <Image
                  src={selectedPattern}
                  style={{
                    position: 'absolute',
                    top: '15%',
                    left: '57%',
                    width: '100px',
                    height: 'auto',
                    zIndex: 7,
                  }}
                />
              )}
              <Image
                src="/socksfinal.png"
                style={{
                  backgroundColor: backgroundColor,
                  width: '100%',
                  height: 'auto',
                  border: '5px solid #ddd',
                  borderRadius: '10px',
                  zIndex: 6,
                }}
              />
              {selectedImage && (
                <Image
                  src={selectedImage}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '55%',
                    width: '100px',
                    height: 'auto',
                    zIndex: 7,
                  }}
                />
              )}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '10px',
              }}
            >
              {isAdded && (
                <Button
                  style={{
                    width: 'auto',
                    fontSize: '22px',
                    whiteSpace: 'nowrap',
                  }}
                  onClick={() => (window.location.href = '/basket')}
                >
                  {'Перейти в корзину'}
                </Button>
              )}
              {!isAdded && (
                <Button
                  style={{
                    width: 'auto',
                    fontSize: '22px',
                    whiteSpace: 'nowrap',
                  }}
                  onClick={() =>
                    addToCartHandler({
                      color: backgroundColor || 'black',
                      image: selectedImage || null,
                      pattern: selectedPattern || null,
                    })
                  }
                >
                  {'Добавить в корзину'}
                </Button>
              )}
            </div>
          </div>
        </Col>
        <Col
          xs={6}
          md={4}
          style={{
            marginLeft: '50px',
          }}
        >
          <Form.Group controlId="colorSelect">
            <Form.Label>Выберите цвет</Form.Label>
            <Form.Control as="select" value={backgroundColor} onChange={handleColorChange}>
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

          <div
            style={{
              display: 'flex',
              overflowX: 'scroll',
              whiteSpace: 'nowrap',
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '10px',
            }}
          >
            {myImages.map((image, index) => (
              <Image
                key={index}
                src={image.name}
                style={{
                  width: '100px',
                  height: 'auto',
                  margin: '0 10px',
                  cursor: 'pointer',
                  border: selectedImage === image ? '2px solid #000' : '2px solid transparent',
                  zIndex: 1,
                }}
                onClick={() => handleImageClick(image.name)}
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              overflowX: 'scroll',
              whiteSpace: 'nowrap',
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '10px',
              marginTop: '10px', // Добавляем отступ сверху
            }}
          >
            {myPatterns.map((image, index) => (
              <Image
                key={index}
                src={image.name}
                style={{
                  width: '100px',
                  height: 'auto',
                  margin: '0 10px',
                  cursor: 'pointer',
                  border: selectedImage === image ? '2px solid #000' : '2px solid transparent',
                }}
                onClick={() => handlePatternClick(image.name)}
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          >
            <Button
              style={{
                width: 'auto',
                fontSize: '16px',
                whiteSpace: 'nowrap',
              }}
              onClick={() => deletePicHandler()}
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
