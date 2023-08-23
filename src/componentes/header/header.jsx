// rafce comando para que haga esto
import React from 'react'
import MenuEnlaces from './MenuEnlaces'
import '../../estilosgenerales.css'
import './header.css'
import Login from './login';
import logoPortal from './img/logoPortal.png'/* llama a la imagen */

const Encabezado = () => {
  return (
    <div className='header'>
      <img src= {logoPortal} alt=''/>
      <div className="blanco"></div>

      {/* <div className='quicksand'>PORTAL DE EVENTOS</div> */}
      
      <Login/>
      
      <MenuEnlaces/>
    </div>
  )
}

export default Encabezado

