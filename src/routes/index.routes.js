import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/Home/HomePage.jsx";
import PedidosPage from "../views/Pedidos/PedidosPage.jsx";
import PedidosNuevo from "../views/Pedidos/PedidosNuevos.jsx";
import PedidosDetalles from "../views/Pedidos/PedidosDetalles.jsx";
import EstadisticasPage from "../views/EstadisticasPage/EstadisticasPage.jsx";
import PersonalizarCuenta from "../views/Pedidos/PersonalisarCuenta.jsx";
import Header from "../components/header/header.jsx";

import InsumosGlobal from "../views/Insumos/InsumosGlobal.jsx";
import CartaGlobal from "../views/Carta/CartaGlobal.jsx";
import Empresa from "../views/Empresa/Empresa.jsx";
import TablaTipoInsumo from "../views/Insumos/TablaTipoInsumo.jsx";
import Login from "../views/login/login.jsx";
import { RequireAuth } from "./PrivateRoute.jsx";
import Signin from "../views/signin/signiin.jsx";
import NoAdmin from "../views/NoAdmin/NoAdmin.jsx";
import UsuariosTabla from "../views/usuarios/UsuariosTabla.jsx";
// import Carta from "../components/CartaExpuesta/Carta.jsx";

function Autho() {
  const token = localStorage.getItem('token');
  const tipo = localStorage.getItem('tipo');
  const isUserLoggedIn = localStorage.getItem("token"); // Cambia esto según cómo verificas si el usuario ha iniciado sesión
  return (
    <BrowserRouter>
    {/* {token && <Header />} */}
    {isUserLoggedIn && tipo === "admin" && <Header />}
      <Routes>
      <Route path="/noadmin" element={<NoAdmin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        {/* <Route path="/carta" element={<Carta />}></Route> */}
        <Route
          path="/"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <HomePage />
            </RequireAuth>
          }
        />

        <Route
          path="/insumos/:variante"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <InsumosGlobal />
            </RequireAuth>
          }
        />
        <Route
          path="/usuarios"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <UsuariosTabla />
            </RequireAuth>
          }
        />
        <Route
          path="/carta/:variante/:id"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo} >
              <CartaGlobal />
            </RequireAuth>
          }
        />
        <Route
          path="/TablaTipoInsumo"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <TablaTipoInsumo />
            </RequireAuth>
          }
        />
        {/* <Route path="/TablaTipoInsumo" element={<TablaTipoInsumo />}></Route> */}
        <Route
          path="/Pedidos"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <PedidosPage />
            </RequireAuth>
          }
        />
        <Route
          path="/Pedidos/nuevo"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <PedidosNuevo />
            </RequireAuth>
          }
        />
        <Route
          path="/Pedidos/detalles/:id"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <PedidosDetalles />
            </RequireAuth>
          }
        />
        <Route
          path="/Empresa"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <Empresa />
            </RequireAuth>
          }
        />
        {/* <Route path="/Empresa" element={<Empresa />}></Route> */}
        <Route
          path="/Pedidos/cuenta/:id"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <PersonalizarCuenta />
            </RequireAuth>
          }
        />
        <Route
          path="/Estadisticas"
          element={
            <RequireAuth isLogged={isUserLoggedIn} tipo={tipo}>
              <EstadisticasPage />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Autho;
