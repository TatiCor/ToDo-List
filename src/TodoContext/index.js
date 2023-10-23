import React from "react";
import { useLocalStorage } from "./useLocalStorage.js"

const TodoContext = React.createContext(); // creamos un contexto

function TodoProvider({children}) {
    // Declarar estados
    const {
        item: todos, 
        saveItem: saveTodosLS,
        loading,
        error
    } = useLocalStorage('Todos_V1', []); // Estado para establecer to dos 
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    const [searchValue, setSearchValue] = React.useState(''); // estado para buscar y filtrar
    const [newTodoText, setNewTodoText] = React.useState(''); // Estado para agregar la nueva tarea

    // funciones 
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

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

    const addTodo = () => {
        if (newTodoText.trim() === '') {
        return; // Evitar agregar tareas vacías
        }
    
        const newTodo = { text: newTodoText, completed: false };
        const newTodos = [...todos, newTodo];
        saveTodosLS(newTodos);
        setNewTodoText('');
    };
    
    return(
    <TodoContext.Provider   value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        newTodoText,
        setNewTodoText,
        completeTodo,
        deleteTodo
    }}> {/* Todo lo que quiero comunicar entre componentes se pone dentro de value */}
        {children} 
        {/* Aquí se encapsula la lógica de la programación que queremos compartir entre los distintos componentes */}
    </TodoContext.Provider>
    )}






export { TodoContext, TodoProvider}