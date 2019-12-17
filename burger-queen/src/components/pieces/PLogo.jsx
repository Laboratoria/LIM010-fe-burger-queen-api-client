import React from 'react';
import logo from '../images/burger.png';
import styles from '../styles/Login.module.css';

const PLogo = () => (
  <div className={styles.align}>
    <img src={logo} alt="logo" className={styles.img} />
  </div>
);

export default PLogo;
