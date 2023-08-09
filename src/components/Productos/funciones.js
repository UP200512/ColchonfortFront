// import { useState } from "react"

/*export function DeleteProducto(id) {
    
    const requestOptions = {
        method: "DELETE"
    }
    const ruta='http://localhost:3001/api/productos/'+ id;

    fetch(ruta, requestOptions)
            .then((res) => res.json())
            .then((data)=>console.log(data))
        
        // console.log(respuesta)
}*/

export function DeleteProducto(id, nombre) {
    if (window.confirm("Estás seguro que deseas eliminar este producto " + nombre)) {
      const requestOptions = {
        method: "DELETE"
      };
      const ruta = 'http://localhost:3001/api/productos/'+ id;
  
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

export function DeleteTipoProducto(id) {
    
    const requestOptions = {
        method: "DELETE"
    }
    const ruta='http://localhost:3001/api/tiposProductos/'+ id;

    fetch(ruta, requestOptions)
            .then((res) => res.json())
            .then((data)=>console.log(data))
        
    console.log("borrado " + id)
}

/*export function DeleteProductoDetalle(id_prod, id_det) {
    
    const requestOptions = {
        method: "DELETE"
    }
    const ruta=`http://localhost:3001/api/producto_detalle/${id_prod}/${id_det}`;

    fetch(ruta, requestOptions)
            .then((res) => res.json())
            .then((data)=>console.log(data))
}*/

export function DeleteProductoDetalle(id_prod, id_det, nombre) {
    if (window.confirm("Estás seguro que deseas eliminar este producto " + nombre)) {
      const requestOptions = {
        method: "DELETE"
      };
      const ruta = `http://localhost:3001/api/producto_detalle/${id_prod}/${id_det}`;
  
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

export function UpdateProducto(id) {
    const requestOptions = {
        method: "PATCH"
    }
    const ruta = 'http://localhost:3001/api/productos/'+id;

    fetch(ruta, requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data))
}