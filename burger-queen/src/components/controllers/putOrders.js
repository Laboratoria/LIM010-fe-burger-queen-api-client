const putOrders = (token, userId, client, products, status) => (
  fetch('http://localhost:5001/orders/', {
    method: 'PUT',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: { userId, client, products, status }
  })
    .then((respuesta) => {
      if (respuesta.status === 200) {
        return respuesta.json();
      } if (respuesta.status === 400) {
        return Promise.reject(new Error('No se indican ninguna propiedad a modificar o la propiedad `status` no es valida'));
      } if (respuesta.status === 401) {
        return Promise.reject(new Error('No hay cabecera de autenticación'));
      } if (respuesta.status === 404) {
        return Promise.reject(new Error('La orderId con `orderId` indicado no existe'))
      }
      return Promise.reject({ message: respuesta.statusText });
    })
);
export default putOrders;