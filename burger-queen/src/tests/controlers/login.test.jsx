import Flogin from '../../components/functional/CLogin.js';
import fetchMock from 'fetch-mock';

afterEach(() => {
  fetchMock.reset();
})

describe('Traer token',  () => {
    it('Have to get token', async(done) => {
      fetchMock
        .post('http://localhost:5001/auth', { status: 200, body: { token: 'abcjdefghi' } });
		Flogin('mesero@gmail.com','12345678')
        .then( respuesta => {
          expect(respuesta.token).toBe('abcjdefghi')
          done()
        })
    })
    
    it('Have to get token error 400', async(done) => {
        fetchMock
          .post('http://localhost:5001/auth', 400)
        Flogin('aaaaa','123456')
           .catch( err => {
             expect(err.message).toBe('Ingrese su usuario y/o contraseña')
             done()
           })
       }) 
})