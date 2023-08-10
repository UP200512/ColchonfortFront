import React from 'react';
import { useEffect, useState } from 'react';

const Ventas = () => {

  const [recentOrdersData, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/estadisticas/pagos")
      .then((res) => res.json())
      .then((insumos) => setData(insumos));
    // .then((data) => console.log(data))
    // console.log(recentOrdersData)
  }, []);

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Ventas</h2>
          <h3>Último mes</h3>
          {/* <a href="#" className="btn">mas vendidos</a> */}
        </div>
        <div className='table-responsive'>
          <div style={{
            maxHeight:"400px",  /* Ajusta la altura máxima según tus necesidades */
            overflowY: "auto"
          }}>
            <table className='table'>
              <thead>
                <tr>
                  <td>ID Pago</td>
                  <td>ID Pedido</td>
                  <td>ID Producto</td>
                  <td>Nombre del Producto</td>
                  <td>Cantidad</td>
                  <td>Precio unitario</td>
                  <td>Total</td>
                  <td>Fecha</td>
                  <td>Prioridad</td>
                </tr>
              </thead>

              <tbody>
                {recentOrdersData.map((order, index) => (
                  <tr key={index}>
                    <td>{order.id_pago}</td>
                    <td>{order.id_pedido}</td>
                    <td>{order.id_producto}</td>
                    <td>{order.nombre}</td>
                    <td>{order.cantidad}</td>
                    <td>{order.precio_unitario}</td>
                    <td>{order.total}</td>
                    <td>{order.fecha}</td>
                    <td>{order.prioridad}</td>
                    {/* <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ventas;
