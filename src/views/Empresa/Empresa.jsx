import React from "react";
import { useState, useEffect } from "react";
import UpdateProducto from "../../components/Empresa/UpdateEmpresa";
import Logo from "../../img/logo.jpg";

function Empresa() {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
        fetch('http://localhost:3000/api/empresa')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    console.log(data);



    return (
        <>
            <div>
                <hr></hr>
                <h2> Datos de la empresa</h2>

                <hr></hr>
            </div>
            <br></br>
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">

                            <img src={Logo} alt="logo" className="rounded-square img-fluid" style={{ width: '150px', height: '150px' }} />
                            <hr />
                            {data.map(item => (
                            <p className="text-muted mb-4">{item.nombre}</p>
                            ))}
                            <hr />

                            <div class="d-flex justify-content-center mb-2">
                               {data.map(item => (
                               <UpdateProducto 
                                    nombre = {item.nombre}
                                    calle = {item.calle}
                                    numero = {item.numero}
                                    localidad = {item.localidad}
                                    estado = {item.estado}
                                    telefono = {item.telefono}
                                    correo = {item.correo}
                               />
                               ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-8">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Nombre</p>
                                </div>
                                <div class="col-sm-9">
                                    {data.map(item => (
                                        <p class="text-muted mb-0">{item.nombre}</p>
                                    ))}

                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Dirección</p>
                                </div>
                                <div class="col-sm-9">
                                {data.map(item => (
                                    <p class="text-muted mb-0">{"Calle: " + item.calle + " #" + item.numero}</p>
                                    ))}
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Localidad</p>
                                </div>
                                <div class="col-sm-9">
                                {data.map(item => (
                                    <p class="text-muted mb-0">{item.localidad + ", " + item.estado}</p>
                                    ))}
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Teléfono</p>
                                </div>
                                <div class="col-sm-9">
                                {data.map(item => (
                                    <p class="text-muted mb-0">{item.telefono}</p>
                                    ))}
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Correo</p>
                                </div>
                                <div class="col-sm-9">
                                {data.map(item => (
                                    <p class="text-muted mb-0">{item.correo}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Empresa;

