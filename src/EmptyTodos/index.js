import React from "react";
import { ToDoBtn } from "../ToDoBtn";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import './EmptyTodos.css';

function EmptyTodos({ addTodo, openModal, setOpenModal, searchedTodos }) {
    console.log("searchedTodos:", searchedTodos);
    return (
        <div>
            {(searchedTodos?.length === 0) && <p className="empty-todo">Add your first To-Do!</p>}

            <ToDoBtn setOpenModal={setOpenModal} />
            {openModal && (
                <Modal>
                    <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
                </Modal>
            )}
        </div>
    );
}

export { EmptyTodos };
