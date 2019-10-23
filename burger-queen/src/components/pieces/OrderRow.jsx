import React from 'react';
import itemOrderTab from '../styles/itemOrder.module.css';

const OrderRow = () => {
  const name = 'Cafe';
  const price = '7';
  const cant = '2';

  return (
    <tr>
      <td className={itemOrderTab.th}>{name}</td>
      <td className={itemOrderTab.th}>{cant}</td>
      <td className={itemOrderTab.th}>{price}</td>
      <td><button>Eliminar</button></td>
    </tr>
  );
};

export default OrderRow;
