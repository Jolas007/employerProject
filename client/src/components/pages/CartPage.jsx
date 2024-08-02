import React from "react";

export default function CartPage({ cartItems }) {
  return (
    <div>
      <h2>Здесь будут отображаться товары в корзине</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap", // Позволяет элементам переходить на следующую строку при необходимости
            padding: 0,
            margin: 0,
            listStyleType: "none",
          }}
        >
          {cartItems.map((item, index) => (
            <li
              key={index}
              style={{
                margin: "10px",
                position: "relative",
                width: "300px",
                height: "600px",
                boxSizing: "border-box",
                border: "3px solid #000", // Граница носка
                borderRadius: "15px", // Закругление углов (по желанию)
                overflow: "hidden", // Скрытие переполняющего содержимого
                backgroundColor: "#fff", // Цвет фона элемента списка
              }}
            >
              <p
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  zIndex: 5,
                  color: "#000",
                  fontWeight: "bold",
                }}
              ></p>
              <div
                style={{
                  width: "100%",
                  height: "100%",
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
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  right: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: 0,
                    padding: 0,
                  }}
                ></label>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
