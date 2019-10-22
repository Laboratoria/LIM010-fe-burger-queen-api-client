import React from 'react';
import products from '../controllers/products.js';

// const [prodData, setProdData] = useState([]);
const PintarProductos = () => {
  const productos = (token) => {
    products(token).then((res) => (
      res.productos.map((item) => console.log(item.name),
        //   <button key={item.id}>{item.name}</button>
      )
    )).catch((error) => {
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
