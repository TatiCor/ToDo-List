import React from "react";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../App/useTodos";

const NewPage = () => {
    const { stateUpdaters } = useTodos();
    const { addTodo } = stateUpdaters

    return(
    <TodoForm 
        label="Add your task"
        submitText="Add"
        submitEvent={(text)=>addTodo(text)}
    />
)
}


export { NewPage };