import Flogin from '../controlers/Flogin.jsx';
import fetchMock from 'fetch-mock';


describe('Traer token',  () => {
    it('Have to get token', async(done) => {
      fetchMock
        .post('http://localhost:3000/auth', { status: 200, body: { token: 'abcjdefghi' } });
		Flogin('mesero@gmail.com','12345678')
        .then( res => {
          expect(res.token).toBe('ok')
          done()
        })
    })
    
    // it('Have to get token error 400', async(done) => {
    //     fetchMock
    //       .post('http://localhost:5000/auth', 400)
    //     getToken('aaaaa','123456')
    //        .catch( err => {
    //          expect(err.message).toBe('Ingrese su usuario y/o contraseña')
    //          done()
    //        })
    //    }) 
})