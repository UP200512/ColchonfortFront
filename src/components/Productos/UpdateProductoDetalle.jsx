import React from "react";
//import "./InsumosList.css";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import AddInsumoModal from "./AddInsumoModal";
import UpdateProductoDetalleModal from "./UpdateProductoDetalleModal";

function UpdateProductoDetalle({id_producto, id_detalle, nombre_insumo, cantidad}) {
  
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Actualizar producto detalle
      </Button>

      <UpdateProductoDetalleModal

        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
        id_producto = {id_producto}
        id_detalle = {id_detalle}
        nombre_insumo = {nombre_insumo}
        cantidad = {cantidad}
      />
    </>
  );
}
export default UpdateProductoDetalle;