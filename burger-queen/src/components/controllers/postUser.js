const postUser = (token, email, password, roles) => (
  fetch('http://localhost:5001/users', {
    method: 'POST',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: {
      email,
      password,
      roles,
    },
  })
    .then((respuesta) => {
      if (respuesta.status === 200) {
        return respuesta.json();
      } if (respuesta.status === 400) {
        return Promise.reject(new Error('No se proveen `email` o `password` o ninguno de los dos'));
      }
      if (respuesta.status === 401) {
        return Promise.reject(new Error('No hay cabecera de autenticación'));
      }
      if (respuesta.status === 403) {
        return Promise.reject(new Error('ya existe usuaria con ese `email`'));
      }
      return Promise.reject(new Error(respuesta.statusText));
    })
);

export default postUser;
