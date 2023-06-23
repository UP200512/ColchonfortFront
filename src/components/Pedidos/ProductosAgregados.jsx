import React from "react";
import { Button } from "react-bootstrap";

const ProdcutosAgregados=({pedidos, eliminarPedido, restarProducto, createPedido})=>{
    return(
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido.id_producto}>
              {pedido.nombre + "__________cantidad: "}

              <Button variant="danger" onClick={(e)=>{
                e.preventDefault();
                restarProducto(pedido)
              }} >-</Button>
            
              {" " + pedido.cantidad + " "}

              <Button
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
            </Button>
              <span
                style={{ cursor: "pointer", marginLeft: "5px" }}
                onClick={() => eliminarPedido(pedido.id_producto)}
              >
                &#215;
              </span>
            </li>
          ))}
        </ul>
    );
}


export default ProdcutosAgregados;