import React from "react";
import UpdateTipoInsumo from "./UpdateTipoInsumo";

const RowTableTipoInsumo = (props) => {
    const { id_tipo, nombre } = props;
    return (
        <tr key={id_tipo}>
            <td>{id_tipo}</td>
            <td>{nombre}</td>
            <td>
                {<UpdateTipoInsumo
                    nombre={nombre}
                    id={id_tipo}
                />}
            </td>
        </tr>
    )
}

export default RowTableTipoInsumo;