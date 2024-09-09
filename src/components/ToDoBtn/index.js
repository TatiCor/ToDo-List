import React  from 'react';
import { TiPlus } from "react-icons/ti";
import './ToDoBtnStyle.css'

function ToDoBtn(props) {
    return (
        <div className='form-container'>
            <form
                
            >
                <button 
                    type="button"
                    className='add-todo'
                    onClick={props.onClick}><TiPlus /></button>
            </form>
        </div>
    );
}

export {ToDoBtn};
