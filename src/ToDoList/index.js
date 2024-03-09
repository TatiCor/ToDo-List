import React from 'react';
import './ToDoListStyle.css';
import { EmptyTodos } from '../EmptyTodos';

function ToDoList(props) {
    return (
        <section>
            {props.error && props.onError && props.onError()}
            {props.loading && props.onLoading && props.onLoading()}
            {(!props.loading && !props.searchedTodos?.length) && props.onEmpty()}
            <ul>
                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    );
}

export { ToDoList };
