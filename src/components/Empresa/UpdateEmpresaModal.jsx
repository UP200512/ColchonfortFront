import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function UpdateEmpresaModal(props) {

    const [nombre, setNombre] = useState(props.nombre);
    const [calle, setCalle] = useState(props.calle);
    const [numero, setNumero] = useState(props.numero);
    const [localidad, setLocalidad] = useState(props.localidad);
    const [estado, setEstado] = useState(props.estado);
    const [telefono, setTelefono] = useState(props.telefono);
    const [correo, setCorreo] = useState(props.correo);

    const handleSubmit = () => {
        // e.preventDefault();

        const UpdatedProducto = {
            nombre: nombre,
            calle: calle,
            numero: numero,
            localidad: localidad,
            estado: estado,
            telefono: telefono,
            correo: correo
        };
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UpdatedProducto),
        };
        const ruta = "http://localhost:3001/api/empresa"
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
                    Actualizar Empresa
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength={49}
                            placeholder="Empresa"
                            autoFocus
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Calle:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength={49}
                            placeholder="Calle"
                            autoFocus
                            value={calle}
                            onChange={(e) => setCalle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Número:</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            maxLength={49}
                            placeholder="Número"
                            autoFocus
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Localidad:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength={49}
                            placeholder="Localidad"
                            autoFocus
                            value={localidad}
                            onChange={(e) => setLocalidad(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Estado:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            maxLength={49}
                            placeholder="Estado"
                            autoFocus
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Teléfono:</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            maxLength={49}
                            placeholder="Teléfono"
                            autoFocus
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="AddInsumoId">
                        <Form.Label>Correo:</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            maxLength={49}
                            placeholder="Correo"
                            autoFocus
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
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
export default UpdateEmpresaModal;