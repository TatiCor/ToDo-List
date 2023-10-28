import React from "react";
import { useLocalStorage } from "./useLocalStorage.js"

const TodoContext = React.createContext(); // creamos un contexto

function TodoProvider({children}) {
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
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

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


    
    return(
    <TodoContext.Provider   
        value={{
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
    }}> {/* Todo lo que quiero comunicar entre componentes se pone dentro de value */}
        {children} 
        {/* Aquí se encapsula la lógica de la programación que queremos compartir entre los distintos componentes */}
    </TodoContext.Provider>
    )}






export { TodoContext, TodoProvider}