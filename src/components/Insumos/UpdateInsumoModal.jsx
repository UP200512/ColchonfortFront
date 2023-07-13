import React from "react";
import "./InsumosList.css";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddInsumo.css";
import Form from "react-bootstrap/Form";
import { useState} from "react";

function UpdateInsumoModal(props) {


    const { unidadesmedida, tipoinsumo } = props;
    const id=props.id;
    const [nombre, setNombre] = useState(props.nombre);
    const [tipo, setTipo] = useState(props.tipo);
    const [unidad, setUnidad] = useState(props.unidad);
    const [cantidad, setCantidad] = useState(props.cantidad);
    const [descripcion, setDescripcion] = useState(props.descripcion);
    const [insertedInsumo, setInserted] = useState({})  ;

    const handleSubmit = () => {
        // e.preventDefault();

        const UpdatedInsumo = {
            nombre: nombre,
            tipo_insumo_id: tipo,
            unidad_de_medida_id: unidad,
            descripcion: descripcion,
            cantidad: cantidad,
        };
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UpdatedInsumo),
        };
        const ruta= "http://localhost:3000/api/insumos/" + id
        // console.log(ruta);
        fetch(ruta, requestOptions)
            .then((res) => res.json())
            .then((insumo) => setInserted(insumo));
        // console.log(insertedInsumo);
        // .then((data) => console.log(data))

        // console.log(newInsumo);
    };

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="AddModal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Actualizar insumo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Insumo:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength={49}
                            placeholder="Insumo"
                            autoFocus
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo de insumo:</Form.Label>
                        <Form.Select
                            required
                            defaultValue={-1}
                            aria-label="tipo_de_insumo"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                        >
                            <option value={-1} disabled>
                                Selecciona un tipo de insumo
                            </option>
                            {tipoinsumo.map((tipo) => (
                                <option key={tipo.id_tipo} value={tipo.id_tipo}>
                                    {tipo.nombre}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Unidad de medida:</Form.Label>
                        <Form.Select
                            required
                            defaultValue={-1}
                            aria-label="unidad_de_medida"
                            value={unidad}
                            onChange={(e) => setUnidad(e.target.value)}
                        >
                            <option value={-1} disabled>
                                Selecciona una unidad de medida
                            </option>
                            {unidadesmedida.map((unidad) => (
                                <option key={unidad.id_unidad} value={unidad.id_unidad}>
                                    {unidad.nombre} - {unidad.abreviacion}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Cantidad">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control
                            required
                            min={0}
                            type="number"
                            value={cantidad}
                            pattern="[0-9]"
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>Descipción</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            maxLength={99}
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </Form.Group>
                    
                        <Button variant="danger" onClick={props.onHide}>
                            Cancelar
                        </Button>
                        <Button type="submit" >Actualizar</Button>

                    
                </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}
export default UpdateInsumoModal;