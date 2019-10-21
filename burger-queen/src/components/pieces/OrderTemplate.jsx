import React from 'react';
import lineaOrder from '../styles/itemMenu.module.css';
import OrderTotal from './OrderTotal.jsx';

// import OrderCustomer from './OrderCustomer.jsx';

const OrderTemplate = () => (
  <form>
    <div>
      <p className={lineaOrder.lineaOrder}>Pedido N° : </p>
    </div>
    <div className={lineaOrder.clientInput}>
      <label>Cliente : </label>
      <input placeholder="Nombre del cliente" className={lineaOrder.nameInput} />
    </div>
    <OrderTotal />
    <div className={lineaOrder.footerSideOrder}>
      <button className={lineaOrder.btnEnviar}>ENVIAR</button>
      <button className={lineaOrder.btnEnviar}>CANCELAR</button>
    </div>
  </form>
);

export default OrderTemplate;
