import React from "react";
import { TodoIcon } from './TodoIcon';

function DeleteIcon(props) {
    return (
        <TodoIcon
            type="delete"
            color="gray"
            onClick={props.onClick} // Debes pasar props.onClick en lugar de props.onDelete
        />
    );
}

export { DeleteIcon };