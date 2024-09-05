// HomePage.js
import React from "react";
import { useTodos} from "../../App/useTodos";
import { TodosLoading } from "../../ui/TodosLoading";
import { TodosError } from "../../ui/TodosError";
import { EmptyTodos } from "../../components/EmptyTodos";
import { ToDoList } from "../../components/ToDoList";
import { ToDoItem } from "../../components/TodoItem/ToDoItem";
import { ToDoBtn } from "../../components/ToDoBtn";
import { Modal } from "../../components/Modal";
import { TodoForm} from "../../components/TodoForm";
import { TodoHeader } from "../../components/TodoHeader/TodoHeader";
import { ToDoCounter } from "../../components/ToDoCounter";
import { ToDoSearch} from "../../components/ToDoSearch"
import { EmptySearchResult } from "../../components/EmptySearchResult";
import { ChangeAlert } from "../../components/ChangeAlert";

const HomePage = () => {
    const {
        states,
        stateUpdaters,
    } = useTodos();
    
    const {
        loading,
        error,
        completedTodos,
        totalTodos,
        searchedTodos,
        searchValue,
        openModal,
    } = states;
    
    const {
        setSearchValue,
        addTodo,
        completeTodo,
        deleteTodo,
        editTodo,            
        setOpenModal,
        sincronizeTodos
    } = stateUpdaters;
    
    return (
        <>
            <TodoHeader loading={loading} >
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
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmpty={()=> <EmptyTodos searchedTodos={searchedTodos}/>}
                onEmptySearchResult={() => <EmptySearchResult searchText={searchValue} />}
                render={(todo) => (
                    
                    <ToDoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                        onEdit={()=> editTodo(todo.id)}
                    />
                )}
            />

            <ToDoBtn setOpenModal={setOpenModal} />
            
            {openModal && (
                <Modal>
                <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}
        
            <ChangeAlert sincronize={sincronizeTodos} />
        </>
    );
}

export { HomePage };
