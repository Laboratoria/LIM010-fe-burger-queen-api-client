import React, { useState, useEffect } from 'react';
// import PintandoOrders from './PintandoOrders.jsx';
import btnCategory from '../styles/btnCategory.module.css';
import lineaOrder from '../styles/itemMenu.module.css';
import containerPedido from '../styles/containerPedido.module.css';
import order from '../controllers/getOrder.js';

const FilterStatusOrder = () => {
  const [prodOrder, setProdOrder] = useState([]);
  const [typeOrderStatus, setTypeOrderStatus] = useState('pending');

  const allOrders = (token) => {
    order(token).then((res) => {
      console.log(res);
      setProdOrder(res);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    allOrders('el token');
  }, []);
  return (
    <>
      <div className={containerPedido.containerPedido}>
        <div className={containerPedido.containerListMenu}>
        	<div className={lineaOrder.containerFlexIzq}>
            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setTypeOrderStatus('pending')}}>Pendientes</button>
            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setTypeOrderStatus('delivered') }}>Entregados</button>
          </div>
          <div className={lineaOrder.containerFlexIzq}>
            {
				      prodOrder.filter((o) => o.status === typeOrderStatus).map((orders) => (
              // <PintandoOrders listOrder={orders} key={orders._id} />
              <div key={orders._id}>
              <p>{orders.client}</p>
              <p>{orders.dateEntry}</p>
              <p>{orders.status}</p>
              <button>Completado</button>
              </div>
				      ))}
         	</div>
        </div>
    	</div>
    </>
  );
};

export default FilterStatusOrder;
