// rafce comando para que haga esto
import React from 'react'

import '../../estilosgenerales.css'
import './inicio.css'
import SearchZona from './searchZona'
import SearchBuscar from './searchBuscar'
import BotonBuscar from './BotonBuscar'

const Inicio = () => {
  return (
    <div className="todo">
      <div className="busca">
        <h1>ENCONTRÁ TODO PARA TU EVENTO</h1>
        <div className="Buscar">
          <SearchZona />
          <SearchBuscar />
          <BotonBuscar/>
        </div>

      </div>

    </div>




  )
}

export default Inicio

