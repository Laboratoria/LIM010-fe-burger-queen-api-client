import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import CLogin from '../functional/CLogin.js';

const PLogin = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

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
        if (!email || !password) {
          setErr('Debes colocar email y password')
          return false;
        }
        CLogin(email, password).then((res) => {
          console.log(res.token);
          history.replace('/Home');
        }).catch((error) => {
          setErr(error.message);
        });
      }}
      >
        {/* <input type='text' name='email' placeholder='email' value={email} onChange={(e) =>
        {setEmail(e.target.value)}} /><br></br> */}
        <input value={email} onChange={FEmail} type="text" name="email" placeholder="email" />
        <br />
        <input value={password} onChange={FPassword} type="password" name="password" placeholder="password" id="password" />
        <br />
        <button type="submit" value="btn" data-testid="botonSubmit">Login</button>
        {err && <p data-testid="mensajeError" style={{ color: 'red' }}>{err}</p>}

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
