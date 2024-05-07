import React from 'react';
import './ToDoCounterStyle.css';

function ToDoCounter({completedTodos, totalTodos, loading}) {

    return (
        <div className='container'>
            <h1>TO-DO LIST</h1>
            <h2 className={`todo-counter ${!!loading && "todo-counter-loading"}`}>
                You have completed {completedTodos} of {totalTodos} TODOs
            </h2>
        </div>
    );
}

export { ToDoCounter };
