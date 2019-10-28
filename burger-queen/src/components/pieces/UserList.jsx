// import React, { useState, useEffect } from 'react';
// import UserListHead from './UserListHead.jsx';
// import UserListRow from './UserListRow.jsx';
// import getUsers from '../controllers/getUsers.js';


// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   console.log(users);
//   const usersList = (token) => {
//     getUsers(token).then((res) => {
//       console.log(res.users);
//       return setUsers(res.users);
//     })
//       .catch((error) => {
//         console.error(error);
//       });
//   };


//   useEffect(() => {
//     usersList('token');
//   }, []);

//   return (
//     <table>
//       <thead>
//         <UserListHead />
//       </thead>
//       <tbody>
//         { users !== 0 && users.map((user) => (<UserListRow users={user} />))}

//       </tbody>
//     </table>
//   );
// };


// export default UserList;
