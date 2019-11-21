import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import CLogin from '../controllers/CLogin.js';
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
    <div className={`${style1.loginMargin} ${style1.align}`}>
      <form
        className={style1.form}
        onSubmit={(e) => {
          e.preventDefault();
          if (!email || !password) {
            setErr('Debes colocar email y password');
            return false;
          }
          CLogin(email, password).then((res) => {
            localStorage.setItem('token', res.token);
            const token = localStorage.getItem('token');
            console.log(token);
            history.replace('/Home');
          }).catch((error) => {
            setErr(error.message);
          });
        }}
      >
        {/* <input type='text' name='email' placeholder='email' value={email} onChange={(e) =>
        {setEmail(e.target.value)}} /><br></br> */}
        <div className={style1.formIcon}>
          <span className={`glyphicon glyphicon-user ${style1.spanIcon}`} />
          <input className="form-control" value={email} onChange={FEmail} type="text" name="email" placeholder="Email" />
        </div>
        <br />
        <div className={style1.formIcon}>
          <span className={`glyphicon glyphicon-lock ${style1.spanIcon}`} />
          <input className="form-control" value={password} onChange={FPassword} type="password" name="password" placeholder="Password" id="password" />
        </div>
        <br />
        <p className={style1.mensajeContraseña}>¿Olvidaste tu contraseña?</p>
        <button type="submit" className={`btn btn-success ${style1.button}`} value="btn" data-testid="botonSubmit">LOGIN</button>
        {err && <p data-testid="mensajeError" className={style1.mensajeError}>{err}</p>}
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
