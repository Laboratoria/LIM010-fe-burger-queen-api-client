import React from 'react';
import PropTypes from 'prop-types';
import PFooter from '../pieces/PFooter.jsx';
import PLogo from '../pieces/PLogo.jsx';
import PLogin from '../pieces/PLogin.jsx';


const ViewLogin = ({ history }) => (
  <div>
    <PLogo />
    <PLogin history={history} />
    <PFooter />
  </div>
);

ViewLogin.propTypes = {
  history: PropTypes.object.isRequired,
};

export default ViewLogin;
