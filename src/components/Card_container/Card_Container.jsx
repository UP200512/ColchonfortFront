import React, { useContext } from "react";
import './Card_Container.css';
import TarjetaRest from "../restaurant_card/restaurant_card";
import { DataContext } from "../../views/Carta/CartaGlobal";
import { DataContextHome } from "../../views/Home/HomePage";


function Container() {
  const {data}= useContext(DataContext) || []
  const dataHome= useContext(DataContextHome)
  // console.log("esto tiene data")
  return (
    <div>
      <section class="wrap section">
        <div class="column-4 columns">

          {
          dataHome?.map(item => {
            if (item.prioridad === 1) {
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
          {
            data?.map(item => {
              if (item.prioridad === 1) {
                return (
                  <TarjetaRest
                    image={item.imagen}
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    valor={item.precio}
                  />
                );
              }
            })
          }

        </div>
      </section>
    </div>
  )

}

export default Container;