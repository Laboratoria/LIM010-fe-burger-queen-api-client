import React, {useState, useEffect} from 'react';
import products from '../controllers/products.js';
import btnCategory from '../styles/btnCategory.module.css';
import itemMenu from '../styles/itemMenu.module.css';
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

  return (
    <div>
      <button
        className={btnCategory.btnCategory}
        type="submit"
        onClick={() => {
          setProdType('desayuno')
        }}>
          Desayuno
      </button>
      <button
        className={btnCategory.btnCategory}
        type="submit"
        onClick={() => {
          setProdType('almuerzo')
        }}>
          Almuerzo
      </button>
      {prodData.filter(p => p.type === prodType).map((p) => (
      <button className={itemMenu.listItemMenu}  key={p.id}>{p.name}</button>
      ))}
    </div>
  );
};

export default PintarProductos;
