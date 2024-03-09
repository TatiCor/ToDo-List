import React from "react";
import { useLocalStorage } from "./useLocalStorage.js"



// Convertimos en un custom hook y nos deshacemos del contexto
function useTodos() {
    // States
    const {
        item: todos, 
        saveItem: saveTodosLS,
        loading,
        error
    } = useLocalStorage('Todos_V1', []); // Estado para establecer to dos 
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    const [searchValue, setSearchValue] = React.useState(''); // estado para buscar y filtrar
    const [openModal, setOpenModal] = React.useState(false)

    // Main functions
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase(); // obtengo el texto de cada TODO
        const searchText = searchValue.toLowerCase(); // lo paso a minuscula --> asegura búsqueda insensible a mayúsculas y minúsculas
        return todoText.includes(searchText); // para determinar si el texto del todo incluye el valor de búsqueda --> lo devuelve en un nuevo array
    });

    console.log("searched todos ", searchedTodos);
    const addTodo = (text) => {
        if (text === '') {
        return; 
        }
    
        const newTodo = { text: text, completed: false };
        const newTodos = [...todos, newTodo];
        saveTodosLS(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodosLS(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodosLS(newTodos);
    };

// eliminamos provider y hacemos un objeto con las props
    return(
        {
            loading,
            error,
            completedTodos,
            totalTodos,
            searchedTodos,
            searchValue,
            setSearchValue,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }
        )
    }





export {useTodos};