import React from 'react';
import deleteUsers from '../controllers/deleteUser.js';
import putUser from '../controllers/putUser.js';
import itemOrder from '../styles/itemOrder.module.css';
import deleteImage from '../images/eliminar.png';
import editImage from '../images/editar.png';

const UserListRow = (props) => {
  const users = props.usersAll;
  const {
    email, password, roles, _id,
  } = users;
  return (
    <tr colSpan="5" >
      <td>{email}</td>
      <td>{roles.admin === false ? 'NO': 'SI'}</td>
      <td>
        <button
          className={itemOrder.btnIcono}
          type="submit"
          onClick={() => {
            console.log(_id);
            deleteUsers(localStorage.getItem('token'), _id).then((res) => {
              console.log(res);
              alert(`desea eliminar al usuario? ${res.email}`);
            });
          }}
        >
          <img className={itemOrder.btnDelete} src={deleteImage} alt="delete" />
        </button>

      </td>
      <td>
        <button
          className={itemOrder.btnIcono}
          type="submit"
          onClick={() => {
            console.log(email);
            putUser('token', email, password, roles.admin).then((res) => {
              console.log(res);
            });
          }}
        >
          <img className={itemOrder.btnDelete} src={editImage} alt="delete" />

        </button>

      </td>
    </tr>
  );
};

export default UserListRow;
