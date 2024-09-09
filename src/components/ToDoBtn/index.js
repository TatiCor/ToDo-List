import React  from 'react';
import './ToDoBtnStyle.css'

function ToDoBtn(props) {
    return (
        <div className='form-container'>
            <form
                
            >
                <button 
                    type="button"
                    className='add-todo'
                    onClick={props.onClick}>+</button>
            </form>
        </div>
    );
}

export {ToDoBtn};
