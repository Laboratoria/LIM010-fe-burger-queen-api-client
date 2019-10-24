const deleteProduct = (arrayOrder, item) => {
    const newProductos = arrayOrder.filter((p) => p.item !== item);
    return newProductos;
  };

export default deleteProduct;