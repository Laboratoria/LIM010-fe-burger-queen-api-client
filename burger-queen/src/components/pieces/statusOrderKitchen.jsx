import React, { useState, useEffect } from 'react';
import btnCategory from '../styles/btnCategory.module.css';
import lineaOrder from '../styles/itemMenu.module.css';
import order from '../controllers/getOrder.js';
import putOrders from '../controllers/putOrders';
import style1 from '../styles/listOrders.module.css';
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
      <div>
        <div>
          <div className={lineaOrder.containerFlexIzq}>
            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setTypeOrderStatus('pending'); }}>Pendientes</button>
            <button className={btnCategory.btnCategory} type="submit" onClick={() => { setTypeOrderStatus('delivering'); }}>Entregados</button>
          </div>
          <div>
            {prodOrder.filter((orders) => orders.status === typeOrderStatus).map((order) => (

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
                {typeOrderStatus === 'delivering' ?
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
export default FilterStatusOrder;
