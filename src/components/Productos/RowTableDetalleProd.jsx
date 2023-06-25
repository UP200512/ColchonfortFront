import React from "react";
const RowTableProductos = (props) => {
    const {id_producto, id_detalle, nombre_producto, tipo_producto, id_insumo, nombre_insumo, tipo_insumo, cantidad} = props;
    return (
        <tr key={id_detalle}>
            <td>{id_producto}</td>
            <td>{id_detalle}</td>
            <td>{nombre_producto}</td>
            <td>{tipo_producto}</td>
            <td>{id_insumo}</td>
            <td>{nombre_insumo}</td>
            <td>{tipo_insumo}</td>
            <td>{cantidad}</td>
            <td>
                <button type="button" class="btn btn-primary" onclick="window.location.href = ''">DETALLES</button>
            </td>
        </tr>
    )
}

export default RowTableProductos