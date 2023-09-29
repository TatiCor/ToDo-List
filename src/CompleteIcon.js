import React from "react";
import { TodoIcon } from './TodoIcon';

function CompleteIcon(props) {
    return (
        <TodoIcon
            type="check"
            color="gray"
            onClick={props.onClick} // Debes pasar props.onClick en lugar de props.onComplete
            completed={props.completed}
        />
    );
}

export { CompleteIcon };