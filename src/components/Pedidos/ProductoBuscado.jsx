import React, { useEffect, useState } from "react";
// import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ProductoBuscado = ({ productos, createPedido }) => {
  return (
    <ul>
      {productos.map((producto) => {
        return (
          <li key={producto.id_producto}>
            {producto.nombre +
              "  -->  $" +
              producto.precio}
              
            <Button
              variant="success"
              onClick={ (e) => {
                e.preventDefault();
                createPedido({
                  id_producto: producto.id_producto,
                  nombre: producto.nombre,
                  descripcion: producto.descripcion,
                  precio: producto.precio,
                  cantidad:1
                });
              }}
            >
              +
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
export default ProductoBuscado;
