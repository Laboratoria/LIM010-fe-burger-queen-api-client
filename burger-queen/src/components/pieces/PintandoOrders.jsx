import React from 'react';

const PintandoOrders = (props) => {
  const listOrder = props.listOrder;
  const {
    _id, client, dateEntry, status,
  } = listOrder;
  // const startDate = new Date();
  // const endDate = new Date();

  return (
    <>

      {/* {listOrder.map((p) => ( */}
      <table key={_id}>
        <thead>
          <tr>
            <th>
                Cliente:
              {client}
            </th>
            <th>
                Fecha:
              {dateEntry}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2">
              {listOrder.products.map((p) => (
                `${p.qty} ${p.product.name} `
              ))}

            </td>
            <td>
Estado:
              {status}
            </td>
          </tr>
          <tr>
            <td><button type="button">Completado</button></td>
          </tr>
        </tbody>
      </table>
      ))
    </>
  );
};

export default PintandoOrders;
