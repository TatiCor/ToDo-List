import React from "react";
import { TodoIcon } from '.';

function EditIcon(props) {
    return (
        <TodoIcon
            type="edit"
            color="gray"
            onClick={props.onClick} 
        />
    );
}

export { EditIcon };