const postOrder = (token, userId, client, products ) => (
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
      body:{ userId, client, products},
    })
      .then((respuesta) => {
        if (respuesta.status === 200) {
          return respuesta.json();
        } if (respuesta.status === 400) {
          return Promise.reject(new Error('No se indica userId o se intenta crear un order sin productos'));
        }
        return Promise.reject(new Error('Si no hay cabecera de autenticacion'));
      })
  );
  
  export default postOrder;
  