import React, { useEffect, useState } from 'react';
import RowTableUsuarios from './RowTableUsuarios';
import { defaultrequestOptions } from '../../data';

const UsuariosTabla = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
    fetch('http://localhost:3000/api/usuarios', defaultrequestOptions)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  // console.log(data);
  if (data.length > 0) {
  return (
    <React.Fragment>
      <br></br>
      <div className="card">
        <div className="card-header">
          <h2>Usuarios</h2>
        </div>
        <div className="overflow-scroll" style={{ maxHeight: '600px' }}>
          <table width="1000" className="table table-striped table-bordered align-middle tabla_busqueda">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Tipo</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <RowTableUsuarios 
                key={item.id}
                id={item.id}
                nombre= {item.nombre}
                email={item.email}
                tipo={item.tipo}
                nombre_tipo={item.nombre_tipo}
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

export default UsuariosTabla;