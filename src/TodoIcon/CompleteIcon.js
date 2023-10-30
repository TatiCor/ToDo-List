import React from "react";
import { TodoIcon } from '.';

function CompleteIcon(props) {
    return (
        <TodoIcon
            type="check"
            color={props.completed ? '#63c452' : '#808080'}
            onClick={props.onClick} 
            completed={props.completed}
        />
    );
}

export { CompleteIcon };