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
   <table>
    <thead>
        <tr>
            <th>Cliente:</th>
     		<th>Fecha:</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowSpan="2">Ordenes</td>
            <td>Estado:</td>
        </tr>
      <tr>
        <td>Listo para servir</td>
        </tr>
    </tbody>
</table>
{prodOrder.map((p) => (
  <button
    type="button"
    key={p._id}
  >
    {p.client}
  </button>
))}
    </>
    );
}

export default PintandoOrders;