import React from "react";
import "./InsumosList.css";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddInsumoModal from "./AddInsumoModal";



function NuevoInsumo() {
  const [unidadesMedida, setUnidadesMedida] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [tipoInsumo, setTipoInsumo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/unidades_de_medida")
      .then((res) => res.json())
      .then((unidadesMedida) => setUnidadesMedida(unidadesMedida));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/tiposInsumo")
      .then((res) => res.json())
      .then((tipoInsumo) => setTipoInsumo(tipoInsumo));
  }, []);
  console.log(tipoInsumo)
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Agregar insumo
      </Button>

      <AddInsumoModal
        unidadesmedida= {unidadesMedida}
        show={modalShow}
        backdrop="static"
        onHide={() => setModalShow(false)}
        tipoinsumo = {tipoInsumo}
        

      />
    </>
  );
}
export default NuevoInsumo;