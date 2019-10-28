import React, { useState, useEffect } from 'react';
import order from '../controllers/getOrder.js';

const PintandoOrders = () => {
    const [prodOrder, setProdOrder] = useState([]);

    const allOrders = (token) => {
        order(token).then((res) => {
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
  {prodOrder.map((p) => (
   <table key={p._id}>
    <thead>
        <tr>
            <th>Cliente:{p.client}</th>
     		<th>Fecha:{p.dateEntry}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowSpan="2">{p.products.map((p) => (
              `${p.qty} ${p.product.name} `
            ))}</td>
            <td>Estado:{p.status}</td>
        </tr>
      <tr>
        <td><button type="button">Listo para servir</button></td>
        </tr>
    </tbody>
</table>
))}
    </>
    );
}

export default PintandoOrders;