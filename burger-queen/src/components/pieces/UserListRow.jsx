import React from 'react';
import deleteUsers from '../controllers/deleteUser.js';
import putUser from '../controllers/putUser.js';


const UserListRow = (props) => {
  const users = props.usersAll;
  const {
    email, password, roles, _id,
  } = users;
  return (
    <tr colSpan="5">
      <td>{email}</td>
      <td>{password}</td>
      <td>{roles.admin}</td>
      <td>
        <button
          type="submit"
          onClick={() => {
            console.log(_id);
            deleteUsers('token', _id).then((res) => {
              console.log(res);
              alert(`"desea eliminar al usuario?" ${res.email}`);
            });
          }}
        >
Eliminar
        </button>

      </td>
      <td>
        <button
          type="submit"
          onClick={() => {
            console.log(email);
            putUser('token', email, password, roles.admin).then((res) => {
              console.log(res);
            });
          }}
        >
Editar

        </button>

      </td>
    </tr>
  );
};

export default UserListRow;
