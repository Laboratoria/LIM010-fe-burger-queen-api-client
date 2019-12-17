const putUser = (token, email, password, admin) => (
  fetch(`http://159.65.75.191/users/${userId}`, {
    method: 'PUT',
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
        return Promise.reject(new Error('No se proveen email o password o ninguno de los dos'));
      } if (respuesta.status === 401) {
        return Promise.reject(new Error('No hay cabecera de autenticación'));
      } if (respuesta.status === 403) {
        return Promise.reject(new Error('No es ni admin o la misma usuaria'));
      }
      return Promise.reject(new Error('La usuaria solicitada no existe'));
    })
);

export default putUser;
