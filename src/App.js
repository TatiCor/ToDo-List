import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoBtn } from './ToDoBtn';

/* const defaultToDo = [
  { text: 'chop onions', completed: true },
  { text: 'do react course', completed: false },
  { text: 'practice English', completed: false },
  { text: 'work on my pizza project', completed: false },
  { text: 'Do my homework', completed: true },
  { text: 'Cambiar de trabajo', completed: false },
]; 
localStorage.setItem('Todos_V1', JSON.stringify(defaultToDo));
localStorage.removeItem('Todos_V1', defaultToDo);*/

function App() {
  // LocalStorage

  const localStorageTodos = localStorage.getItem('Todos_V1');
  let parsedTodos
  if (!localStorageTodos) {
    localStorage.setItem('Todos_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos);  // primero nuestra app va a revisar si hay algo en localstorage.
  }
  

  // Declarar estados
  const [todos, setTodos] = React.useState(parsedTodos); // Estado para establecer to dos 
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

  //fx para actualizar localStorage y estado
  const saveTodosLS = (newTodos) => {
    localStorage.setItem('Todos_V1', 
    JSON.stringify(newTodos)); // actualiza el Storage
    
    setTodos(newTodos) //actualiza el estado
  }

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
