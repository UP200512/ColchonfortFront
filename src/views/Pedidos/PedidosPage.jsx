import React from "react";
import OpcionesPedidos from "../../components/Opciones_Pedidos/OpcionesPedidos.jsx";
import PedidosList from "../../components/Pedidos/PedidosList.jsx";

function PedidosPage() {
  return (
    <div className="pedidospage">
    
      {/* <Pedidos/> */}
      <OpcionesPedidos/>
      <PedidosList />
    </div>
  );
}
export default PedidosPage;
