import React from 'react';
import formUser from '../styles/formUser.module.css';

const UserListHead = () => (

  <tr colSpan="5">
    <th className={formUser.theadUser}>Email</th>
    <th className={formUser.theadUser}>Password</th>
    <th className={formUser.theadUser}>Administrador</th>
    <th className={formUser.theadUser}>Eliminar</th>
    <th className={formUser.theadUser}>Editar</th>
  </tr>
);

export default UserListHead;
