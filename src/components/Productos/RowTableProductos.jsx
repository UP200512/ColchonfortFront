import React from "react";
const RowTableProductos = (props) => {
    const {id_producto, nombre, descripcion, precio} = props;
    return (
        <tr key={id_producto}>
            <td>{id_producto}</td>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>{precio}</td>
            <td>
                <button type="button" class="btn btn-primary" onClick={() => (window.location.href = `/CartaTablaDetalle/${id_producto}`)}>DETALLES</button>
            </td>
        </tr>
    )
}

export default RowTableProductos