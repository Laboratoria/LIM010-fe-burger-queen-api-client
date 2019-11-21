const products = (token) => (
  fetch('http://159.65.75.191/products', {
    method: 'GET',
    headers: {
      authorization: 'Bearer' + token,
      'Content-Type': 'application/json',
    },
  })
    .then((respuesta) => {
      if (respuesta.status === 200) {
        return respuesta.json();
      } if (respuesta.status === 401) {
        return Promise.reject(new Error('no hay cabecera de autentificación'));
      }
      return Promise.reject({ message: respuesta.statusText });
    })
);

export default products;
