import React from "react";
import { useContext } from "react";
import { CuentasContext } from "../../views/Pedidos/PedidosDetalles";
import { downloadPDF } from "./ticket";
export default function MakeCuentas() {



  // const [cuentas, setCuentas] = useState([]);
  // const [CuentaActiva, setCuentaActiva] = useState([]);
  const { nota } = useContext(CuentasContext)
  // console.log(CuentaActiva)
  if (nota) {
    return (
      <div className="text-center">
        <table style={{ width: "100%" }} id="personalizada">
          <thead className="table table-striped table-hover table-dark table-responsive-sm text-center sticky-top">
            <tr>
              <th colSpan={4}>
                <h1>Dividir la cuenta</h1>
              </th>
            </tr>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Cant</th>
              <td>Precio</td>
            </tr>
          </thead>
          <tbody>

            {nota.map((no, index) => {

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{no.nombre}</td>
                  <td>{no.cantidad}</td>
                  <td>{no.precio_unitario}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn btn-outline-primary" onClick={() => downloadPDF('personalizada') } >Ticket</button>
      </div>
    );
  } else return <h1>No hay productos</h1>;
}
