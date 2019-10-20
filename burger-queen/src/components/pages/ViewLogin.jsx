import React from 'react';
import PropTypes from 'prop-types';
import PFooter from '../pieces/PFooter.jsx';
import PLogo from '../pieces/PLogo.jsx';
import PLogin from '../pieces/PLogin.jsx';
import styles1 from '../styles/Login.module.css';

const ViewLogin = ({ history }) => (
  <div className={`${styles1.body} ${styles1.center}`}>
    <div className={`${styles1.form} ${styles1.fondoFormulario}`}>
      <PLogo />
      <br />
      <PLogin history={history} />
    </div>
    <PFooter />
  </div>
);

ViewLogin.propTypes = {
  history: PropTypes.object.isRequired,
};

export default ViewLogin;
