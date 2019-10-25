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

const PintarProductos = () => {
  const [prodData, setProdData] = useState([]);
  const [prodOrder, setProdOrder] = useState([]);
  const [prodType, setProdType] = useState('desayuno');

  const productos = (token) => {
    products(token).then((res) => {
      setProdData(res.products);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    productos('el token');
  }, []);

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
                className={lineaOrder.listItemMenu}
                key={p.id}
                onClick={() => {
                  const newProdOrder = addProduct(prodOrder, p);
                  setProdOrder(newProdOrder);
                }}
              >
                {p.name}
                {' '}
                {p.cant}
                {' '}
                {p.price}
              </button>
            ))}
          </div>
        </div>
        <div>
          <form>
            <div>
              <p className={lineaOrder.lineaOrder}>Pedido N° : </p>
            </div>
            <div className={lineaOrder.clientInput}>
              <p>Cliente: </p>
              <input placeholder="Nombre del cliente" className={lineaOrder.nameInput} />
            </div>
            <div className={itemOrderTable.tableOrder}>
              <table>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default PintarProductos;
