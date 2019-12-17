  const postOrder = (token, userId, client, products) => (
  fetch('http://159.65.75.191/orders', {
    method: 'POST',
    headers: {
      authorization: 'Bearer' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, client, products }),
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

export default postOrder;
