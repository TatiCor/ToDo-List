import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../TodoItem/ToDoItem";
import { ToDoBtn } from "../ToDoBtn";
import { Modal } from "../Modal";
import { TodoForm} from "../TodoForm";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  if (loading) {
    return <TodosLoading />;
  }

  if (error) {
    return <TodosError />;
  }

  if (!searchedTodos || searchedTodos.length === 0) {
    return (
      <>
      <EmptyTodos />
      <ToDoBtn />
      </>
      );
  }

  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
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
