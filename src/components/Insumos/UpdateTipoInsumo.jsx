import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import UpdateTipoInsumoModal from "./UpdateTipoInsumoModal";

function UpdateTipoInsumo({id, nombre}) {
  
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        ACTUALIZAR
      </Button>

      <UpdateTipoInsumoModal

        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
        nombre={nombre}
        id={id}
      />
    </>
  );
}
export default UpdateTipoInsumo;