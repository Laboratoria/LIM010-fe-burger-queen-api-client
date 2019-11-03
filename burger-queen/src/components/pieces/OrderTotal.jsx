import React from 'react';
import itemOrderTab from '../styles/itemOrder.module.css';

const OrderTotal = (props) => {
  const prodOrder = props.listaProdOrder;
  // const setProdOrder = props.setProductOrder;

  const totalProd = (arrayProduct) => {
    const reducer = (sum, array) => sum + array.subtotal;
    const totalProduct = arrayProduct.reduce(reducer, 0);
    return totalProduct;
  };

  return (
    <tr className={itemOrderTab.txtTable}>
      <td className={itemOrderTab.td} />
      <td className={itemOrderTab.td} />
      <td className={itemOrderTab.td} />
      <td className={`${itemOrderTab.td} ${itemOrderTab.txtTotal}`}>
Total S/.
        {totalProd(prodOrder)}
        {' '}
      </td>
    </tr>
  );
};

export default OrderTotal;
