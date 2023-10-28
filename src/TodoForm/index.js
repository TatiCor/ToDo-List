import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoText, setNewTodoText] = React.useState(''); // Estado para agregar la nueva tarea
    
    const {    
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoText);
        setNewTodoText("");
        setOpenModal(false);
        

    };

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoText(event.target.value);
    } 

    return(
        <form 
            className="todo-form"
            onSubmit={onSubmit} // Usar la función unificada para agregar tareas
        >   
            <input
                placeholder="Add your task!"
                value={newTodoText}
                onChange={onChange}
            />

            <div>
                <button
                    type="button"
                    className="todo-form-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button 
                    type='submit' 
                    className="todo-form-button--add"
                    
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export {TodoForm}
