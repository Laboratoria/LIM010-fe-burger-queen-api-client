import React, { useState, useEffect } from 'react';
import UserListHead from './UserListHead.jsx';
import UserListRow from './UserListRow.jsx';
import getUserList from '../controllers/getUserList.js';
import postUser from '../controllers/postUser.js';
import formUser from '../styles/formUser.module.css';
// import itemOrderTable from '../styles/itemOrder.module.css';

const UserRegister = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState('true');
  const [err, setErrUser] = useState('');

  const FEmailUser = (e) => {
    setEmail(e.target.value);
  };

  const FPasswordUser = (e) => {
    setPassword(e.target.value);
  };

  const FRoleUser = (e) => {
    setAdmin(e.target.value);
    console.log(e.target.value);
  };

  const usersList = (token) => {
    getUserList(token).then((res) => {
      console.log(res);
      setUsers(res);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    usersList(localStorage.getItem('token'));
  }, []);

  const funAdmin = (admin) => {
    if(admin === 'true'){
      const admint = true;
      return admint;
    }else{
      const admint = false;
      return admint;
    }
  };
  
  return (
    <>
      <form className={formUser.formAdd} onSubmit= {(e) => {
            e.preventDefault();
            console.log(admin);
            postUser(localStorage.getItem('token'), email, password, funAdmin(admin)).then((res) => {
              console.log(res);
              usersList(localStorage.getItem('token'));
              setEmail('');
              setPassword('');
            }).catch((error) => {
              setErrUser(error.message);
            });
          }}>
        <h1>Admin. de Usuarios</h1>
        <input className={formUser.inputUser} placeholder="Email" value={email} onChange={FEmailUser} />
        <br />
        <input className={formUser.inputUser} placeholder="Password" value={password} onChange={FPasswordUser} />
        <br />
        <label>Administrador</label>
        <div>
          <select onChange={FRoleUser}>
            <option disabled>Seleccione opción</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        {' '}
        <br />
        <button className={formUser.btn}>
        Guardar
        </button>
        {err && <p>{setErrUser}</p>}
      </form>
      <div className={formUser.divList}>
        <table className={` ${formUser.tableListUser}`}>
          <thead>
            <UserListHead />
          </thead>
          <tbody className={formUser.txtUser}>
            {
              users.map((user) => (<UserListRow usersAll={user} usersList={usersList} key={user._id}/>))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserRegister;
