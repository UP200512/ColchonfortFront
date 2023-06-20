import React from "react";
import "./InsumosList.css";
import {  useState, useEffect } from "react";
import InsumosIndividual from "./InsumoIndividual";
import NuevoInsumo from "./NuevoInsumo";
function InsumosList() {
  const [insumos, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/insumos")
      .then((res) => res.json())
      .then((insumos) => setData(insumos));
    // .then((data) => console.log(data))
  }, []);

  if (insumos.length === 0) {
    return <h1>No hay insumos</h1>;
  } else {




    return (
      <div className="insumoslist" >
          {
            insumos.map((insumo) =>(
               <div key={insumo.id_insumo} className="cont" > 
                  <InsumosIndividual 
                  id={ insumo.id_insumo}
                  nombre = {insumo.nombre}
                  tipo={insumo.tipo_insumo_id}
                  unidad={insumo.unidad_de_medida_id}
                  descripcion={insumo.descripcion}
                  />
              </div>
            ))
              
            
             
          }
          
        
      </div>
    );
  }
}
export default InsumosList;
