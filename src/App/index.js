import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoItem } from '../TodoItem/ToDoItem';
import { ToDoList } from '../ToDoList';
import { ToDoBtn } from '../ToDoBtn';




function App() {

  // Declarar estados
  const [todos, saveTodosLS] = useLocalStorage('Todos_V1', []); // Estado para establecer to dos 
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
  

  return (
    <>
      <ToDoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <ToDoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
      />
      <ToDoList>
        {searchedTodos.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo(todo.text);
            }}
            onDelete={() => {
              deleteTodo(todo.text);
            }}
      />
        ))}
      </ToDoList>

      <ToDoBtn 
        addTodo={addTodo} 
        newTodoText={newTodoText} 
        setNewTodoText={setNewTodoText} />

    </>
  );
}

export default App;
