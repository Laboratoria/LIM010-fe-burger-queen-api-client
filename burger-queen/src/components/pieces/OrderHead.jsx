import React from 'react';
import itemOrderTab from '../styles/itemOrder.module.css';

const OrderHead = () => (

    <thead>
      <tr colSpan="3">
        <th className={itemOrderTab.th}>Item</th>
        <th className={itemOrderTab.th}>Cantidad </th>
        <th className={itemOrderTab.th}>Precio</th>
      </tr>
    </thead>

);

export default OrderHead;
