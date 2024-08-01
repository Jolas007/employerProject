import axiosInstance from "../../axiosInstance";
import React, { useState, useEffect } from "react";
import CartCard from "../ui/CartCard";

export default function CartPage() {
  const [socks, setSocks] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axiosInstance("/socks").then(({ data }) => {
      setSocks(data);
    });

    axiosInstance("/colors").then(({ data }) => {
      setColors(data);
    });
  }, []);

  const handleIncrement = (id) => {
    setSocks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, counter: item.counter + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setSocks((prev) =>
      prev.map((item) =>
        item.id === id && item.counter > 0
          ? { ...item, counter: item.counter - 1 }
          : item
      )
    );
  };

  const deleteHandler = async (id) => {
    try {
      await axiosInstance.delete(`/socks/delete/${id}`);
      setSocks((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting sock:", error);
    }
  };

  return (
    <div className="container">
      <h2>Cart</h2>
      <div className="row">
        {socks.map((el) => (
          <div key={el.id} className="col-4">
            <CartCard
              socks={el}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              deleteHandler={deleteHandler}
              colors={colors}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
