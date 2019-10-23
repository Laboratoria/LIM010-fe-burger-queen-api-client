const addProduct = (arrayProduct, item) => {
  const newArray = [...arrayProduct, item];
  console.log(newArray)
  return newArray;
};

export default addProduct;
