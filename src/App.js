import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from "./ToDoSearch";
import './App.css';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoBtn } from './ToDoBtn';

function App() {
  return (
    <div className="App">
        {/* insertamos un componente dentro de otro componente (App)*/}

      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

      <ToDoBtn /> 
      
      

      
    </div>
  );
}


export default App; // permite renderizar en mi html
