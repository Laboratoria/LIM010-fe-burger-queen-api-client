import React from 'react';
import itemOrderTab from '../styles/itemOrder.module.css';

const HeadTableOrder = () => (
  <table>
    <thead>
      <tr>
        <th className={itemOrderTab.th}>Item</th>
        <th className={itemOrderTab.th}>Cantidad </th>
        <th className={itemOrderTab.th}>Precio</th>
      </tr>
    </thead>
    {/* <tbody>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$80</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Sum</td>
        <td>$180</td>
      </tr>
    </tfoot> */}
  </table>
);

export default HeadTableOrder;
