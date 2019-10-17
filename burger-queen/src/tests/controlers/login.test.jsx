import Flogin from '../controlers/Flogin.jsx';
import fetchMock from 'fetch-mock';

it('Traedo token', () => {
    fetchMock
    .post('http://example.com',{ email: 'meliza@gmail.com', password: '12345678' });
    const rendered = renderer.create(<Flogin/>).toJSON();
    expect(rendered).toBe(200, { token: 'asdasdasdsad' });
});

// // toBeTruthy
// // fetchMock.mock('http://example.com', 200);
// // const res = await fetch('http://example.com');
// // assert(res.ok);
// // fetchMock.restore();