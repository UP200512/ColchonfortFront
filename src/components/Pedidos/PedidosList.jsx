import React from "react";
import "./PedidosList.css";
import {  useState, useEffect } from "react";
import { PedidosActivos } from "./PedidoActivo";

function PedidosList() {
  const [pedidos, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/pedidos")
      .then((res) => res.json())
      .then((pedidos) => setData(pedidos));
    // .then((data) => console.log(data))
  }, []);

  if (pedidos.length === 0) {
    return <h1>No hay pedidos activos</h1>;
  } else {




    return (
      <div className="pedidoslist" >
          {
            pedidos.map((pedido) =>(
               <div key={pedido.id_pedido} className="cont" > 
                  <PedidosActivos 
                  id_pedido={ pedido.id_pedido} fecha = {pedido.fecha} total={pedido.total}
                  />
              </div>
            ))
              
            
             
          }
          
        
      </div>
    );
  }
}
export default PedidosList;
