import React from "react";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../TodoItem/ToDoItem";
import { ToDoBtn } from "../ToDoBtn";
import { Modal } from "../Modal";
import { TodoForm} from "../TodoForm";
import { TodoContext } from "../TodoContext";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch} from "../ToDoSearch"


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue
  } = React.useContext(TodoContext);

  if (loading) {
    return <TodosLoading />;
  }

  if (error) {
    return <TodosError />;
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
              <TodoForm />
            </Modal>
          )}
        
    </>
    )}

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
        setOpenModal={setOpenModal}
        />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
    </>
  );
}

export { AppUI };
