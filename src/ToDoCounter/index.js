import React from 'react';
import './ToDoCounterStyle.css';

function ToDoCounter({completedTodos, totalTodos}) {

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
