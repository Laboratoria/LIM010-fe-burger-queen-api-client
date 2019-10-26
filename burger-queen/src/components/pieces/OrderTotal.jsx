import React from 'react';
import totalOrder from '../styles/itemMenu.module.css';

const OrderTotal = (props) => {
const prodOrder = props.listaProdOrder;
// const setProdOrder = props.setProductOrder;

const totalProd=(arrayProduct)=>{
  const reducer = (sum, array) => sum + array.subtotal;
  const totalProduct = arrayProduct.reduce(reducer, 0);
  return totalProduct;
};

  return(
    <tr>
      <td className={totalOrder.totalOrder}>Total S/{totalProd(prodOrder)} </td>
    </tr>
  );
};

export default OrderTotal;
