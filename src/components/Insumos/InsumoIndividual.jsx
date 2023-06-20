function InsumosIndividual(props) {
  const { id, nombre, tipo, unidad, descripcion } = props;

  return (
    <div>
      {
        
          <div key={id}>
            <h2>Nombre del insumo {nombre} </h2>
            <h3>tipo de insumo {tipo} </h3>
            <h3>unidad de medida {unidad} </h3>
            <h3>descripcion de insumo {descripcion} </h3>
          </div>
        
      }
    </div>
  );
}

export default InsumosIndividual;