import React from "react";
import { useStorageListener } from "./useStorageListener";
import { MdUpdate } from "react-icons/md";
import './styles.css'

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize); //Llamo a mi custom hook 

    const containerClass = show ? "container-alert show" : "container-alert"
    if (show) {

        return (
            <div className="changeAlert-bg">
                <div className={containerClass}>
                    <div >
                        <p className="alert">Se realizaron cambios en otra ventana del navegador. </p>
                        <button 
                            onClick={toggleShow}
                            className="btn-close-alert"
                        >
                            <span className="text-btn">Actualizar</span>
                            <MdUpdate className="icon-update"/>
                        </button>
                    </div>
                </div>
            </div>
        )      
    } else {
        return null
    }
}



export { ChangeAlert }

