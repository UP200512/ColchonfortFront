import React from "react";
// import UpdateTipoInsumo from "./UpdateTipoInsumo";

const RowTableUsuarios = (props) => {
    const token = localStorage.getItem('token');
    const { id, nombre, email, tipo, nombre_tipo } = props;


    const CambiarTipo = (e) => {
        const newtipo= e.target.value
        console.log(newtipo)
        if (window.confirm("Cambiar el tipo de usuario")) {
            const requestOptions = {
                method: "put",
                headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({
                    tipo: newtipo
                })
            };
            fetch('http://localhost:3000/api/usuariotipo/' + id, requestOptions)
                .then(response => response.json())
                .then(data => {
                    // setData(data)
                    console.log(data)
                    if (data.serverStatus === 2) {
                        alert("Se cambió exitosamente")
                        window.location.reload()
                    } else {
                        alert("Algo salió mal");
                    }

                })
                .catch(error => {
                    console.log(error)
                    alert("Algo salió mal 3");
                });
        }
    }

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{email}</td>
            <td>
                {nombre_tipo}
            </td>
            <td>
                <label htmlFor="tipos">Cambiar el tipo de usuario</label> <br />
                <select name="Tipos" id="tipos" value={tipo} onChange={(e)=>CambiarTipo(e)}>
                    {/* <option value={tipo}>Cambiar el tipo de usuario</option> */}
                    <option value="1">Default</option>
                    <option value="5">Administrador</option>
                </select>

            </td>
        </tr>
    )
}

export default RowTableUsuarios;