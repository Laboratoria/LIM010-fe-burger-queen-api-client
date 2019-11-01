import React, { useState, useEffect } from 'react';
// import UserList from './UserList.jsx';
import UserListHead from './UserListHead.jsx';
import UserListRow from './UserListRow.jsx';
import getUserList from '../controllers/getUserList.js';
import postUser from '../controllers/postUser.js';

const UserRegister = () => {
  const [users, setUsers] = useState([]);
  // const [addUser, setAddUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [administrator, setAdministrator] = useState('');

  const Femail = (e) => {
    setEmail(e.target.value);
  };
  const Fpassword = (e) => {
    setPassword(e.target.value);
  };

  // const Fadministrator = (e) => {
  //   setAdministrator(e.target.value);
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
        <input placeholder="Email" value={email} onChange={Femail} />
        <br />
        <input placeholder="Password" value={password} onChange={Fpassword} />
        <br />
        <p>Administrador</p>
        <select>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
        {' '}
        <br />
        <button
          type="button"
          onClick={() => {
          }}
        >
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
              users.map((user) => (<UserListRow users={user} />))
              }
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserRegister;
