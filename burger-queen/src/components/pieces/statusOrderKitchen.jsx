import React, { useState, useEffect } from 'react';
import btnCategory from '../styles/btnCategory.module.css';
import lineaOrder from '../styles/itemMenu.module.css';
import containerPedido from '../styles/containerPedido.module.css';
import order from '../controllers/getOrder.js';
import putOrders from '../controllers/putOrders';
// import putOrder from '../controllers/putOrder.js';
// import getUserId from '../controllers/getUserId.js';

const FilterStatusOrder = () => {
  const [prodOrder, setProdOrder] = useState([]);
  const [typeOrderStatus, setTypeOrderStatus] = useState('pending');
  // const [userId, setUserId] = useState('');
  // const [nameClient, setNameClient] = useState('');
  // const [arrayDelivering, setArrayDelivering] = useState([]);

  const allOrders = (token) => {
    order(token).then((res) => {
      console.log(res);
      setProdOrder(res);
    }).catch((error) => {
      console.log(error);
    });
  };

  // const getDataUser = (token) => {
  //   getUserId(token).then((dataUser) => {
  //     console.log(dataUser.id);
  //     setUserId(dataUser.id);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // };

  // const allOrdersChange = (token, usersId, client, products) => {
  //   putOrder(token, usersId, client, products).then((res) => {
  //     console.log(res);
  //     setNameClient(res.client);

  //     // setArrayDelivering(res);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // };

  useEffect(() => {
    allOrders('el token');
  }, []);
  // getDataUser('el token');

  return (
    <>
      <div className={containerPedido.containerPedido}>
        <div className={containerPedido.containerListMenu}>
          <div className={lineaOrder.containerFlexIzq}>

            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setTypeOrderStatus('pending'); }}>Pendientes</button>
            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setTypeOrderStatus('delivering'); }}>Entregados</button>
          </div>
          <div className={lineaOrder.containerFlexIzq}>
            {
				      prodOrder.filter((o) => o.status === typeOrderStatus).map((orders) => (
				        // <PintandoOrders listOrder={orders} key={orders._id} />
  <form
    key={orders._id}
    onSubmit={(e) => {
      e.preventDefault();
      putOrders('el token', orders.userId, orders.client, orders.products, e.target.value).then((res) => {
        console.log(res);
      });
    }}
  >
    <p>{orders.client}</p>
    <p>{orders.dateEntry}</p>
    <p>{orders.status}</p>
    <button type="submit" name="order" value="canceled" onClick={(e) => { console.log(e.target.value); }}> Cancelar</button>
    <button type="submit" name="order" value="delivering" onClick={(e) => { console.log(e.target.value); }}>  Entregar</button>
  </form>
				      ))
}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterStatusOrder;
