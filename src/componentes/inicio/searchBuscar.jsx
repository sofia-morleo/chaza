import React from 'react'
import './search.css'
import '../../estilosgenerales.css'

const SearchBuscar = () => {
    return (
        <>
            <form action="#">
                <select name="buscar">
                    <option value="">¿Qué estás buscando?</option>
                    <option value="Quinta">Quinta</option>
                    <option value="Cumpleaños">Cumpleaños</option>
                    <option value="Boda">Boda</option>
                    <option value="Salon_de_Fiestas">Salon de Fiestas</option>

                </select>

            </form>


        </>)
}
export default SearchBuscar
