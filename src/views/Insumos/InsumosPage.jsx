import React from "react";
import OpcionesInsumos from "../../components/Opciones_Insumos/OpcionesInsumos.jsx";
import InsumosList from "../../components/Insumos/InsumosList.jsx";
function InsumosPage() {
  return (
    <div className="insumospage">

      <OpcionesInsumos />
      <InsumosList />
    </div>
  );
}

export default InsumosPage;
