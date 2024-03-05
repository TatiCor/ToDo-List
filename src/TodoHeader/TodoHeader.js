import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";


function TodoHeader({totalTodos, completedTodos, searchValue, setSearchValue}) {
    return(
        <header>
            <ToDoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <ToDoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </header>
    )
}


export {TodoHeader};