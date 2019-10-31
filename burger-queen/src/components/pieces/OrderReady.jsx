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

  useEffect(() => {
    allOrderReady('el token');
  }, []);

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
                      {/* <button type="button" onClick={(e) => {
                      e.preventDefault();
                      putOrders('el token', order.userId, order.client, order.products, order.status).then((res) => {
                        console.log(res);
                      })
                    }}>Listo para servir</button> */}

                      <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(e.target.orden.value);
                        putOrders('el token', order.userId, order.client, order.products, e.target.value).then((res) => {
                          console.log(res);
                        });
                      }}>
                        <p>Seleccione opción:</p>
                        <input type="radio" name="orden" value="canceled" onClick={(e) => {console.log(e.target.value)}} />Canceled
                        <input type="radio" name="orden" value="delivering" onClick={(e) => {console.log(e.target.value)}} />Delivering
                        <input type="submit" value="Aceptar" />
                      </form>
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