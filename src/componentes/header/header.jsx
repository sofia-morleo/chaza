// rafce comando para que haga esto
import React from 'react'
import MenuEnlaces from './MenuEnlaces'
import '../../estilosgenerales.css'
import './header.css'
import Login from './login';

const Encabezado = () => {
  return (
    <div className='header'>
      <div className='quicksand'>PORTAL DE EVENTOS</div>
      <MenuEnlaces/>
      <Login/>
    </div>
  )
}

export default Encabezado

