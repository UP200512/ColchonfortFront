import React from 'react';
import './restaurant_card.css';
import { useState } from 'react';

function TarjetaRest(props) {
    const { image, nombre, descripcion, valor } = props;
    const [show_imagen, setImagen] = useState(null);
    console.log(image)
    const imagenURL = `http://localhost:3000/api/producto_imagen/${image}`;

    return (

        <div
            style={{ background: `url(${imagenURL}) center`, backgroundSize: 'cover' }}
            className="tarjeta-rest">
            <div className="wrap-text_tarjeta-rest">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <div className="cta-wrap_tarjeta-rest">
                    <div className="precio_tarjeta-rest">
                        <span>{valor}</span>
                    </div>
                    {/* <div className="cta_tarjeta-rest">
                        <a href=".">Pedir ahora</a>
                    </div> */}
                </div>
            </div>
        </div>

    );
}

export default TarjetaRest;