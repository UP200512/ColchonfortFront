import React from 'react'
import RecentOrders from '../../components/DashBoard/RecentOrders'
import Estadisticas from '../../components/DashBoard/Estadisticas'
import GraficaBarra from '../../components/DashBoard/GraficaBarra'
import GraficaDonaData from '../../components/DashBoard/GraficaDonaData'
import { GraficaLineas } from '../../components/DashBoard/GraficaLineas'
import Ventas from '../../components/DashBoard/Ventas'
function EstadisticasPage() {
  return (
    <div>
        <Estadisticas/>
        <RecentOrders/>
        <Ventas />
        <GraficaBarra/>
        <GraficaDonaData/>
        <GraficaLineas/>
    </div>
  )
}

export default EstadisticasPage