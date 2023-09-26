import React from 'react';
import './ToDoListStyle.css'
function ToDoList({children}) {
    return (
        <ul>
            {children} {/* No es un objeto como en javascrip */}
        </ul>
    )
}

export { ToDoList };