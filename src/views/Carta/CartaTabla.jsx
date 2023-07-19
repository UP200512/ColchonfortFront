import React from "react";
// import './Carta.css';
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import CartaTabla from "../../components/Productos/Carta_tabla.jsx";
import OpcionesProductos from "../../components/Opciones_Productos/OpcionesProductos.jsx";
import { useState, createContext } from "react";

export const SearchContext = createContext();

function CartaTablaView() {
  const [search, setSearch] = useState("hola");
  const UpdateSearch = (newtext)=>{
    setSearch(newtext);
  }
  return (
    <SearchContext.Provider value={{search, UpdateSearch}}>
      <Header />
      <h1> vamos a ver que arroja esto  {search} </h1>
      <OpcionesProductos />
      <CartaTabla />
      <Footer />
    </SearchContext.Provider>
  );
}

export default CartaTablaView;
