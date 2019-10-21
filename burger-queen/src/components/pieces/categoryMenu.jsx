import React from 'react';
import btnCategory from '../styles/btnCategory.module.css';

const CategoryMenu = (props) => (
  <>
    <button type="submit" className={btnCategory.btnCategory}>
      {props.nameCategory}
    </button>
  </>
);

export default CategoryMenu;
