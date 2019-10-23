const addProduct = (arrayProduct, item) => {
  const newArray = [];
  arrayProduct.forEach((element) => {
    if (element.id === item.id) {
      newArray.push({ element });
    }
    return newArray;
  });
};

export default addProduct;
