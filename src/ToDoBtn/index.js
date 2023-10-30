import React, { useContext } from 'react';
import './ToDoBtnStyle.css'
import { TodoContext } from '../TodoContext'; 
function ToDoBtn() {
    const {setOpenModal} = useContext(TodoContext);

    const onClick= (event) => {
        event.preventDefault();
        setOpenModal(state => !state) 
    }
    
    return (
        <div className='form-container'>
            <form
                
            >
                <button 
                    type="button"
                    className='add-todo'
                    onClick={onClick}>+</button>
            </form>
        </div>
    );
}

export {ToDoBtn};
