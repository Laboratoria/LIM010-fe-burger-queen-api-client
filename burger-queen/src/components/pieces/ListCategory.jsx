import React from 'react';
import CategoryMenu from './categoryMenu.jsx';
import containerPedido from '../styles/containerPedido.module.css';

const listCategoryMenu = [{ id: 1, categoria: 'Desayuno' }, { id: 2, categoria: 'Almuerzo' }];
const ListCategory = () => (
  <div className={containerPedido.containerCategory}>
    {listCategoryMenu.map((cat) => <CategoryMenu nameCategory={cat.categoria} />)}
  </div>
);

export default ListCategory;
