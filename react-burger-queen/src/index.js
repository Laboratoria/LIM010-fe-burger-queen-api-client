// COMO SOLIAMOS HACER
// const element = document.createElement('h1');
// element.innerText = 'Hola mundo';
// const container =document.getElementById('root');
// container.appendChild(element);

import React from 'react';
import ReactDom from 'react-dom';

// CON JSX

const element = <h1> Hola Mundo</h1>
const container = document.getElementById('root');
ReactDom.render(element, container);