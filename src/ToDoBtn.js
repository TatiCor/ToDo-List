import React from 'react';
import './ToDoBtnStyle.css'
function ToDoBtn() {
    return(
        <button onClick={
            (event)=>{
                console.log("Hiciste click");
                console.log(event);
                console.log(event.target);
            }
        }>+</button>
    )
}


export { ToDoBtn };