import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import FLogin from '../functional/FLogin.js';
import styles from '../styles/Login.module.css';

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
    <div className={styles.align}>
      <form onSubmit={(e) => {
        e.preventDefault();
        FLogin(email, password).then((res) => {
          console.log(res.token);
          history.replace('/Home');
        }).catch((err) => {
          // setErr(err);
          console.log(err);
        });
      }}
      >
        {/* <input type='text' name='email' placeholder='email' value={email} onChange={(e) =>
        {setEmail(e.target.value)}} /><br></br> */}
        <input value={email} onChange={FEmail} type="text" name="email" placeholder="Email" />
        <br />
        <input value={password} onChange={FPassword} type="password" name="password" placeholder="Password" id="password" />
        <br />
        <button type="submit" className={`btn btn-success ${styles.button}`} value="btn">Login</button>
      </form>
      {/* <button type="submit"><Link to="/Home">Login</Link></button>
      {email} */}
      {/* <p>{error}</p> */}
    </div>
  );
};

PLogin.propTypes = {
  history: PropTypes.object.isRequired,
};

export default PLogin;
