import React, { useEffect, useState } from 'react';
import RowTableTipoInsumo from './RowTableTipoInsumo';
import NuevoTipoInsumo from './NuevoTipoInsumo';

const CartaTabla = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
    fetch('http://localhost:3001/api/tiposInsumo')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  console.log(data);
  if (data.length > 0) {
  return (
    <React.Fragment>
      <br></br>
      <div class="card">
        <div class="card-header">
          <h2>Tipos de insumos</h2>
          {<NuevoTipoInsumo />}
        </div>
        <div class="overflow-scroll" style={{ maxHeight: '600px' }}>
          <table WIDTH="1000" class="table table-striped table-bordered align-middle tabla_busqueda">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <RowTableTipoInsumo 
                id_tipo={item.id_tipo}
                nombre= {item.nombre}
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
      <h1>No hay tipos de insumos</h1>
    );
  }
};

export default CartaTabla;