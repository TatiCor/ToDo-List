import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../TodoItem/ToDoItem";
import { ToDoBtn } from "../ToDoBtn";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    addTodo,
    newTodoText,
    setNewTodoText,
  } = React.useContext(TodoContext);

  if (loading) {
    return <TodosLoading />;
  }

  if (error) {
    return <TodosError />;
  }

  if (!searchedTodos || searchedTodos.length === 0) {
    return <EmptyTodos />;
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
      <ToDoBtn addTodo={addTodo} newTodoText={newTodoText} setNewTodoText={setNewTodoText} />
    </>
  );
}

export { AppUI };
