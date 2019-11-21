const getUsers = (token) => (
  fetch('http://159.65.75.191/users', {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  }).then((respuesta) => {
    if (respuesta === 200) {
      return respuesta.json();
    } if (respuesta === 404) {
      return Promise.reject(new Error('no hay cabecera'));
    }
    return Promise.reject({ message: respuesta });
  })
);
export default getUsers;
