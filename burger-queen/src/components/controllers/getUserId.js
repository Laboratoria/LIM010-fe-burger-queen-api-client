const getUserId = (token) => fetch('http://localhost:5001/userId', {
  method: 'GET',
  headers: {
    authorization: token,
    'Content-Type': 'application/json',
  },
}).then((resp) => {
  if (resp.status === 200) {
    return resp.json();
  } if (resp.status === 404) {
    return Promise.reject({ message: 'el usuario no existe' });
  }

  return Promise.reject({ message: resp.statusText });
});

export default getUserId;
