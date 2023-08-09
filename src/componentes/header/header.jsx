// rafce comando para que haga esto
import React from 'react'
import MenuEnlaces from './MenuEnlaces'
import '../../estilosgenerales.css'
import './header.css'

const Encabezado = () => {
  return (
    <div className='header'>
      <div className='blanco'>PORTAL DE EVENTOS</div>
      
      <MenuEnlaces/>
    </div>
  )
}

export default Encabezado

