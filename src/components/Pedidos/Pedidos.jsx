import React, { useState } from "react";
import "./Pedidos.css";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);
  const [pedidoInput, setPedidoInput] = useState("");
  

  
  const agregarPedido = () => {
    if (pedidoInput === "") {
      return;
    }

    const nuevoPedido = {
      id: Date.now(),
      nombre: pedidoInput,
    };

    setPedidos([...pedidos, nuevoPedido]);
    setTotal(total + 1);
    setPedidoInput("");
  };

  const eliminarPedido = (id) => {
    const nuevosPedidos = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(nuevosPedidos);
    setTotal(total - 1);
  };

  return (
    <div>
      <h1 style={{ color: "aliceblue" }}>Pedidos</h1>

      <section className="pedidos">
        <h2>Pedidos de la mesa</h2>
        <input
          type="text"
          value={pedidoInput}
          onChange={(e) => setPedidoInput(e.target.value)}
        />
        <button onClick={agregarPedido}>Agregar</button>
        
        <h3>
          Número de órdenes: <span>{total}</span>
        </h3>
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido.id}>
              {pedido.nombre}
              <span
                style={{ cursor: "pointer", marginLeft: "5px" }}
                onClick={() => eliminarPedido(pedido.id)}
              >
                &#215;
              </span>
            </li>
          ))}
        </ul>

        <div className="alinear-derecha">
          <input className="boton w-sh-100" type="submit" value="Enviar" />
        </div>
        
      </section>
    </div>
  );
};

export default Pedidos;
