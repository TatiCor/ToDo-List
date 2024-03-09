import React from "react";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../TodoItem/ToDoItem";
import { ToDoBtn } from "../ToDoBtn";
import { Modal } from "../Modal";
import { TodoForm} from "../TodoForm";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch} from "../ToDoSearch"



function App() {  
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue
  } = useTodos();

  /* if (loading) {
    return ;
  }

  if (error) {
    return ;
  }

  if (searchedTodos.length === 0) {
    return (
      <>
      <EmptyTodos />
        <ToDoBtn
          setOpenModal={setOpenModal}
          />
          {openModal && (
            <Modal>
              <TodoForm
                setOpenModal={setOpenModal}
                addTodo={addTodo}
              />
            </Modal>
          )}
        
    </>
    )}
 */
  return (
    <>
      <TodoHeader>
        <ToDoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        
        />
      </TodoHeader>
      
      <ToDoList
        loading={loading}
        error={error}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={()=> <EmptyTodos searchedTodos={searchedTodos}/>}
        render={(todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo(todo.text);
            }}
            onDelete={() => {
              deleteTodo(todo.text);
              }
            }
        />
      )}
      >
      </ToDoList>
      
      <ToDoBtn
        setOpenModal={setOpenModal}
        />
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      
    </>
  );
}


export default App;
