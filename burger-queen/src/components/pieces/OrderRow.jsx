import React, { useState } from 'react';
import itemOrderTab from '../styles/itemOrder.module.css';
import deleteProduct from '../controllers/eliminarProducto.js';
const OrderRow = (props) => {
  const producto = props.producto;
  const { name, cant, price } = producto;
  const [prodOrder, setProdOrder] = useState([]);

  return (
    <tr>
      <td className={itemOrderTab.th}>{name}</td>
      <td className={itemOrderTab.th}>{cant}</td>
      <td className={itemOrderTab.th}>{price}</td>
      <td><button onClick={()=>{
        const newOrder = deleteProduct(prodOrder, producto.id);
        setProdOrder(newOrder);
      }}>Eliminar</button></td>
    </tr>
  );
};

export default OrderRow;