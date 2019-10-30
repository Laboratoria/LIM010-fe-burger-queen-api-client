import React from 'react';
// import logo from '../images/burger.png';
import PHeader from '../pieces/PHeader.jsx';
import PFooter from '../pieces/PFooter.jsx';
// import styles from '../styles/logoMenu.module.css';

const StartView = () => (
  <>
    <div>
      <PHeader />
      {/* <img src={logo} alt="logo" className={styles.img} /> */}
      <PFooter />
    </div>
  </>
);

export default StartView;
