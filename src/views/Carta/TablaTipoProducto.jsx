import React from 'react';
import Header from '../../components/header/header.jsx';
import Footer from "../../components/footer/footer.jsx";
import TipoProductoTabla from '../../components/Productos/TipoProductoTabla.jsx';

function TablaTipoProducto(){
    return(
        <>
        <Header/>
        <TipoProductoTabla/>
        <Footer/>
    </>
    );

    
}

export default TablaTipoProducto;