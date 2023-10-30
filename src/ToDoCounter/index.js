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
            <h1>TO-DO LIST</h1>
            <h2>
                You have completed {completedTodos} of {totalTodos} To-Dos
            </h2>
        </div>
    );
}

export { ToDoCounter };
