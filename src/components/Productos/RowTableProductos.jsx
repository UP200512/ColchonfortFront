import React from "react";
import { DeleteProducto } from "./funciones";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import UpdateProducto from "./UpdateProducto";

const RowTableProductos = (props) => {
    const { id_producto, nombre, descripcion, precio, tipo, id_tipo } = props;
    return (
        <tr key={id_producto}>
            <td>{id_producto}</td>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>{precio}</td>
            <td>{tipo}</td>
            <td>
                <button type="button" class="btn btn-primary" onClick={() => (window.location.href = `/CartaTablaDetalle/${id_producto}`)}>DETALLES</button>
            </td>
            <td>
                <Form onSubmit={() => DeleteProducto(id_producto)}>
                    <Form.Group>
                        <Button variant="danger"
                            type="submit"
                        >Eliminar</Button>

                    </Form.Group>
                </Form>
            </td>
            <td>
                <UpdateProducto
                    nombre={nombre}
                    id={id_producto}
                    tipo={tipo}
                    precio={precio}
                    id_tipo={id_tipo}
                    descripcion={descripcion}
                />
            </td>
        </tr>
    )
}

export default RowTableProductos