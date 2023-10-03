import React from "react";
import { TodoIcon } from './TodoIcon';

function CompleteIcon(props) {
    return (
        <TodoIcon
            type="check"
            color={props.completed ? '#63c452' : '#808080'}
            onClick={props.onClick} // Debes pasar props.onClick en lugar de props.onComplete
            completed={props.completed}
        />
    );
}

export { CompleteIcon };