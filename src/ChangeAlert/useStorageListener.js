import React, { useState } from "react";

function useStorageListener( sincronize ) {        
    const [storageChange, setStorageChange] = useState(false); // para que nos avise cuando hubo cambios en storage
    
    window.addEventListener('storage', (change) => {
        if (change.key === "Todos_V1") {
            console.log('hubo cambios en storage');
            setStorageChange(true)
            }
    })

    const toggleShow = () =>{
        sincronize();
        setStorageChange(false);
    }
    
    return {
        show: storageChange,
        toggleShow,
    }
}



export { useStorageListener };