const postUser = (token, email, password, admin) => {
  console.log(token, email, password, admin);
    return fetch('http://159.65.75.191/users', {
      method: 'POST',
      headers: {
        authorization: 'bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        roles: {
          admin,
        },
      }),
    })
      .then((respuesta) => {
        if (respuesta.status === 200) {
          return respuesta.json();
        } if (respuesta.status === 400) {
          return Promise.reject(new Error('Ingrese su usuario y/o contraseña'));
        }
        return Promise.reject(new Error('Solicite credenciales con el administrador'));
      })
  };

export default postUser;
