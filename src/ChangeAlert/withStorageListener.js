import React, { useState } from "react";

// Creamos HOC para envolver componente
function withStorageListener(WrappedComponent) {

    return function WrappedComponentWithStorageListener (props) {
        
        const [storageChange, setStorageChange] = useState(false); // para que nos avise cuando hubo cambios en storage
        
        window.addEventListener('storage', (change) => {
            if (change.key === "Todos_V1") {
                console.log('hubo cambios en storage');
                setStorageChange(true)
            }
        })

        const toggleShow = () =>{
            props.sincronize();
            setStorageChange(false);
        }
        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}



export { withStorageListener };