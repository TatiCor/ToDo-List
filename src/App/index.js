import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';




/* const defaultToDo = [
  { text: 'chop onions', completed: true },
  { text: 'do react course', completed: false },
  { text: 'practice English', completed: false },
  { text: 'work on my pizza project', completed: false },
  { text: 'Do my homework', completed: true },
  { text: 'Cambiar de trabajo', completed: false },
]; 
localStorage.setItem('Todos_V1', JSON.stringify(defaultToDo));
localStorage.removeItem('Todos_V1', defaultToDo); */




function App() {

// la lógica la pasé a TodoContext
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  )
}

export default App;
