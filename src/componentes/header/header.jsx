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
      <img src= {logoPortal} alt='logo'/>
      <div className="blanco"></div>

      {/* <div className='quicksand'>PORTAL DE EVENTOS</div> */}
      
      
      <MenuEnlaces/><Login/>
      
    </div>
  )
}

export default Encabezado

