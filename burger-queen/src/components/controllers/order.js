const addProduct = (arrayProduct, item) => {
 
  item.cant= 0;
  arrayProduct.find();
  // const newArray = [...arrayProduct, item];
  //   if(newArray[i].id!==item.id){
  //       console.log('hola2');
  //     }
  // }
  if(newArray.id !== item.id){
    console.log('no son iguales los productos');
    console.log(newArray);
  } else {
    console.log('son iguales los productos');
    console.log(newArray);
    newArray.cant = newArray.cant + 1;
  }
  

  console.log(newArray)
  return newArray;
};

export default addProduct;
