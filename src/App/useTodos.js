import React from "react";
import { useLocalStorage } from "./useLocalStorage.js"

// Convertimos en un custom hook y nos deshacemos del contexto
function useTodos() {
    // States
    const {
        item: todos, 
        saveItem: saveTodosLS,
        loading,
        error,
        sincronizeItem: sincronizeTodos
    } = useLocalStorage('Todos_V2', []); // Estado para establecer to dos 
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    const [searchValue, setSearchValue] = React.useState(''); // estado para buscar y filtrar

    // Main functions
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text || ''; // Verifica que todo.text no sea undefined
        const searchText = searchValue.toLowerCase(); // Búsqueda insensible a mayúsculas y minúsculas
        return todoText.toLowerCase().includes(searchText); // Asegúrate de que ambos textos estén en minúsculas
    });

    // add to-do
    const addTodo = (text) => {
        const id = newTodoId()
        const newTodo = { id, text, completed: false };
        const newTodos = [...todos, newTodo];
        saveTodosLS(newTodos);
    };
    
    // get to-do
    const getTodoById = (id) => {
        return todos.find(todo => todo.id === id)
    }

    // to-do completed
    const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === id);
        newTodos[todoIndex].completed = true;
        saveTodosLS(newTodos);
    };
    // delete to-do
    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === id);
        newTodos.splice(todoIndex, 1);
        console.log("hiciste clic para eliminar un to do");
        
        saveTodosLS(newTodos);
    };
    // edit to-do
    const editTodo = (id, newText) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === id);
        newTodos[todoIndex].text = newText;
        saveTodosLS(newTodos);
        
    }

    const states = {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchedTodos,
        searchValue,
    };

    const stateUpdaters = {
        setSearchValue,
        getTodoById,
        addTodo,
        editTodo,
        completeTodo,
        deleteTodo,
        editTodo,            
        sincronizeTodos
        
    }

    // to-do ID generator
    const newTodoId = () => {
        return Date.now();
    }

    // eliminamos provider y hacemos un objeto con las props
    return ({ states, stateUpdaters })
}



export {useTodos};