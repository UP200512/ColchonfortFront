import React from "react";
import GraficaDona from "./GraficaDona";

const GraficaDonaData = () => {
  const data = [
    { os: "ios", percentage: 21 },
    { os: "mac", percentage: 39 },
    { os: "win", percentage: 31 },
    { os: "linux", percentage: 9 },
  ];

  return (
    <div>
      {/* Otros componentes */}
      <GraficaDona data={data} />
      {/* Otros componentes */}
    </div>
  );
};

export default GraficaDonaData;