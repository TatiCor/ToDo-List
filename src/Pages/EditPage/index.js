import React from "react";
import { useParams } from "react-router-dom";
import { useTodos } from "../../App/useTodos";
import { TodoForm } from "../../components/TodoForm";
import {TodosLoading } from "../../ui/TodosLoading"

const EditPage = () => {
    const params = useParams()
    const { states, stateUpdaters, loading } = useTodos();
    const { editTodo, getTodoById } = stateUpdaters;
    const { searchedTodos } = states;
    
    const id = Number(params.id)
    const todoToEdit = getTodoById(id)

    console.log(searchedTodos);
    console.log(todoToEdit);
    
    if (loading || searchedTodos.length === 0) {
        return <TodosLoading />
    }
    
    return(
        <TodoForm 
        label="Edit your task"
        submitText="Edit"
        submitEvent={(newText)=>editTodo(id, newText)}
        defaultValue={todoToEdit.text}
        />
    )
}


export { EditPage };