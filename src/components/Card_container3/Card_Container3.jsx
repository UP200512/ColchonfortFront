import React, { useEffect, useState, useContext } from "react";
import './Card_Container3.css';
import TarjetaRest from "../restaurant_card/restaurant_card";
import { DataContext } from "../../views/Carta/CartaGlobal";
import cerveza from '../../img/cerveza.jpg';

function Container3() {
  const { data } = useContext(DataContext)
  return (
    <div>
      <section className="wrap section">
        <div className="column-1 columns">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={cerveza} className="d-block w-50" alt="..." />
              </div>
              <div className="carousel-item active">
              {data.map(item => {
                if (item.prioridad === 3) {
                  // console.log(item)
                  return (
                    <TarjetaRest
                      image={item.imagen}
                      nombre={item.nombre}
                      descripcion={item.descripcion}
                      valor={item.precio}
                    />
                  );
                }
              })}
              </div>
              

              <div className="carousel-item">
                <img src={cerveza} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


        </div>
      </section>
    </div>
  );
}

export default Container3;