// controler agregar producto y contador
const addProduct = (arrayProduct, item) => {
  if (arrayProduct.find((elemento) => elemento.id === item.id)) {
    return arrayProduct.map((elem) => {
      if (elem.id === item.id) {
        return {
          id: item.id, name: item.name, cant: elem.cant + 1, price: elem.price, subtotal: (elem.cant + 1) * elem.price,
        };
      }
      return elem;
    });
  }
  return [...arrayProduct, {
    id: item.id, name: item.name, cant: 1, price: item.price, subtotal: item.price,
  }];
};
export default addProduct;
