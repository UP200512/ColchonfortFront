// import { useState } from "react"

/*export function DeleteInsumo(id, nombre) {
    
  if(window.confirm("Estás seguro que deseas eliminar este insumo"+ " " + nombre)){
    const requestOptions = {
      method: "DELETE"
  }
  const ruta='http://localhost:3000/api/insumos/'+ id;

  fetch(ruta, requestOptions)
          .then((res) => res.json())
          .then((data)=>window.alert("Se ha eliminado correctamente"))
          .catch((error) =>window.alert("No se pudo eliminar correctamente"))
  }
}*/

export function DeleteInsumo(id, nombre) {
  if (window.confirm("Estás seguro que deseas eliminar este insumo " + nombre)) {
    const requestOptions = {
      method: "DELETE"
    };
    const ruta = 'http://localhost:3000/api/insumos/' + id;

    fetch(ruta, requestOptions)
      .then((res) => {
        if (res.ok) {
          // Si la respuesta es exitosa (código 2xx), mostrar la alerta de éxito
          window.alert("Se ha eliminado correctamente");
        } else {
          // Si la respuesta no es exitosa, mostrar la alerta de error
          throw new Error("No se pudo eliminar correctamente");
        }
      })
      .catch((error) => {
        // Captura cualquier error que ocurra durante la petición y muestra la alerta de error
        //window.alert(error.message);
      });
  }
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

export function GetUnidades() {
    return fetch("http://localhost:3000/api/unidades_de_medida")
    .then((res) => res.json())
    .then(async (data)=>  data )
    .catch((error) => {
        console.error("Error fetching tipos de insumos:", error);
        return [];
    });
  }
  
  export function GetTiposDeInsumos() {
    return fetch("http://localhost:3000/api/tiposInsumo")
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error fetching tipos de insumos:", error);
        return [];
      });
  }