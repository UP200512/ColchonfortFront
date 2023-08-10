import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddInsumo.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function UpdateTipoInsumoModal(props) {

    const id = props.id;
    const [nombre, setNombre] = useState(props.nombre);

    const handleSubmit = () => {
        // e.preventDefault();

        const UpdatedInsumo = {
            nombre: nombre
        };
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UpdatedInsumo),
        };
        const ruta = "http://localhost:3001/api/tiposInsumo/" + id
        // console.log(ruta);
        fetch(ruta, requestOptions)
            .then((res) => res.json())
            //.then((producto) => setInserted(producto));
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
                    Actualizar Tipo Insumo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Tipo Insumo:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength={49}
                            placeholder="Tipo Insumo"
                            autoFocus
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
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
export default UpdateTipoInsumoModal;