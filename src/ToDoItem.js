import './ToDoItemStyle.css';


function ToDoItem(props) {
    return (
        <li>
            <span className={`icon icon-check ${props.completed && "icon-check--active"}`}>
                V
            </span>
            <p className={`todo-item ${props.completed && "todo-item--complete"} `}>{props.text}</p>
            <span className={`icon icon-delete`}>
                X
            </span>
        </li>
    );
}

export { ToDoItem };
