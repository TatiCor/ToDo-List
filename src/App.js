import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from "./ToDoSearch";
import './App.css';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoBtn } from './ToDoBtn';
import React from 'react';

const defaultToDo = [
  {text: "chop onions", completed: false},
  {text: "do react course", completed: false},
  {text: "practice english", completed: false},
  {text: "work in my pizzaProject", completed: false},
  {text: "Do my homework", completed: false}
];
function App() {
  return (
    <React.Fragment>
        {/* insertamos componentes dentro de otro componente (App)*/}

      <ToDoCounter completed={5} total={10}/>
      <ToDoSearch />

      <ToDoList>
        {defaultToDo.map(todo => (
          <ToDoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        
      </ToDoList>

      <ToDoBtn />  
      
    </React.Fragment>
  );
}


export default App; // permite renderizar en mi html
