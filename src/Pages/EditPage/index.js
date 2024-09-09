import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useTodos } from "../../App/useTodos";
import { TodoForm } from "../../components/TodoForm";
import {TodosLoading } from "../../ui/TodosLoading"

const EditPage = () => {
    const location = useLocation();
    const params = useParams();
    const { states, stateUpdaters, loading } = useTodos();
    const { editTodo, getTodoById } = stateUpdaters;
    const { searchedTodos } = states;

    let todoText;
    
    const id = Number(params.id)
    
    console.log(searchedTodos);
    console.log(todoText, "text todo");
    
    
    if (location.state?.todo) {
        console.log("muestro ahora sin cargar");
        todoText = location.state.todo.text
    } else if (loading || searchedTodos.length === 0) {
        return <TodosLoading />
    } else {
        const todoToEdit = getTodoById(id)
        todoText = todoToEdit
    }
    console.log(todoText);
    
    return(
        <TodoForm 
        label="Edit your task"
        submitText="Edit"
        submitEvent={(newText) => editTodo(id, newText)}
        defaultValue={todoText}
        />
    )
}


export { EditPage };