import React from 'react'
import './search.css'
import '../../estilosgenerales.css'

const SearchZona = () => {
    return (
        <>
            <form action="#">
                <select name="buscar">
                    <option value="">Zona:</option>
                    <option value="Norte">Zona Norte</option>
                    <option value="Oeste">Zona Oeste</option>
                    <option value="Sur">Zona Sur</option>
                    <option value="Este">Zona Este</option>

                </select>

            </form>
        </>

    )
}

export default SearchZona
