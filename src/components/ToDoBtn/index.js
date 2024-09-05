import React  from 'react';
import './ToDoBtnStyle.css'

function ToDoBtn( {setOpenModal}) {

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
