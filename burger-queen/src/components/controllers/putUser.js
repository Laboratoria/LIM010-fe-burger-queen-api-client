const putUser = (token, email, password, admin) => (
  fetch('http://localhost:5000/users', {
    method: 'PUT',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: {
      email,
      password,
      roles: {
        admin,
      },
    },
  })
    .then((respuesta) => {
      if (respuesta.status === 200) {
        return respuesta.json();
      } if (respuesta.status === 400) {
        return Promise.reject(new Error('Ingrese su usuario y/o contraseña'));
      }
      return Promise.reject(new Error('Solicite credenciales con el administrador'));
    })
);

export default putUser;
