import React from 'react';
import products from '../controllers/products.js';

const PintarProductos = () => {
  const productos = (token) => {
    products(token).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  };
  return (
    <div>
      <button type="submit" onClick={productos}>Productos</button>
    </div>
  );
};

export default PintarProductos;
