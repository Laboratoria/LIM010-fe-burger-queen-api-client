const postProduct = (token, name, price, imagen, type) => {
  console.log(token, name, price, imagen, type);
  return fetch('http://159.65.75.191/products', {
    method: 'POST',
    headers: {
      authorization: 'bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      price,
      imagen,
      type,
    }),
  })
    .then((resp) => {
      if (resp.status === 200) {
        return resp.json();
      } if (resp.status === 400) {
        return Promise.reject(new Error('falta completar name o price'));
      } if (resp.status === 401) {
        return Promise.reject(new Error('no tiene cabecera '));
      } if (resp.status === 403) {
        return Promise.reject(new Error('no es un administrador'));
      }
      return Promise.reject(new Error('El producto no existe'));
    });
};

export default postProduct;
