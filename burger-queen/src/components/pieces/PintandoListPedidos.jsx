import React from 'react';
import OrderListHead from '../pieces/orderListHead.jsx';
// import OrderListRowW from '../pieces/OrderListRowW.jsx';

const PintandoListPedidos = () => {
	return(
	<>
		<h1>Lista de pedido - Mesero Carlos</h1>
			<table>
				<thead>
					<OrderListHead/>
				</thead>
				<tbody>
					{/* <OrderListRowW/> */}
				</tbody>
			</table>
	</>
	);
};

export default PintandoListPedidos;