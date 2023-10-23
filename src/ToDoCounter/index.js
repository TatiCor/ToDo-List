import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './ToDoCounterStyle.css';

function ToDoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = useContext(TodoContext);



    return (
        <div className='container'>
        <h1>TASKLIST</h1>
        <h2>
            Has completado {completedTodos} de {totalTodos} ToDos
        </h2>
        </div>
    );
}

export { ToDoCounter };
