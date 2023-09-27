import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoBtn } from './ToDoBtn';

const defaultToDo = [
  { text: 'chop onions', completed: true },
  { text: 'do react course', completed: false },
  { text: 'practice English', completed: false },
  { text: 'work on my pizza project', completed: false },
  { text: 'Do my homework', completed: true },
  { text: 'Cambiar de trabajo', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultToDo);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const [searchValue, setSearchValue] = React.useState('');
  const [newTodoText, setNewTodoText] = React.useState(''); // Estado para la nueva tarea

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const addTodo = (newTodoText) => {
    const newTodo = { text: newTodoText, completed: false };
    setTodos([...todos, newTodo]);
    setNewTodoText(''); // Limpiar el campo de entrada después de agregar la tarea
  };

  return (
    <>
      <ToDoCounter completed={completedTodos} total={totalTodos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
      <ToDoBtn addTodo={addTodo} newTodoText={newTodoText} setNewTodoText={setNewTodoText} />

    </>
  );
}

export default App;
