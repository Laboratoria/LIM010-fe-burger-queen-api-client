import React, { useState, useEffect } from 'react';
import PintandoOrders from './PintandoOrders.jsx';
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
      <div>
        <button type="submit" onClick={() => { setTypeOrderStatus('pending'); }}>Pendientes</button>
        <button type="submit" onClick={() => { setTypeOrderStatus('delivered'); }}>Entregados</button>
      </div>
      <div>
        {
				prodOrder.filter((o) => o.status === typeOrderStatus).map((orders) => (
  				<PintandoOrders listOrder={orders} key={orders._id} />
				))
			}
      </div>
    </>
  );
};

export default FilterStatusOrder;
