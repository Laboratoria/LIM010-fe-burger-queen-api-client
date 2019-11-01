import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'
import PLogin from '../../components/pieces/PLogin.jsx';

test('prueba', async () => {
  const url = '/';
  const { getByTestId, queryByTestId } = render(<PLogin url={url} />);

  expect(queryByTestId('mensajeError')).toBe(null);

  fireEvent.click(getByTestId('botonSubmit'));

  const mensajeError = await waitForElement(() => getByTestId('mensajeError'));
  expect(mensajeError.textContent).toBe('Debes colocar email y password');
});
