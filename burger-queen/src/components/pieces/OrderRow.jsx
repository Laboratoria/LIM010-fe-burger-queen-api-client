import React from 'react';
import itemOrderTab from '../styles/itemOrder.module.css';

const OrderRow = (props) => {
  const producto = props.producto;
  const { name, cant, price } = producto;

  return (
    <tr>
      <td className={itemOrderTab.th}>{name}</td>
      <td className={itemOrderTab.th}>{cant}</td>
      <td className={itemOrderTab.th}>{price}</td>
      {/* <td className={itemOrderTab.th}>{subtotal}</td> */}
      <td><button>Eliminar</button></td>
    </tr>
  );
};

export default OrderRow;