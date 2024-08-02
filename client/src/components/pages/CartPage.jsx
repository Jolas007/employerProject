import React from "react";

export default function CartPage({ cartItems }) {
  return (
    <div>
      <h2>Здесь будут отображаться товары в корзине</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li
              key={index}
              style={{ position: "relative", marginBottom: "20px" }}
            >
              <p>Цвет: {item.color}</p>
              <div
                style={{
                  width: "300px",
                  height: "600px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: item.color,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    opacity: 0.7,
                  }}
                />
                {item.pattern && (
                  <img
                    src={item.pattern.name}
                    alt="Узор"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 2,
                      opacity: 0.5,
                      mixBlendMode: "multiply",
                    }}
                  />
                )}
                {item.image && (
                  <img
                    src={item.image.name} // Предполагаю, что здесь путь к изображению
                    alt="Изображение"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 3,
                    }}
                  />
                )}
                <img
                  src="/socksfinal.png" // Фиксированное изображение носка
                  alt="Носок"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 4,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
