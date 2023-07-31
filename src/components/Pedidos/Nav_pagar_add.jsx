import React, {useContext} from 'react'
import { CuentasContext } from '../../views/Pedidos/PedidosDetalles'
import{SiCashapp} from 'react-icons/si'
import { AiTwotoneEdit } from 'react-icons/ai'
function Nav_pagar_add() {
    const {action, UpdateAction} = useContext(CuentasContext)
    return (
        <div className='text-center' style={{  marginTop: '10px', marginBottom:'10px' }}>
            <button className={`btn btn-outline-light ${!action ? "active" : ""}`} onClick={()=>UpdateAction(false)}>
                <AiTwotoneEdit fontSize={50} style={{ display: 'inline-block', marginRight: '10px' }} /> Modificar
            </button>
            <button style={{ marginLeft: "20px" }} className={`btn btn-outline-light ${action ? "active" : ""}`} onClick={()=>UpdateAction(true)}>
                <SiCashapp fontSize={50} style={{ display: 'inline-block', marginRight: '10px' }} /> Cuenta
            </button>

        </div>
    )
}

export default Nav_pagar_add
