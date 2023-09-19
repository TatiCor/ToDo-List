// esto es un componente. Empiezan en Mayúscula
function ToDoItem(props) {
    return (
      // elementos de react.js (se renderizará en el html)
        <li>
            <span>V </span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { ToDoItem };