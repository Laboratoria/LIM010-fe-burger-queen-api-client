import React from 'react';
import PHeader from '../pieces/PHeader.jsx';
import PFooter from '../pieces/PFooter.jsx';
import PMenu from '../pieces/PMenu.jsx';
import PintandoPedidos from '../pieces/PintandoPedidos.jsx';
// import ListMenu from './ListMenu.jsx';

const ViewWaiterMenu = () => (
  <div>
    <PintandoPedidos/>
    <PHeader />
    <PMenu />
    <PFooter />
  </div>
);
export default ViewWaiterMenu;
