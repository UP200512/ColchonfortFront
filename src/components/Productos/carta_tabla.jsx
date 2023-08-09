import React, { useEffect, useState, useContext } from 'react';
import RowTableProductos from './RowTableProductos';
import { DataContext } from '../../views/Carta/CartaGlobal';

const CartaTabla = () => {

  
  const {data}= useContext(DataContext)

  if (data.length > 0) {
  return (
    <React.Fragment>
      <br></br>
      <div class="card">
        <div class="card-header">
          <h2>Productos</h2>
        </div>
        <div class="overflow-scroll" style={{ maxHeight: '600px' }}>
          <table WIDTH="1000" class="table table-striped table-bordered align-middle tabla_busqueda">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Tipo</th>
                <th scope="col">Prioridad</th>
                <th scope="col" colspan="4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <RowTableProductos 
                id_producto={item.id_producto}
                nombre= {item.nombre}
                descripcion= {item.descripcion}
                precio={item.precio}
                tipo={item.tipo}
                id_tipo={item.id_tipo}
                prioridad= {item.prioridad}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </React.Fragment>
  )}
  else {
    return (
      <h1>No hay productos</h1>
    );
  }
};

export default CartaTabla;