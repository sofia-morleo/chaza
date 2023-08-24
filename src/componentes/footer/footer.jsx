import React from "react";
import '../../estilosgenerales.css'
import '../header/header'
import './footer.css'
import logoPortal from '../header/img/logoPortal.png'

const PiePagina = () => {
    return(
        <div className="footer blanco">
            <div className="clo50"><img src={logoPortal}/>
            <div className="col100 flex">
                <div className="col50">
                    <ul className="lista_colum">
                        <li>Categorias</li>
                        <li>Salones</li>
                        <li>Imgenes Personales</li>
                        <li>Contactos</li>
                    </ul>
                </div>

                <div className="colo50">
                    <ul className="lista_colum">
                        <li>Aviso Legales</li>
                        <li>Termino y condiciones</li>
                        <li>Trabaja con Nosotros</li>
                        <li>Anulacion en el portal</li>
                    </ul>
                </div>

            </div>
            </div>
        </div>
    )
}

export default PiePagina