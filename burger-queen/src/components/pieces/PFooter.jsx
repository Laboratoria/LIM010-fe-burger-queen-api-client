import React from 'react';
import styles1 from '../styles/Login.module.css';
import styles2 from '../styles/Footer.module.css';

const PFooter = () => (
  <div className={`${styles2.footer} ${styles1.align}`}>
    <p className={styles2.parrafo}>Copyright © 2019 por Zaida & Meliza. All rights reserved.</p>
  </div>
);

export default PFooter;
