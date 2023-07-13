import React from "react";
import Pedidos from "../../components/Pedidos/Pedidos.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import OpcionesPedidos from "../../components/Opciones_Pedidos/OpcionesPedidos.jsx";

function PedidosNuevo() {
  return (
    <div className="pedidospage">
    
      <Header/>
      <OpcionesPedidos/>
      <Pedidos/>

      <Footer/>

    </div>
  );
}

export default PedidosNuevo;





// <>
// <Header>

//   </Header>
//   {/* {children} */}
  
// <Footer>
//   </Footer>
// </>