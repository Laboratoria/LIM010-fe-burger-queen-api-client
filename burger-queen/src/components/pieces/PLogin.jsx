import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import CLogin from '../functional/CLogin.js';

const PLogin = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setErr] = useState('');

  console.log('history ', history);

  const FEmail = (e) => {
    setEmail(e.target.value);
  };
  const FPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        CLogin(email, password).then((res) => {
          console.log(res.token);
          history.replace('/Home');
        }).catch((err) => {
          // setErr(err.message);
          console.log(err);
        });
      }}
      >
        {/* <input type='text' name='email' placeholder='email' value={email} onChange={(e) =>
        {setEmail(e.target.value)}} /><br></br> */}
        <input value={email} onChange={FEmail} type="text" name="email" placeholder="email" />
        <br />
        <input value={password} onChange={FPassword} type="password" name="password" placeholder="password" id="password" />
        <br />
        <button type="submit" value="btn">Login</button>
      </form>
      {/* <button type="submit"><Link to="/Home">Login</Link></button>
      {email} */}
    </div>
  );
};

PLogin.propTypes = {
  history: PropTypes.object.isRequired,
};

export default PLogin;
