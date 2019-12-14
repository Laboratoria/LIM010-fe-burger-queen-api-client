import React from 'react';
import formUser from '../styles/formUser.module.css';

const ProductListHead = () => (

  <tr colSpan="6">
    <th className={formUser.theadUser}>Nombre</th>
    <th className={formUser.theadUser}>Precio</th>
    <th className={formUser.theadUser}>Categoria/Tipo </th>
    <th className={formUser.theadUser}>Eliminar</th>
    <th className={formUser.theadUser}>Editar</th>
  </tr>
);

export default ProductListHead;
