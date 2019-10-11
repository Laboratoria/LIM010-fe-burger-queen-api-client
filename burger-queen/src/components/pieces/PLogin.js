import React, { useState } from 'react';

const PLogin = () => {
	const [email, setEmail] = useState('');
  return(
    <div>
    	<form>
				{/* <input type='text' name='email' placeholder='email' value={email} onChange={(e) => {setEmail(e.target.value)}} /><br></br> */}
				<input type='text' name='email' placeholder='email'/><br></br>
				<input type='password' name='password' placeholder='password' id='password'/><br></br>
      </form>
			<button onClick={()=> {setEmail('Bienvenido')}}>Login</button>
			{email}
    </div>
  );
};

export default PLogin;