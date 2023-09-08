function ToDoList(props) {
    return (
        <ul>
            {props.children} {/* No es un objeto como en javascrip */}
        </ul>
    )
}

export { ToDoList };