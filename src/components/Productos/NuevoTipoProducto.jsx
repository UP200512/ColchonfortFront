import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddTipoProductoModal from "./AddTipoProductoModal";

function NuevoTipoProducto() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Agregar tipo de producto
      </Button>

      <AddTipoProductoModal
        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default NuevoTipoProducto;