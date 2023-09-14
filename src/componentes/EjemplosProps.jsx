
const listaBotones = ['Cancelar', 'Confirmar', 'Aceptar', 'Guardar']

export const EjemploProps = () => {
    return (
      <>
      {/* //seleccionamos un item del array */}
        {/* <button>{listaBotones[1]}</button> */}

        {listaBotones.map(boton =>
        <button>{boton}</button>)
        }
      </>
    )
  }