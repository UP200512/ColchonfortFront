import React from 'react';
import './restaurant_card.css';

function TarjetaRest(props) {
  const { imagen, nombre, descripcion, valor } = props;

  return (
    
        <div
        style={{ background: `url(${imagen}) center`, backgroundSize: 'cover' }}
        className="tarjeta-rest">
            <div className="wrap-text_tarjeta-rest">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <div className="cta-wrap_tarjeta-rest">
                    <div className="precio_tarjeta-rest">
                        <span>{valor}</span>
                    </div>
                    <div className="cta_tarjeta-rest">
                        <a href=".">Pedir ahora</a>
                    </div>
                </div>
            </div>
        </div>

  );
}

export default TarjetaRest;