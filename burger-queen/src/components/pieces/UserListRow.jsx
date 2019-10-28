import React from 'react';


const UserListRow = (props) => {
  const users = props.users;
  const { email, password, roles } = users;
  return (
    <tr colSpan="5">
      <td>{email}</td>
      <td>{password}</td>
      <td>{roles.admin}</td>
      <td><button>Eliminar</button></td>
      <td><button>Editar</button></td>
    </tr>
  );
};

export default UserListRow;
