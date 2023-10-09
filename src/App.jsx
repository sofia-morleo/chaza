// import './App.css'
import Encabezado from './componentes/header/header'
import Footer from './componentes/footer/footer'
import { EjemploProps } from './componentes/EjemplosProps'
import { ContPubli } from './componentes/publicacion/ContenedorPubli'
import Inicio from './componentes/inicio/inicio'
//apliccion de ropa
import { Landing } from './views/Landing'
function App() {

  return (
    <>
      
      {/* <EjemploProps />
      <ContPubli/> */}

      <Encabezado/>
      
      <Inicio/>
      {/* <Footer/>  */}
      

      {/* aplicacion de ropa */}
      {/* <Landing/> */}

    </>
  )
}

export default App
