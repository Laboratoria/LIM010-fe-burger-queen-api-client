import React from 'react';
import PHeader from '../pieces/PHeader.jsx';
import PFooter from '../pieces/PFooter.jsx';
// import PMenu from '../pieces/PMenu.jsx';
// import PintandoPedidos from '../pieces/PintandoPedidos.jsx';
// import ViewWaiterListPedidos from './ViewWaiterListPedidos.jsx';
// import PintandoListPedidos from '../pieces/PintandoListPedidos.jsx';
// import ListMenu from './ListMenu.jsx';
// import PintandoOrders from '../pieces/PintandoOrders.jsx';
import FilterStatusOrder from '../pieces/statusOrderKitchen.jsx';

const ViewWaiterMenu = () => (
  <div>
    <PHeader />
    <FilterStatusOrder />
    <PFooter />
  </div>
);
export default ViewWaiterMenu;
