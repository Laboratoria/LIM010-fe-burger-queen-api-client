import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FLogin from '../functional/FLogin.js';

const PLogin = () => {
  const [email, setEmail] = useState('zaida');
  const [password, setPassword] = useState('zaida');

  return (
    <div>
      <form onSubmit={e =>{e.preventDefault()
        FLogin(email, password)
      }} >
        {/* <input type='text' name='email' placeholder='email' value={email} onChange={(e) =>
        {setEmail(e.target.value)}} /><br></br> */}
        <input type="text" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="password" id="password" />
        <br/>
        <button type="submit">Login</button>
      </form>    
      {/* onClick={() => { setEmail('Bienvenido'); }}><Link to="/Home">Login</Link */}
      {email}
    </div>
  );
};

export default PLogin;
