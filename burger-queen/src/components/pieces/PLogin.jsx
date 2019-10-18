import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import CLogin from '../functional/CLogin.js';
import style1 from '../styles/Login.module.css';

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
    <div className = {style1.align}>
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
        <input className="form-control" value={email} onChange={FEmail} type="text" name="email" placeholder="Email" />
        <br />
        <input className="form-control" value={password} onChange={FPassword} type="password" name="password" placeholder="Password" id="password" />
        <br />
        <p className={style1.mensajeContraseña}>¿Olvidaste tu conytaseña?</p>
        <button type="submit" className={`btn btn-success ${style1.button}`} value="btn" data-testid="botonSubmit">LOGIN</button>
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