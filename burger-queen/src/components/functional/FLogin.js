// import React from 'react';
const FLogin = (email, password) => {
	return (
		fetch('http://localhost:5000/autha', {
			method:'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({'email': email, 'password': password} )
		})
		.then((respuesta) => {
			console.log(respuesta);
		})
		.catch((e)=>{
			console.log(e);
		})
	);
};

export default FLogin;
