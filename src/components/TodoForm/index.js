import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './TodoForm.css'



function TodoForm(props) {
    const [newTodoText, setNewTodoText] = useState(props.defaultValue || '');// Estado para agregar la nueva tarea
    const navigate = useNavigate()

    const onCancel = (event) => {
        event.preventDefault();
        navigate('/');
    }

    const onChange = (event) => {
        setNewTodoText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoText);
        navigate('/');
    };

    return(
        <form 
            className="todo-form"
            onSubmit={onSubmit} 
        >   
            <label>{props.label}</label>
            <input
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
                    {props.submitText}
                </button>
            </div>
        </form>
    )
}

export {TodoForm}
