import React from 'react';
import itemOrderTab from '../styles/itemOrder.module.css';
import deleteProduct from '../controllers/eliminarProducto.js';

const OrderRow = (props) => {
  // console.log(props);
  const producto = props.producto;
  const prodOrder = props.listaProdOrder;
  const setProdOrder = props.setProductOrder;
  const {
    name, cant, price, subtotal,
  } = producto;

  return (
    <tr>
      <td className={itemOrderTab.th}>{name}</td>
      <td className={itemOrderTab.th}>{cant}</td>
      <td className={itemOrderTab.th}>{price}</td>
      <td className={itemOrderTab.th}>{subtotal}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            const newOrder = deleteProduct(prodOrder, producto.id);
            setProdOrder(newOrder);
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
