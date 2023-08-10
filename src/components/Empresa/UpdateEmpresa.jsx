import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; 
import UpdateEmpresaModal from "./UpdateEmpresaModal";

function UpdateEmpresa({ nombre, calle, numero, localidad, estado, telefono, correo }) {

  const [modalShow, setModalShow] = React.useState(false);

  // console.log(tipoInsumo)
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Editar Perfil
      </Button>

      <UpdateEmpresaModal

        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
        //tipoproducto = {tipoProducto}
        nombre={nombre}
        calle={calle}
        numero={numero}
        localidad={localidad}
        estado={estado}
        telefono={telefono}
        correo={correo}
      />
    </>
  );
}
export default UpdateEmpresa;