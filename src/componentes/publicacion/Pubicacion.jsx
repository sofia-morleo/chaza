import './Publicacion.css'
// const localidad = 'Tortuguitas'
// const zona = 'Zona Norte'

export const Publicacion = (props) => {
  return (
    <div className='publi'>
      <div className="dato_publi">
        <div className="mi_zona">
          <i className="material-icons-outlined"> place</i>
          {props.localidad}, {props.zona}
        </div>
      </div>
      <div className="imagen"></div>
    </div>
  )
}
