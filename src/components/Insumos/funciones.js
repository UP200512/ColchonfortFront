// import { useState } from "react"

export function DeleteInsumo(id) {
    
    const requestOptions = {
        method: "DELETE"
    }
    const ruta='http://localhost:3000/api/insumos/'+ id;

    fetch(ruta, requestOptions)
            .then((res) => res.json())
            .then((data)=>console.log(data))
        
        // console.log(respuesta)
}

export function UpdateInsumo (id) {
    const requestOptions = {
        method: "PATCH"
    }
    const ruta = 'http://localhost:3000/api/insumos/'+id;

    fetch(ruta, requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data))
}