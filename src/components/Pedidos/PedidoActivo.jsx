
export function PedidosActivos(props) {
  const { id_pedido, fecha, total, activo, mesa } = props;

  return (
    <div>
      
          <div key={id_pedido}>
            <h1>Mesa {mesa}</h1>
            <h2>Numero de pedido {id_pedido} </h2>
            <h3>Fecha {fecha} </h3>
            <h3>Total {total} </h3>
            {/* {if} */}
            <h3>Activo</h3>
          </div>
        <button onClick={()=>window.location.href="/pedidos/detalles/" + id_pedido } >Detalles</button>
      </div>
  );
}
