import React from 'react';
import deleteUsers from '../controllers/deleteUser.js';


const UserListRow = (props) => {
  const users = props.users;
  const { email, password, roles } = users;
  return (
    <tr colSpan="5">
      <td>{email}</td>
      <td>{password}</td>
      <td>{roles.admin}</td>
      <td>
        <button
          type="submit"
          onClick={() => {
            deleteUsers('token').then((res) => { console.log(res); });
          }}
        >
Eliminar

        </button>

      </td>
      <td><button>Editar</button></td>
    </tr>
  );
};

export default UserListRow;
