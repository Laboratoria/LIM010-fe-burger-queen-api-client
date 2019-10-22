import React, {useState, useEffect} from 'react';
import products from '../controllers/products.js';

// const [prodData, setProdData] = useState([]);
const PintarProductos = () => {
  const [prodData, setProdData] = useState([]);
  const [prodType, setProdType] = useState('desayuno');

  const productos = (token) => {
    products(token).then((res) => {
     setProdData(res.products); 
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    productos('el token')
  }, [])
  // const getProduct = (e) =>{
  //   setProdData(e);
  // } 

  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          setProdType('desayuno')
        }}>
          Desayuno
      </button>
      <button
        type="submit"
        onClick={() => {
          setProdType('almuerzo')
        }}>
          Almuerzo
      </button>
      {prodData.filter(p => p.type === prodType).map((p) => (
        <button key={p.id}>{p.name}</button>
      ))}
    </div>
  );
};

export default PintarProductos;
