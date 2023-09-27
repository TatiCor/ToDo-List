import React from 'react';
import './ToDoBtnStyle.css';

function ToDoBtn(props) {
  return (
        <div className='form-container'>
            <form
        onSubmit={(event) => {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (recargar la página)
            if (props.newTodoText.trim() !== '') { // Verificar si el texto de la nueva tarea no está vacío
            props.addTodo(props.newTodoText); // Llama a la función addTodo pasada como prop con el nuevo texto
            }
        }}
        >
        <input
            type="text"
            placeholder="Nueva tarea"
            value={props.newTodoText} // El valor del campo de entrada es controlado por la propiedad newTodoText
            onChange={(event) => props.setNewTodoText(event.target.value)} // Actualiza el valor de newTodoText cuando se cambia el campo de entrada
        />
        <button type="submit">+</button> {/* Botón para enviar el formulario */}
        </form>
    </div>
    
  );
}

export { ToDoBtn };
