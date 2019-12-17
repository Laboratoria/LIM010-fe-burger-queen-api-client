import React, { useState, useEffect } from 'react';
// import UserListHead from './UserListHead.jsx';
import postProduct from '../controllers/postProducts.js';
import formUser from '../styles/formUser.module.css';
import getProductList from '../controllers/getProductsList.js';
import ProductListHead from './ProductListHead.jsx';
import ProductListRow from './ProductListRow.jsx';

const ProductRegister = () => {
  const [nameProd, setNameProd] = useState('');
  const [priceProd, setPriceProd] = useState('');
  const [imagenProd, setImagenProd] = useState('');
  const [typeProd, setTypeProd] = useState('');
  const [err, setErrProd] = useState('');
  const [products, setProducts] = useState([]);

  const FnameProd = (e) => {
    setNameProd(e.target.value);
  };
  const FpriceProd = (e) => {
    setPriceProd(e.target.value);
  };

  const FimagenProd = (e) => {
    setImagenProd(e.target.value);
  };

  const FtypeProd = (e) => {
    setTypeProd(e.target.value);
  };

  const productsList = (token) => {
    getProductList(token).then((resp) => {
      setProducts(resp);
      console.log(resp);
    })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    productsList(localStorage.getItem('token'));
  }, []);


  return (
    <>
      <form
        className={formUser.formAdd}
        onSubmit={(e) => {
          e.preventDefault();

          console.log(localStorage.getItem('token'));
          console.log(nameProd);
          console.log(priceProd);
          console.log(imagenProd);
          console.log(typeProd);
          postProduct(localStorage.getItem('token'), nameProd, priceProd, imagenProd, typeProd).then((respuesta) => {
            console.log(respuesta, 'guardando');
            productsList(localStorage.getItem('token'));
            setNameProd('');
            setImagenProd('');
            setPriceProd('');
            setTypeProd('');
          }).catch((error) => {
            setErrProd(error.message);
          });
        }}
      >
        <h1>Admin. de Productos</h1>
        <input className={formUser.inputUser} placeholder="Nombre del producto" value={nameProd} onChange={FnameProd} />
        <br />
        <input className={formUser.inputUser} placeholder="Precio del producto" value={priceProd} onChange={FpriceProd} />
        <br />
        <input className={formUser.inputUser} placeholder="Imagen" value={imagenProd} onChange={FimagenProd} />
        <br />
        <input className={formUser.inputUser} placeholder="Tipo/Categoria" value={typeProd} onChange={FtypeProd} />
        {' '}
        <br />
        <button className={formUser.btn}>
        Guardar
        </button>
        {err && <p>{setErrProd}</p>}
      </form>
      <div className={formUser.divList}>
        <table className={` ${formUser.tableListUser}`}>
          <thead>
            <ProductListHead />
          </thead>
          <tbody className={formUser.txtUser}>
            {
              products.map((product) => (<ProductListRow productsAll={product} productsList={productsList} key={product._id} />))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductRegister;
