import React from "react";
import UpdateTipoProducto from "./UpdateTipoProducto";

const RowTableTipoProductos = (props) => {
    const { id_tipo_prod, nombre } = props;
    return (
        <tr key={id_tipo_prod}>
            <td>{id_tipo_prod}</td>
            <td>{nombre}</td>
            <td>
                <UpdateTipoProducto
                    nombre={nombre}
                    id={id_tipo_prod}
                />
            </td>
        </tr>
    )
}

export default RowTableTipoProductos;