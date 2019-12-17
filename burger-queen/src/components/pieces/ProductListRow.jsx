import React from 'react';
import deleteProduct from '../controllers/deleteProduct.js';
import itemOrder from '../styles/itemOrder.module.css';
import deleteImage from '../images/eliminar.png';
import editImage from '../images/editar.png';
import putProduct from '../controllers/putProduct.js';

const ProductListRow = (props) => {
  const products = props.productsAll;
  const {
    name, price, type, image, _id,
  } = products;

  return (
    <tr colSpan="5">
      <td>{name}</td>
      <td>{price}</td>
      <td>{type}</td>
      <td>
        <button
          className={itemOrder.btnIcono}
          type="submit"
          onClick={() => {
            console.log(localStorage.getItem('token'));
            console.log(_id);
            deleteProduct(localStorage.getItem('token'), _id).then((res) => {
              console.log(res);
              alert(`desea eliminar el producto? ${res.name}`);
            });
          }}
        >
          <img className={itemOrder.btnDelete} src={deleteImage} alt="delete" />
        </button>

      </td>
      <td>
        <button
          className={itemOrder.btnIcono}
          type="submit"
          onClick={() => {
            putProduct(localStorage.getItem('token'), name, price, image, type).then((res) => {
              console.log(res);
            });
          }}
        >
          <img className={itemOrder.btnDelete} src={editImage} alt="delete" />

        </button>

      </td>
    </tr>
  );
};

export default ProductListRow;
