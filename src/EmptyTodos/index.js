import React from "react";
import './EmptyTodos.css'

function EmptyTodos() {
    return (
        <div>
            <h1>TO-DO LIST</h1>
            <p className="empty-todo">Add your first To-Do!</p>
        </div>
    )
}

export {EmptyTodos}