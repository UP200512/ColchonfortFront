import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import UpdateTipoProductoModal from "./UpdateTipoProductoModal";

function UpdateTipoProducto({id, nombre}) {
  
  const [modalShow, setModalShow] = React.useState(false);
  // console.log(tipoInsumo)
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        ACTUALIZAR
      </Button>

      <UpdateTipoProductoModal

        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
        nombre={nombre}
        id={id}
      />
    </>
  );
}
export default UpdateTipoProducto;