import React from 'react';
import './ToDoItemStyle.css';


function ToDoItem(props) {
    return (
        <li>
            <span className={`icon icon-check ${props.completed && "icon-check--active"}`}
            onClick={props.onComplete}>
                V
            </span>
            <p className={`todo-item ${props.completed && "todo-item--complete"} `}>{props.text}</p>
            <span 
            className={`icon icon-delete`}
            onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { ToDoItem };
