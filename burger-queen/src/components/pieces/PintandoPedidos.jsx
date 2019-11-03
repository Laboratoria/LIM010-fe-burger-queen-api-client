import React, { useState, useEffect } from 'react';
import products from '../controllers/products.js';
import btnCategory from '../styles/btnCategory.module.css';
import OrderTotal from './OrderTotal.jsx';
import lineaOrder from '../styles/itemMenu.module.css';
import containerPedido from '../styles/containerPedido.module.css';
import OrderHead from './OrderHead';
import itemOrderTable from '../styles/itemOrder.module.css';
import OrderRow from './OrderRow.jsx';
import addProduct from '../controllers/order.js';
import getUserId from '../controllers/getUserId.js';
import postOrder from '../controllers/postOrder.js';
import style1 from '../styles/Login.module.css';
import productsImg from '../images/cafeAmericano.jpg';
import itemMenu from '../styles/itemMenu.module.css';
// import styles1 from '../styles/Login.module.css';

const PintarProductos = () => {
  const [prodData, setProdData] = useState([]);
  const [prodOrder, setProdOrder] = useState([]);
  const [prodType, setProdType] = useState('desayuno');
  const [nameClient, setNameClient] = useState('');
  const [errOrder, setErrOrder] = useState('');
  const [userId, setUserId] = useState('');
  const [numOrd, setNumOrd] = useState(1);

  const FNameClient = (e) => {
    setNameClient(e.target.value);
  };

  const productos = (token) => {
    products(token).then((res) => {
      setProdData(res);
    }).catch((error) => {
      console.log(error);
    });
  };

  const getDataUser = (token) => {
    getUserId(token).then((dataUser) => {
      console.log(dataUser.id);
      setUserId(dataUser.id);
    }).catch((error) => {
      console.log(error);
    });
  };
  useEffect(() => {
    productos('el token');
  }, []);
  getDataUser('el token');

  return (
    <>
      <div className={containerPedido.containerPedido}>
        <div className={containerPedido.containerListMenu}>
          <div className={lineaOrder.containerFlexIzq}>
            <button
              className={btnCategory.btnCategory}
              type="submit"
              onClick={() => {
                setProdType('desayuno');
              }}
            >
              Desayuno
            </button>
            <button
              className={btnCategory.btnCategory}
              type="submit"
              onClick={() => {
                setProdType('almuerzo');
              }}
            >
              Almuerzo
            </button>
          </div>
          <div className={lineaOrder.containerFlexIzq}>
            {prodData.filter((p) => p.type === prodType).map((p) => (
              <button
                type="button"
                // className={lineaOrder.listItemMenu}
                className={`${lineaOrder.listItemMenu} ${itemMenu.containerFlexIzq} ${itemMenu.flexContainerItem}`}
                key={p.id}
                onClick={() => {
                  const newProdOrder = addProduct(prodOrder, p);
                  setProdOrder(newProdOrder);
                  // getDataUser('token');
                }}
              >
                <div className={itemMenu.containerItemProduc}>
                  <img src={productsImg} alt="products" className={itemMenu.imgMenu} />
                </div>
                <div className={itemMenu.containerItemProduc}>
                  <p>
                    {p.name}
                    {' '}
                  </p>
                </div>
                <div className={itemMenu.containerItemProduc}>
                  <p>{`S/. ${p.price}`}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className={containerPedido.containerListMenu}>
          <form onSubmit={(e) => {
            e.preventDefault();
            console.log(prodOrder.map((elem) => ({ productId: elem.id, qty: elem.cant })));
            postOrder('el token', userId, nameClient, prodOrder.map((elem) => ({ productId: elem.id, qty: elem.cant }))).then((res) => {
              console.log(res);
              setNameClient('');
              setProdOrder([]);
              setNumOrd(numOrd + 1);
            }).catch((error) => {
              setErrOrder(error.message);
            });
          }}
          >
            {/* <div> */}
            <p className={lineaOrder.lineaOrder}>{`Order N°000${numOrd}`}</p>
            {/* </div> */}
            <div className={lineaOrder.clientInput}>
              {/* <p>Cliente: </p> */}
              <input placeholder="Nombre del cliente" className={lineaOrder.nameInput} value={nameClient} onChange={FNameClient} />
            </div>
            <div className={itemOrderTable.tableOrder}>
              <table className={itemOrderTable.table}>
                <OrderHead />
                <tbody>
                  {prodOrder.map((p) => (
                    <OrderRow producto={p} key={p.id} listaProdOrder={prodOrder} setProductOrder={setProdOrder} />
                  ))}
                </tbody>
                <tfoot>
                  <OrderTotal listaProdOrder={prodOrder} setProductOrder={setProdOrder} />
                </tfoot>
              </table>
            </div>
            <div className={lineaOrder.footerSideOrder}>
              <button type="submit" className={lineaOrder.btnEnviar}>ENVIAR</button>
              <button type="submit" className={lineaOrder.btnEnviar}>CANCELAR</button>
            </div>
            {errOrder && <p className={style1.mensajeError}>{errOrder}</p>}
          </form>
        </div>
      </div>
    </>
  );
};
export default PintarProductos;
