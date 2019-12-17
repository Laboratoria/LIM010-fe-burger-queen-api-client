import React from 'react';
import PHeader from '../pieces/PHeader.jsx';
import PFooter from '../pieces/PFooter.jsx';
import PintandoPedidos from '../pieces/PintandoPedidos.jsx';
// import styles1 from '../styles/Login.module.css';


const ViewWaiterMenu = () => (
  <>
    {/* // <div className={`${styles1.body}`}> */}
    <PHeader />
    <PintandoPedidos />
    <PFooter />
    {/* // </div> */}
  </>
);
export default ViewWaiterMenu;
