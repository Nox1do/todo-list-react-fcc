import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';
import { AiFillPropertySafety } from "react-icons/ai";

function TareaFormulario(props){

    const[input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(input);
    }

const manejarEnvio = e => {
    e.preventDefault();
    console.log('enviando formulario');
    const tareaNueva = {
        id: uuidv4(),
        texto: input,
        completado: false,
    }
    props.onSubmit(tareaNueva); 
}

    return (
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input 
            className='tarea-input' 
            type='text' 
            placeholder='Escribe una tarea'
            onChange={manejarCambio} 
            name='texto' />
            <button className='tarea-boton'>Agregar tarea</button>

        </form>
    )
}






export default TareaFormulario;