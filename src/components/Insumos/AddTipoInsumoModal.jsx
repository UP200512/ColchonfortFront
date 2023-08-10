import React from "react";
// import "./InsumosList.css";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddInsumo.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddTipoInsumoModal(props) {

    const [nombre, setNombre] = useState("");

    const handleSubmit = () => {

        const newInsumo = {
            nombre: nombre,
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newInsumo),
        };

        fetch("http://localhost:3001/api/tiposInsumo", requestOptions)
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
                    Agregar nuevo tipo insumo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="AddProductoId">
                        <Form.Label>Tipo de Insumo:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength={49}
                            placeholder="tipo de insumo"
                            autoFocus
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group></Form.Group>
                    <br></br>
                    <Button variant="danger" onClick={props.onHide}>
                        Cancelar
                    </Button>
                    <Button type="submit" >Agregar</Button>

                </Form>

            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
}
export default AddTipoInsumoModal;
