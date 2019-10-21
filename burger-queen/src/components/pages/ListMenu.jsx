import React from 'react';

import ItemMenu from '../pieces/ItemMenu.jsx';
import listItemMenu from '../styles/itemMenu.module.css';
import ListCategory from '../pieces/ListCategory.jsx';
import OrderTemplate from '../pieces/OrderTemplate.jsx';
import containerPedido from '../styles/containerPedido.module.css';


const ViewWaiterMenu = () => {
  const desayuno = [
    {
      id: 1, producto: 'Café americano', precio: '5',
    },
    { id: 2, producto: 'Café con leche', precio: '7' },
    { id: 3, producto: 'Sandwich de jamón y queso', precio: '10' },
    { id: 4, producto: 'Jugo de frutas natural', precio: '7' }];


  return (
    <div className={containerPedido.containerPedido}>
      <section className={containerPedido.containerListMenu}>
        {/* {listCategoryMenu.map((cat) => <CategoryMenu nameCategory={cat.categoria} />)} */}
        <ListCategory />
        <div className={listItemMenu.containerFlexIzq}>
          {desayuno.map((btn) => <ItemMenu nameMenu={btn.producto} precioMenu={btn.precio} key={btn.id} />)}
        </div>
      </section>
      <section>
        <OrderTemplate />
      </section>
    </div>
  );
};

export default ViewWaiterMenu;
