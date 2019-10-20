import React from 'react';
import listItemMenu from '../styles/itemMenu.module.css';


const ItemMenu = (props) => (
  <>
    <button type="submit" className={listItemMenu.listItemMenu}>
      {props.nameMenu}
      {' '}
      {props.precioMenu}
    </button>
  </>
);

export default ItemMenu;
