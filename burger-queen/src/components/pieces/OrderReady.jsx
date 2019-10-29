import React, {useState, useEffect} from 'react';
import btnCategory from '../styles/btnCategory.module.css';
import lineaOrder from '../styles/itemMenu.module.css';
import containerPedido from '../styles/containerPedido.module.css';
import order from '../controllers/getOrder.js';


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
        		<button className={btnCategory.btnCategory} type="submit" onClick={()=>{setStatusOrders('delivering')}}>Para Servir</button>
        		<button className={btnCategory.btnCategory} type="submit" onClick={()=>{setStatusOrders('pending')}}>Entregados</button>
        	</div>
        		<div className={lineaOrder.containerFlexIzq}>
        			{arrayOrderReady.filter((orders)=> orders.status === statusOrders).map((order)=>(
            	<div className={lineaOrder.listItemMenu} key={order._id}>
            		<p>{order.dateEntry}</p>
            		<p>fecha finalizado</p>
            		<p>{order.client}</p>
            		<p>{order.products.map((p) => (`${p.qty} ${p.product.name} `))}</p>
            		<button>Entregar</button>
          		</div>
        			))}
         		</div>
        	</div>
    	</div>
    </>

  );
};

export default OrderReady;