import React from 'react';
// import './Carta.css';
import Header from '../../components/header/header.jsx';
import Footer from "../../components/footer/footer.jsx";
import CartaTabla from '../../components/Productos/carta_tabla.jsx';

function CartaTablaView() {
    return (
        <React.Fragment>
            <Header />
            <CartaTabla />
            <Footer />
            </React.Fragment>

    );
}

export default CartaTablaView;



