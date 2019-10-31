import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/burger.png';
import style from '../styles/Header.module.css';

const PHeader = ({ user }) => (
  <div className={style.headerMenuUno}>
    <div className={`${style.headerMenuDos} ${style.headerBarraMenu}`}>
      <img src={logo} alt="logo" className={style.img} />
      <p className={style.bienvenida}>¡Bienvenido Carlos!</p>
      {/* <input className={style.cerrar} type="button" value="CERRAR SESIÓN" /> */}
      <input type="checkbox" className={style.btnMenu} id="btnMenu" />
      <label className={`glyphicon glyphicon-align-justify ${style.iconLabel}`} htmlFor="btnMenu" />
      <nav className={style.menu}>
        <ul>
          {/* {user.roles.admin && (
            null
          )}
          {!user.roles.admin && ( */}
          <li className={style.itemMenu}><Link to="/Pedidos">PEDIDOS</Link></li>
          <li className={style.itemMenu}><Link to="/ListaPedidos">LISTA DE PEDIDOS</Link></li>
          <li className={style.itemMenu}><Link to="/Cocinero">COCINERO</Link></li>
          <li className={style.itemMenu}><Link to="/Usuarios">USUARIOS</Link></li>
          <li className={style.itemMenu}><Link to="/">CERRAR SESIÓN</Link></li>
          {/* )} */}
        </ul>
      </nav>
    </div>
  </div>
);

export default PHeader;
