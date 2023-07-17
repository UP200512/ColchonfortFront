import React, { useEffect, useState } from "react";
import "./Pedidos.css";
import ProductoBuscado from "./ProductoBuscado";
import ProdcutosAgregados from "./ProductosAgregados";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);
  const [pedidoInput, setPedidoInput] = useState("");
  const [productos, setProductos] = useState([]);
  const [mesa, setMesa] = useState(0);  
  const [insertedIdPedidos, setInsertedIdPedidos] = useState(0);
  useEffect(() => {
    // console.log("InsertedIdPedidos: " + insertedIdPedidos);
    let rows=false;
    pedidos.map((ped) => {
      rows=true;
      const jsonPedidos = {
        id_pedido: insertedIdPedidos,
        id_producto: ped.id_producto,
        cantidad: ped.cantidad,
        precio_unitario: ped.precio,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonPedidos),
      };
      try {
        fetch("http://localhost:3000/api/detallePedidos", requestOptions)
          .then((res) => res.json())
          .then((resjson) => console.log(resjson.affectedRows));

        // window.location.reload();
      } catch (error) {
        alert("no fue posible hacer el registro del pedido");
      }
    });
    if(rows) window.location.replace("/pedidos");
  }, [insertedIdPedidos]);

  useEffect(() => {}, [pedidos]);

  useEffect(() => {}, [productos]);
  useEffect(() => {
    buscarProduto();
  }, [pedidoInput]);

  //funcion para hacer el registro del pedido
  const handleSubmit = (e) => {
    e.preventDefault();

    if ((pedidos.length === 0) || (mesa === 0)) {
      alert(
        "Agrega primero un producto y asegúrate de colocar el número de mesa"
      );
    } else {
      if (window.confirm("Estas a punto de hacer un nuevo pedido")) {
        const jsonMesa = {
          mesa: mesa,
        };
        // console.log(jsonMesa);
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jsonMesa),
        };
        try {
          fetch("http://localhost:3000/api/pedidos", requestOptions)
            .then((res) => res.json())
            .then((resjson) => setInsertedIdPedidos(resjson.id));
        } catch (error) {
          alert("no fue posible hacer el registro del pedido");
        }
      }
    }

    // fetch("http://localhost:3000/api/pedidos", {
    //   method: "POST",
    //   body: JSON.stringify({ mesa: mesa }),
    // })
    //   .then((res) => res.json())
    //   .then((resjson) => console.log(resjson.insertId));

    // console.log(pedidos);
    // console.log(mesa);
  };

  //funcion para pasarla a cada elemento de la lista para agregar un producto al pedido
  function createPedido(NewPedido) {
    if (pedidos.length === 0) {
      setPedidos([NewPedido]);
    } else {
      //programacion para sumar 1 a cantidad si ya existe
      let indexOfRepete = pedidos.findIndex(
        (element) => element.id_producto === NewPedido.id_producto
      );
      if (indexOfRepete === -1) {
        setPedidos([...pedidos, NewPedido]);
      } else {
        let copia = [...pedidos];
        copia[indexOfRepete].cantidad++;
        setPedidos(copia);
      }
    }

    // console.log(pedidos);
  }
  function restarProducto(producto) {
    let indexOfRestar = pedidos.findIndex(
      (element) => element.id_producto === producto.id_producto
    );
    const copia = [...pedidos];
    if (copia[indexOfRestar].cantidad <= 1) {
      eliminarPedido(copia[indexOfRestar].id_producto);
    } else {
      copia[indexOfRestar].cantidad--;
      setPedidos(copia);
    }
  }

  const eliminarPedido = (id) => {
    if (window.confirm("¿Estas seguro que quieres eliminar este producto?")) {
      const nuevosPedidos = pedidos.filter(
        (pedido) => pedido.id_producto !== id
      );
      setPedidos(nuevosPedidos);
      // setTotal(total - 1);
    }
  };
  const buscarProduto = () => {
    // e.preventDefault();
    fetch("http://localhost:3000/api/productos/" + pedidoInput)
      .then((res) => res.json())
      .then((productos) => setProductos(productos));
    // console.log(productos);
  };

  return (
    <div className="ContainerPedidos">

      <form className="pedidos" onSubmit={(e) => handleSubmit(e)}>
        <div className="Num-Mesa">
        <h2>Pedidos de la mesa</h2>
        <label htmlFor="input_mesa">No. de mesa </label>
        <br />
        <input
          id="input_mesa"
          placeholder="Numero"
          type="number"
          onChange={(e) => {
            setMesa(e.target.value);
          }}
          min={0}
          
        />
          
        </div>
        <br />

        <div className="Buscar-Productos">
        <label htmlFor="input_buscar">Buscar Producto</label>
        <input
          id="input_buscar"
          type="text"
          value={pedidoInput}
          onChange={(e) => {
            setPedidoInput(e.target.value);
            e.preventDefault();
            // console.log(e.target.value);
            // console.log(pedidoInput);
          }}
        />
        </div>
        <h3>
          Número de órdenes: <span>{total}</span>
        </h3>
        <ProdcutosAgregados
          pedidos={pedidos}
          eliminarPedido={eliminarPedido}
          restarProducto={restarProducto}
          createPedido={createPedido}
        />
        <div className="alinear-derecha">
          <input className="boton w-sh-100" type="submit" value="Enviar" />
        </div>
      </form>
      <h1>Coincidencias</h1>
      <ProductoBuscado
        productos={productos}
        // pedidos={pedidos}
        createPedido={createPedido}
      />
    </div>
  );
};

export default Pedidos;
