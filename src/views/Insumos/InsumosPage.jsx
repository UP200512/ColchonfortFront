import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Pedidos from "../../components/Pedidos/Pedidos.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
// import Button from "react-bootstrap/Button";
import OpcionesPedidos from "../../components/Opciones_Pedidos/OpcionesPedidos.jsx";
import InsumosList from "../../components/Insumos/InsumosList.jsx";
import NuevoInsumo from "../../components/Insumos/NuevoInsumo.jsx";
function InsumosPage() {
  return (
    <div className="insumospage">

      <Header />
      <NuevoInsumo/>
      {/* <Pedidos/> */}
      <OpcionesPedidos />
      <InsumosList />
      {/* <Footer/> */}
    </div>
  );
}

export default InsumosPage;
