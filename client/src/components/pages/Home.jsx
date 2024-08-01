import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Добро пожаловать в наш магазин!</h1>
      <p>Создайте свой уникальный дизайн носков с нашим генератором.</p>
      <Link to="/generator">Перейти к генератору носков</Link>
    </div>
  );
}

export default Home;
