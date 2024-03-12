import React from 'react';
import './ToDoListStyle.css';


function ToDoList(props) {
    return (
        <section>
            {props.error && props.onError && props.onError()}
            {props.loading && props.onLoading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmpty()}
            {(!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearchResult() }
            <ul>
                {props.searchedTodos.map(props.render || props.children)}   {/* Si props.render no está definido, utiliza props.children para el renderizado. Esto permite una mayor flexibilidad al utilizar el componente ToDoList,  */}
            </ul>
        </section>
    );
}

export { ToDoList };
