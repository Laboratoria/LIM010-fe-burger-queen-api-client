import React, { useState, useEffect } from 'react';
import UserListHead from './UserListHead.jsx';
import UserListRow from './UserListRow.jsx';
import getUserList from '../controllers/getUserList.js';
import postUser from '../controllers/postUser.js';
import formUser from '../styles/formUser.module.css';
// import itemOrderTable from '../styles/itemOrder.module.css';

const UserRegister = () => {
  const [users, setUsers] = useState([]);
  // const [addUser, setAddUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


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
      <form className={formUser.formAdd} onSubmit={(e) => submit(e)}>
        <h1>Admin. de Usuarios</h1>
        <input className={formUser.inputUser} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input className={formUser.inputUser} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Administrador</label>
        <div>
          <select>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>

        {' '}
        <br />
        <button className={formUser.btn}>
Guardar
        </button>
      </form>
      <div className={formUser.divList}>
        <table className={` ${formUser.tableListUser}`}>
          <thead>
            <UserListHead />
          </thead>
          <tbody className={formUser.txtUser}>
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
