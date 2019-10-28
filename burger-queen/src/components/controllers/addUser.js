// controler agregar producto y contador
const addUserList = (arrayUser, item) => {
  const newArray = [...arrayUser, item];
  console.log(newArray);
  return newArray;
};
export default addUserList;
