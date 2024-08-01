import axiosInstance from "../../axiosInstance";
import React, { useState, useEffect } from "react";
import CartCard from "../ui/CartCard";

export default function CartPage() {
  const [socks, setSocks] = useState([]);
  useEffect(() => {
    axiosInstance("/socks").then(({ data }) => setSocks(data));
  }, []);

  const deleteHandler = async (id) => {
    await axiosInstance.delete(`/socks/delete/${id}`);
    setSocks((prev) => prev.filter((item) => item.id !== id));
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
            />
          </div>
        ))}
      </div>
    </div>
  );
}
