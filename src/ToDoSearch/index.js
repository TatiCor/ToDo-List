import React, { useContext } from 'react';
import './ToDoSearchStyle.css';
import { TodoContext } from '../TodoContext';
import { SlMagnifier } from "react-icons/sl";


function ToDoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    return (
        <div className='container-input'>
            <input
                placeholder='Search task'
                className='TodoSearch'
                value={searchValue}
                onChange={(event) => {
                setSearchValue(event.target.value);
                }}
                
            />
            <SlMagnifier className='search-icon'/>
        </div>
    );
}

export { ToDoSearch };
