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
    const [openModal, setOpenModal] = React.useState(false)

    // Main functions
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase(); // obtengo el texto de cada TODO
        const searchText = searchValue.toLowerCase(); // lo paso a minuscula --> asegura búsqueda insensible a mayúsculas y minúsculas
        return todoText.includes(searchText); // para determinar si el texto del todo incluye el valor de búsqueda --> lo devuelve en un nuevo array
    });
    
    // add to-do
    const addTodo = (text) => {
        const id = newTodoId()
        const newTodo = { id, text, completed: false };
        const newTodos = [...todos, newTodo];
        saveTodosLS(newTodos);
    };
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
    const editTodo = (id) => {
        console.log("clic editar");
        
    }

    const states = {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchedTodos,
        searchValue,
        openModal,
    };

    const stateUpdaters = {
        setSearchValue,
        addTodo,
        completeTodo,
        deleteTodo,
        editTodo,            
        setOpenModal,
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