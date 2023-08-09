import React, { useEffect, useState, useContext } from "react";
import './Card_Container3.css';
import TarjetaRest from "../restaurant_card/restaurant_card";
import { DataContext } from "../../views/Carta/CartaGlobal";

function Container3() {
  const {data}= useContext(DataContext)
  return (
    <div>
      <section class="wrap section">
        <div class="column-1 columns">

        {data.map(item => {
            if (item.prioridad === 3) {
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
      </section>
    </div>
  );
}

export default Container3;