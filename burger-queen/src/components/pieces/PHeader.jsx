import React from 'react';
import logo from '../images/burger.png';
import style from '../styles/Header.module.css';


const PHeader = () => (
  <div className={style.headerMenuUno}>
    <div className={`${style.headerMenuDos} ${style.headerBarraMenu}`}>
      <img src={logo} alt="logo" className={style.img} />
      <p className={style.bienvenida}>¡Bienvenido Carlos!</p>
    {/* <input className={style.cerrar} type="button" value="CERRAR SESIÓN" /> */}
    <input type="checkbox" className={style.btnMenu} id="btnMenu"/>
    <label class="glyphicon glyphicon-align-justify" for="btnMenu"></label>
    <nav className={style.menu}>
        <ul>
          <li className={style.itemMenu}><a>PEDIDOS</a></li>
          <li className={style.itemMenu}><a>LISTA DE PEDIDOS</a></li>
          <li className={style.itemMenu}><a>CERRAR SESIÓN</a></li>
        </ul>
    </nav>
    </div>
  </div>
);

export default PHeader;
