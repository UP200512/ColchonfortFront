import React from 'react'

function GraficaBarra() {
  return (
    <div class="bar-chart-block block">
  <h2 class='titular'>By Country <span>*1000</span></h2>
  <div class='grafico bar-chart'>
    <ul class='eje-y'>
      <li data-ejeY='60'></li>
      <li data-ejeY='45'></li>
      <li data-ejeY='30'></li>
      <li data-ejeY='15'></li>
      <li data-ejeY='0'></li>
    </ul>
    <ul class='eje-x'>
      <li data-ejeX='37'><i>España</i></li>
      <li data-ejeX='56'><i>Portugal</i></li>
      <li data-ejeX='25'><i>Italia</i></li>
      <li data-ejeX='18'><i>Grecia</i></li>
      <li data-ejeX='45'><i>EE.UU</i></li>
      <li data-ejeX='50'><i>México</i></li>
      <li data-ejeX='33'><i>Chile</i></li>
    </ul>
  </div>
</div>

  )
}

export default GraficaBarra