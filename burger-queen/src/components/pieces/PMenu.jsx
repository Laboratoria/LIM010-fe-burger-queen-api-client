import React from 'react';
// import logo from '../images/burger.png';
// import { Link } from 'react-router-dom';
import style1 from '../styles/Menu.module.css';
import ListMenu from '../pages/ListMenu.jsx';

const PMenu = () => (
  <div className={style1.menu}>
    {/* <div className={`${style1.menuUno} ${style1.menuDos}`}>
      <input className={style1.pedido} type="button" value="PEDIDOS" />
      <input className={style1.lista} type="button" value="LISTA PEDIDOS" />
    </div> */}
    <div className={style1.fondoCentral}>
      <ListMenu />
      {/* <img src={logo} alt="logo" className={style1.img} /> */}
    </div>
  </div>
);

export default PMenu;
