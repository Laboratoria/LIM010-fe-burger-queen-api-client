const getProductsList = (token) => (
  fetch('http://159.65.75.191/products', {
    method: 'GET',
    headers: {
      authorization: 'bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => {
      if (resp.status === 200) {
        return resp.json();
      } if (resp.status === 401) {
        return Promise.reject(new Error('No hay cabecera de autentificacion'));
      } 
      return Promise.reject({ message: resp.statusText });
    })
);

export default getProductsList;
