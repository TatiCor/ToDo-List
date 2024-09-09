import React from 'react';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import './ToDoItemStyle.css';
import { EditIcon } from '../TodoIcon/EditIcon';

function ToDoItem(props) {
    return (
        <li>
            <div>
                <CompleteIcon 
                    onClick={props.onComplete} 
                    completed={props.completed} 
                />
            </div>
            <p className={`todo-item ${props.completed && "todo-item--complete"}`}>{props.text}</p>


            <div>            
                <DeleteIcon 
                    onClick={props.onDelete} 
                />

                <EditIcon onClick={props.onEdit}/>
            </div>
        </li>
    );
}

export { ToDoItem };
