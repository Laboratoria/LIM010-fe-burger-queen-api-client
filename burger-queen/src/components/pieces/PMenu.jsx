import React from 'react';
// import logo from '../images/burger.png';
import style1 from '../styles/Menu.module.css';

const PMenu = () => (
    <div className={style1.menu}>
    <div className={`${style1.menuUno} ${style1.menuDos}`}>
        <input className={style1.pedido} type="button" value="PEDIDOS" />
        <input className={style1.lista} type="button" value="LISTA PEDIDOS" />
    </div>
    <div className={style1.fondoCentral}>
    {/* <img src={logo} alt="logo" className={style1.img} /> */}
    </div>
    </div>
);

export default PMenu;