import React, { useState, useEffect } from 'react';
import btnCategory from '../styles/btnCategory.module.css';
import lineaOrder from '../styles/itemMenu.module.css';
import containerPedido from '../styles/containerPedido.module.css';
import order from '../controllers/getOrder.js';
import putOrders from '../controllers/putOrders';
import style from '../styles/tableOrders.module.css';


const OrderReady = () => {
  const [arrayOrderReady, setArrayOrderReady] = useState([]);
  const [statusOrders, setStatusOrders] = useState('pending');


  const allOrderReady = (token) => {
    order(token).then((res) => {
      console.log(res);
      setArrayOrderReady(res);
    }).catch((error) => {
      console.log(error);
    });
  };

  setInterval(useEffect(() => {
    allOrderReady('el token');
  }, []), 1000);

  return (
    <>
      <div className={containerPedido.containerPedido}>
        <div className={containerPedido.containerListMenu}>
          <div className={lineaOrder.containerFlexIzq}>
            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setStatusOrders('pending') }}>Listos para Servir</button>
            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setStatusOrders('delivering') }}>Entregados</button>
          </div>
          <div className={lineaOrder.containerFlexIzq}>
            {arrayOrderReady.filter((orders) => orders.status === statusOrders).map((order) => (
              <table key={order._id} className={style.table}>
                <thead>
                  <tr>
                    <th>Cliente:{order.client}</th>
                    <th>Fecha:{order.dateEntry}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="2">{order.products.map((p) => (`${p.qty} ${p.product.name} `))}</td>
                    <td>Estado:{order.status}</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">
                      <button type="button" name="orden" onClick={(e) => {
                        putOrders('el token', order.userId, order.client, order.products, 'canceled').then((res) => {
                          console.log(res);
                        });
                      }}
                      >Canceled</button>
                      <button type="button" name="orden" onClick={(e) => {
                        putOrders('el token', order.userId, order.client, order.products, 'delivering').then((res) => {
                          console.log(res);
                        });
                      }}
                      >Delivering</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </>

  );
};

export default OrderReady;