import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AlreadyAgregados=({pedidos, eliminarPedido, restarProducto, createPedido})=>{
  const  [total, setTotal]=useState(0);
    return(
        <ul>
          {pedidos.map((pedido) => (
            
            <li key={pedido.id_detalle}>
              {pedido.nombre + " /cantidad: " }

              {/* <Button variant="danger" onClick={(e)=>{
                e.preventDefault();
                restarProducto(pedido)
              }} >-</Button> */}
            
              {" " + pedido.cantidad + "/ "}
              {"Precio unitario: $" + pedido.precio_unitario + " / "}
              {"Precio total: $" + pedido.precio_unitario*pedido.cantidad + " / "}
              {"Fecha: " + pedido.fecha }
              {/* <Button
              variant="success"
              onClick={ (e) => {
                e.preventDefault();
                createPedido({
                  id_producto: pedido.id_producto,
                  nombre: pedido.nombre,
                  descipcion: pedido.descipcion,
                  precio: pedido.precio,
                  cantidad:1
                });
              }}
    
            >
              +
            </Button> */}
              {/* <span
                style={{ cursor: "pointer", marginLeft: "5px" }}
                onClick={() => eliminarPedido(pedido.id_producto)}
              >
                &#215;
              </span> */}
            </li>
          ))}
        </ul>
    );
}


export default AlreadyAgregados;