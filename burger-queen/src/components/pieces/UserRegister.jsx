import React, { useState, useEffect } from 'react';
// import UserList from './UserList.jsx';
import UserListHead from './UserListHead.jsx';
import UserListRow from './UserListRow.jsx';
import getUserList from '../controllers/getUserList.js';
import postUser from '../controllers/postUser.js';
// import addUserList from '../controllers/addUser.js';
// import products from '../controllers/products.js';

const UserRegister = () => {
  const [users, setUsers] = useState([]);
  // const [addUser, setAddUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const addEmail = (e) => {
  //   console.log(setEmail(e.target.value));
  // };

  // const addPassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const usersList = (token) => {
    getUserList(token).then((res) => {
      setUsers(res.users);
      console.log(res.users);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  const submit = (e) => {
    e.preventDefault();
    postUser('token', email, password, 'no');
    setEmail('');
    setPassword('');
  };


  useEffect(() => {
    usersList('token');
  }, []);

  return (
    <>
      <form onSubmit={(e) => submit(e)
        // e.preventDefault();
        // postUser('token', email, password, 'no')
        //   .then((res) => {
        //     addEmail(res);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
      }
      >
        <h1>Admin. de Usuarios</h1>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Administrador</label>
        <select>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
        {' '}
        <br />
        <button>
Guardar

        </button>
      </form>
      <div>
        <table>
          <thead>
            <UserListHead />
          </thead>
          <tbody>
            {
              users.map((user) => (<UserListRow usersAll={user} />))
}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserRegister;
