import React from 'react';
import itemOrderTab from '../styles/itemOrder.module.css';

const OrderHead = () => (
  <thead>
    <tr colSpan="5">
      <th className={itemOrderTab.th}>Item</th>
      <th className={itemOrderTab.th}>Cantidad </th>
      <th className={itemOrderTab.th}>Precio</th>
      <th className={itemOrderTab.th}>Subtotal</th>
      <th className={itemOrderTab.th}>Eliminar Producto</th>
    </tr>
  </thead>
);

export default OrderHead;
