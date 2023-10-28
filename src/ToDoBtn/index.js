import React, { useContext } from 'react';
import './ToDoBtnStyle.css'
import { TodoContext } from '../TodoContext'; // Asegúrate de importar el contexto adecuadamente

function ToDoBtn() {
    const {setOpenModal} = useContext(TodoContext); // Suscribirse al contexto y obtener los valores y funciones necesarios

    const onClick= (event) => {
        event.preventDefault();
        setOpenModal(state => !state) // cambiar estado de manera dinámica
    }
    
    return (
        <div className='form-container'>
            <form
                
            >
                <button 
                    type="button"
                    className='add-todo'
                    onClick={onClick}>+</button>
            </form>
        </div>
    );
}

export {ToDoBtn};
