import React from "react";
import './Card_Container.css';
import TarjetaRest from "../restaurant_card/restaurant_card";
import imagenSandwich from '../../img/sandwich.jpg';
import imagenBurritos from '../../img/burrito.jpg';
import imagenPizza from '../../img/pizza.jpg';
import imagenEnsalada from '../../img/ensalada.jpg';


function Container(){
    return (
        <div>
        <section class="wrap section">
          <div class="column-4 columns">
                <TarjetaRest
                imagen= {imagenSandwich}
                nombre="Sanwich duo"
                descripcion="Pasta en láminas intercaladas con distintos ingredientes (carnes, verduras, pescados) y que se elabora con bechamel y abundante queso rallado para gratinarla."
                valor="75$"
              />

              <TarjetaRest
                imagen= {imagenPizza}
                nombre="Pizza Margarita"
                descripcion="Pizza clásica con tomate, mozzarella y albahaca fresca."
                valor="120$"
              />

              <TarjetaRest
                imagen= {imagenBurritos}
                nombre="Burritos el pablo"
                descripcion="Burritos ricos como los hace el buen pablo"
                valor="10$"
              />

              <TarjetaRest
                imagen= {imagenEnsalada}
                nombre="Ensalada el pablo"
                descripcion="Ensalada rica como la hace el buen pablo"
                valor="10$"
              />
          </div>
      </section>
      </div>
    );
}

export default Container;