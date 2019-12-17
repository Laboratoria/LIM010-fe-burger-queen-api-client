import React, { useState, useEffect } from 'react';
import btnCategory from '../styles/btnCategory.module.css';
import lineaOrder from '../styles/itemMenu.module.css';
import order from '../controllers/getOrder.js';
import putOrders from '../controllers/putOrders';
import style1 from '../styles/listOrders.module.css';


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
      <div>
        <div>
          <div className={lineaOrder.containerFlexIzq}>
            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setStatusOrders('pending'); }}>Listos para Servir</button>
            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setStatusOrders('delivering'); }}>Entregados</button>
          </div>
          <div>
            {arrayOrderReady.filter((orders) => orders.status === statusOrders).map((order) => (

              <div className={`${style1.marginListOrder}`} key={order._id}>
                <div className={`${style1.headerOrder} ${style1.border}`}>
                  <div>
                  <p className={`${style1.headerDate}`}><strong>{order.dateEntry}</strong></p>
                    <p><strong>
                      Cliente:
                      {' '}
                      {order.client}
                    </strong></p>
                  </div>
                </div>
                <div className={`${style1.border}`}>
                  {order.products.map((p) => (<p className={style1.marginItem} key={p.product.id}>{`${p.qty} ${p.product.name}`}</p>))}
                </div>
                {statusOrders === 'delivering' ?
                  ('')
                  : (
                    <div className={style1.footerListOrder}>
                      <button className='btn btn-primary' type="button" name="orden" onClick={() => {
                        putOrders('el token', order.userId, order.client, order.products, 'canceled').then((res) => {
                          console.log(res);
                        });
                      }}
                      >Canceled</button>
                      <button className='btn btn-primary' type="button" name="orden" onClick={() => {
                        putOrders('el token', order.userId, order.client, order.products, 'delivering').then((res) => {
                          console.log(res);
                        });
                      }}
                      >Delivering</button>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderReady;
