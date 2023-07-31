import { useContext } from "react";
import { CuentasContext } from "../../views/Pedidos/PedidosDetalles";
import { BsFillFilePlusFill } from 'react-icons/bs';
import { downloadPDF } from "./ticket";

const AlreadyAgregadosByProduct = () => {

  const { CuentaActiva, AddProduct } = useContext(CuentasContext)

  // console.log(pedidos)
  if (CuentaActiva.length > 0) {
    let total = 0;
    return (
      <div className=""
        style={{
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <table className="table table-striped table-hover table-dark table-responsive-sm text-center" id="by_product">
          <thead className="sticky-top" >
            <tr className="table-secondary">
              <th colSpan={5}>Cuenta por productos</th>
            </tr>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Cant</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {CuentaActiva.map((item) => {
              total = total + item.cantidad * item.precio_unitario;
              return (
                <tr key={item.id_producto}>
                  <th>
                    <button type="button" onClick={(e) => {
                      AddProduct(item);
                    }}>
                      <BsFillFilePlusFill />
                    </button>

                  </th>
                  <td> {item.nombre} </td>
                  <td> {item.cantidad} </td>
                  <td> {item.precio_unitario} </td>
                  <td> {item.precio_unitario * item.cantidad} </td>
                </tr>
              );
            })}
            <tr className="table-success sticky-bottom">
              <td colSpan={4} className="text-center">Total</td>

              <td>{total}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-dark" onClick={() => downloadPDF('by_product', 5) } >Ticket</button>
      </div>
    );
  } else {
    return <h4>No restan productos en este pedido</h4>;
  }
};

export default AlreadyAgregadosByProduct;
