import React from 'react';
// import './Carta.css';
import Header from '../../components/header/header.jsx';
import Footer from "../../components/footer/footer.jsx";
import CartaTablaDetalle from '../../components/Productos/carta_tabla_detalle.jsx';
import { useParams } from 'react-router-dom';

function CartaTablaDetalleView() {

    const { id_producto } = useParams();
    console.log(id_producto);

    return (
        <React.Fragment>
            <Header />
            <CartaTablaDetalle
                id_producto={id_producto}
            />
            <Footer />
            </React.Fragment>

    );
}

export default CartaTablaDetalleView;



