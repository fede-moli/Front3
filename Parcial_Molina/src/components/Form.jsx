import { useState } from "react"

function Form(props){
const [color, setColor] = useState('')
const [nombre, setNombre] = useState('')
const [mensaje, setMensaje] = useState('')

    function validation(event){
        event.preventDefault()
        if (color.trim() !== ''){
             props.onColor(color)
            setMensaje('')
        }else{
            console.log('Todo mal')
            setMensaje('Ingresa datos por favor.')
        }
        
    }
    return (
       <form onSubmit={validation}
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        }}
       >
        <label htmlFor="nombre">Ingresa tu Nombre </label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        {mensaje ? <p>{mensaje}</p> : null}
        <label htmlFor="color">Ingresa tu color Favorito! </label>
        <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        {mensaje ? <p>{mensaje}</p> : null}
        <button type="submit">Submit</button>
       </form>
    )
}

export default Form