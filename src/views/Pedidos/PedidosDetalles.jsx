import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Detalles from "../../components/Pedidos/Detalles.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
// import Button from "react-bootstrap/Button";
import OpcionesPedidos from "../../components/Opciones_Pedidos/OpcionesPedidos.jsx";
// import PedidosList from "../../components/Pedidos/PedidosList.jsx";

function PedidosDetalles() {
  return (
    <div className="pedidospage">
    
      <Header/>
      {/* <Pedidos/> */}
      <OpcionesPedidos/>
      <Detalles />
      {/* <PedidosList /> */}

      <Footer/>

    </div>
  );
}

export default PedidosDetalles;
