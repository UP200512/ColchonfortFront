import React, { useEffect, useState } from "react";
import './Card_Container2.css';
import TarjetaRest from "../restaurant_card/restaurant_card";
import imagenSandwich from '../../img/sandwich.jpg';
import imagenBurritos from '../../img/burrito.jpg';
import imagenPizza from '../../img/pizza.jpg';
import imagenEnsalada from '../../img/ensalada.jpg';


function Container2() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
    fetch('http://localhost:3000/api/productos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <section class="wrap section">
        <div class="column-2 columns">

        {data.map(item => {
            if (item.prioridad === 2) {
              return (
                <TarjetaRest
                  imagen={imagenSandwich}
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

export default Container2;