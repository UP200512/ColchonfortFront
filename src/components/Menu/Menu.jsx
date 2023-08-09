import React from "react";
import './Menu.css';

function Menu(props){

  const[Seccion, Platos, descripcion]= props
    return (
       
        <div class="menu-restaurante">
            <h3>{Seccion}</h3>
            
            <h4>{Platos}</h4>
            <p>{descripcion}</p>
            
            <p class="precio-menu">Precio: <span>17$</span></p>
        </div>
        
   

    );
}


export default Menu;