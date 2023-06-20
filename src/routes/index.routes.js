import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/Home/HomePage.jsx";
import  Carta  from "../views/Carta/Carta.jsx";
import PedidosPage from "../views/Pedidos/PedidosPage.jsx";
<<<<<<< HEAD
import PedidosNuevo from "../views/Pedidos/PedidosNuevos.jsx";
=======
import InsumosPage from "../views/Insumos/InsumosPage.jsx";
>>>>>>> Danielrescate


function Autho() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
<<<<<<< HEAD
=======
        <Route path="/insumos" element={<InsumosPage/>}></Route>
>>>>>>> Danielrescate
        <Route path="/Carta" element={<Carta/>}></Route>
        <Route path="/Pedidos" element={<PedidosPage/>}></Route>
        <Route path="/Pedidos/nuevo" element={<PedidosNuevo/>}></Route>
        <Route
          path="/*"
          element={
            <div> Pagina no encontrada</div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Autho;