import React from "react";
//import "./InsumosList.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddTipoInsumoModal from "./AddTipoInsumoModal";

function NuevoTipoInsumo() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Agregar tipo de insumo
      </Button>

      <AddTipoInsumoModal
        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default NuevoTipoInsumo;