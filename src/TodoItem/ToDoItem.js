import React from 'react';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import './ToDoItemStyle.css';

function ToDoItem(props) {
    return (
        <li>
            <CompleteIcon 
                onClick={props.onComplete} 
                completed={props.completed} />

            <p className={`todo-item ${props.completed && "todo-item--complete"}`}>{props.text}</p>


            
            <DeleteIcon 
                onClick={props.onDelete} />
        </li>
    );
}

export { ToDoItem };
