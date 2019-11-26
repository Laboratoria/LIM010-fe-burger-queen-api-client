const getProductsList = (token) => (
  fetch('http://159.65.75.191/products', {
    method: 'GET',
    headers: {
      authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((respuesta) => {
      if (resp.status === 200) {
        return resp.json();
      } if (resp.status === 400) {
        return Promise.reject(new Error('Llene todos los campos'));
      } if (resp.status === 401) {
        return Promise.reject(new Error('Requiere autenticacion'));
      } if (resp.status === 403) {
        return Promise.reject(new Error('Es necesario ser administrador'));
      }
      return Promise.reject(new Error('El producto no existe'));
    })
);

export default getProductsList;
