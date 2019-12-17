import React, { useState, useEffect } from 'react';
// import OrderListHead from './orderListHead.jsx';
// import OrderListRowW from '../pieces/OrderListRowW.jsx';
import order from '../controllers/getOrder.js';

const PintandoListPedidos = () => {
  const [arrayOrders, setArrayOrders] = useState([]);


  const allOrders = (token) => {
    order(token).then((res) => {
      console.log(res);
      setArrayOrders(res);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    allOrders('el token');
  }, []);
  // <h1>Pedidos para Entregar</h1>;
  return (
    <>
      <h1>Pedidos para Entregar</h1>
;
      {arrayOrders.map((order) => (
        <div key={order._id}>
          <p>{order.dateEntry}</p>
          <p>fecha finalizado</p>
          <p>{order.client}</p>
          <p>{order.products.map((p) => (`${p.qty} ${p.product.name} `))}</p>
          <button>Entregar</button>
        </div>
      ))}
    </>

  );
};

export default PintandoListPedidos;
