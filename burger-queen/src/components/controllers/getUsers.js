const getUsers = (token) => (
  fetch('http://localhost:5000/orders', {
    method: 'GET',
    headers: {
      authorization: token,
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
