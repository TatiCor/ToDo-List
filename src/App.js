import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from "./ToDoSearch";
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoBtn } from './ToDoBtn';


const defaultToDo = [
  {text: "chop onions", completed: true},
  {text: "do react course", completed: false},
  {text: "practice english", completed: false},
  {text: "work in my pizzaProject", completed: false},
  {text: "Do my homework", completed: true},
  {text: "Cambiar de trabajo", completed: false},
  
];
function App() {
  /* El estado se declara en el componente principal App */

  const [todos, setTodos] = React.useState(defaultToDo);
  
  /* 1- Declaramos la variable todos como un array de objetos con las propiedades text y completed*/
  
  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState(''); /* Definimos su valor inicial vacío */
  

  /*  2 - Creamos una función que nos permita filtrar los elementos del arreglo por texto o completados */

  const searchedTodos = todos.filter(
    (todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase()

      return todoText.includes(searchText)
    }
  );

  const completeTodo = (text)=>{
    const newTodos = [...todos] //hacemos una copia del array todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    ); //identificamos por el texto el todo que queremos.
    
    newTodos[todoIndex].completed = true; // marcar como completado
    setTodos(newTodos); // establezco que se actualice el estado
  }

  const deleteTodo = (text)=>{
    const newTodos = [...todos] //hacemos una copia del array todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    ); //identificamos por el texto el todo que queremos.

    newTodos.splice(todoIndex, 1); // marcar como completado
    setTodos(newTodos); // establezco que se actualice el estado
  }

  return (
    <> {/*Dejar vacíos los <> equivale a poner React.Fragment */}
        {/* insertamos componentes dentro de otro componente (App)*/}

      <ToDoCounter 
        completed={completedTodos} 
        total={totalTodos}/>
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <ToDoList>
        {searchedTodos.map(todo => (
          <ToDoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=> { completeTodo(todo.text) }}
            onDelete={()=>{ deleteTodo(todo.text)}}
          />
        ))}
        
      </ToDoList>

      <ToDoBtn />  
      
    </>
  );
}


export default App; // permite renderizar en mi html
