import React from 'react';
import logo from '../images/burger.png';
import style from '../styles/Header.module.css';

const PHeader = () => (
  <div className={style.headerMenuUno}>
    <div className={`${style.headerMenuDos} ${style.headerBarraMenu}`}>
      <img src={logo} alt="logo" className={style.img} />
      <p className={style.bienvenida}>¡Bienvenido Carlos!</p>
    </div>
    <input className={style.cerrar} type="button" value="CERRAR SESIÓN" />
  </div>
);

export default PHeader;
