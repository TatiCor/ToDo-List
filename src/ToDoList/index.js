import React from 'react';
import './ToDoListStyle.css';

function ToDoList({ children }) {
    return (
        <ul>
        {children.map((child, index) => (
            <div key={index}>{child}</div>
        ))}
        </ul>
    );
}

export { ToDoList };
