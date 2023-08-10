import { useState, createContext, useEffect } from "react";
import Carta from "./Carta";
import { useParams } from "react-router-dom";
import CartaTablaDetalleView from "./CartaTablaDetalle";
import OpcionesProductos from "../../components/Opciones_Productos/OpcionesProductos";
import OpcionesProductosDetalle from "../../components/Opciones_Detalle_Productos/OpcionesDetalleProductos";
import TablaTipoProducto from "./TablaTipoProducto";
import CartaTabla from "../../components/Productos/carta_tabla";
import { defaultrequestOptions } from "../../data";

export const DataContext = createContext()

function CartaGlobal() {
    const { variante, id } = useParams();
    const [dataOrigin, setDataOrigin] = useState([]);
    const [data, setDataFiltered] = useState([])

    useEffect(() => {
        // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
        fetch('http://localhost:3000/api/productos', defaultrequestOptions)
            .then(response => response.json())
            .then(data => {
                setDataOrigin(data)
                setDataFiltered(data)
            })
            .catch(error => console.log(error));
        setDataFiltered(dataOrigin)
    }, [id]);
    const typing = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // console.log(searchTerm);
        setDataFiltered(dataOrigin.filter(item => item.nombre.toLowerCase().includes(searchTerm)));
    }
    const renderComponent = () => {
        switch (variante) {
            case 'tabla':
                return (
                    <div>
                        <OpcionesProductos />
                        <CartaTabla />
                    </div>
                );
            case 'menu':
                return (
                    <div >
                        <OpcionesProductos />
                        <Carta />;
                    </div>
                )
            case "detalles":
                return (
                    <div>
                        <OpcionesProductosDetalle />
                        <CartaTablaDetalleView />
                    </div>
                )
            case "tipos":
                return (
                    <div>
                        <OpcionesProductos />
                        <TablaTipoProducto />
                    </div>
                )
            default:
                return (
                    <div >
                        <OpcionesProductos />
                        <Carta />;
                    </div>
                )
        }
    };
    return (
        <DataContext.Provider
            value={{ data, typing, id }}
        >
            {renderComponent()}
        </DataContext.Provider>
    )
}
export default CartaGlobal