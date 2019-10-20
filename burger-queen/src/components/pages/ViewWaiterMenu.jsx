import React from 'react';

import ItemMenu from '../pieces/itemMenu.jsx';
// import imgCafe from '../images/cafe.jpeg';
import listItemMenu from '../styles/itemMenu.module.css';
// import imgBreakfast from '../images/leche';
// const photo = require('../images/cafe.png');

const ViewWaiterMenu = () => {
  const desayuno = [
    {
      id: 1, producto: 'Café americano', precio: '5',
    },
    { id: 2, producto: 'Café con leche', precio: '7' },
    { id: 3, producto: 'Sandwich de jamón y queso', precio: '10' },
    { id: 4, producto: 'Jugo de frutas natural', precio: '7' }];

  // const amburguesas = [
  //   {
  //     id: 1, producto: 'Hamburguesa simple', precio: '5',
  //   },
  //   { id: 2, producto: 'Hamburguesa doble', precio: '7' }];
  return (
    <>
      <h2>Bienvenido Mesero!!!</h2>
      <div className={listItemMenu.containerFlexIzq}>
        {desayuno.map((btn) => <ItemMenu nameMenu={btn.producto} precioMenu={btn.precio} key={btn.id} />)}
      </div>

    </>
  );
};

export default ViewWaiterMenu;
