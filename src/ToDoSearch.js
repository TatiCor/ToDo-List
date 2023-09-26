import React from 'react';
import './ToDoSearchStyle.css'
function ToDoSearch({
    searchValue,
    setSearchValue
}){
    
    return (
        <div className='container-input'>
            <input placeholder="Buscar tarea" className='TodoSearch'
        
            value={searchValue} /* Declaro el valor inicial del estado. Nos guarda el valor del input*/

            onChange={
                (event) => {
                    setSearchValue(event.target.value);
                    
                }
            }/>
        </div>
    )
}

export { ToDoSearch };

