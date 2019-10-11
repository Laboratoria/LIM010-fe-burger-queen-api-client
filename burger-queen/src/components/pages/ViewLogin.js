import React from 'react';
import PFooter from '../pieces/PFooter.js';
import PLogo from '../pieces/PLogo.js';
import PLogin from '../pieces/PLogin.js';

const ViewLogin = () => {
    return (
    <div>
			<PLogo/>
			<PLogin/>
      <PFooter/>
    </div>
  	); 
};

export default ViewLogin;