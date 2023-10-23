import React, { useContext } from 'react';
import './ToDoSearchStyle.css';
import { TodoContext } from '../TodoContext';

function ToDoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    return (
        <div className='container-input'>
        <input
            placeholder='Buscar tarea'
            className='TodoSearch'
            value={searchValue}
            onChange={(event) => {
            setSearchValue(event.target.value);
            }}
        />
        </div>
    );
}

export { ToDoSearch };
