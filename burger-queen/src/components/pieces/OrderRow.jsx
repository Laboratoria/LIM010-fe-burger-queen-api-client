import React from 'react';
import itemOrderTab from '../styles/itemOrder.module.css';
import deleteProduct from '../controllers/eliminarProducto.js';
import itemOrder from '../styles/itemOrder.module.css';
import deleteImage from '../images/eliminar.png';

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
      <td className={itemOrderTab.td}>{name}</td>
      <td className={itemOrderTab.td}>{cant}</td>
      <td className={itemOrderTab.td}>{`S/.${price}`}</td>
      <td className={itemOrderTab.td}>{`S/.${subtotal}`}</td>
      <td className={itemOrderTab.td}>
        <button
          className={itemOrder.btnIcono}
          type="button"
          onClick={() => {
            const newOrder = deleteProduct(prodOrder, producto.id);
            setProdOrder(newOrder);
          }}
        >
          <img className={itemOrder.btnDelete} src={deleteImage} alt="delete" />
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
