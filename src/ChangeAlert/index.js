import React from "react";
import { withStorageListener } from "./withStorageListener";
import { MdUpdate } from "react-icons/md";
import './styles.css'

function ChangeAlert({show, toggleShow}) {
    const containerClass = show ? "container-alert show" : "container-alert"
    if (show) {
        return (
            <div className="changeAlert-bg">
                <div className={containerClass}>
                    <div >
                        <p className="alert">Se realizaron cambios en otra ventana del navegador. </p>
                        <button 
                            onClick={()=> toggleShow(false)}
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

// HOC - envolvemos en otro componente withStorageListener y lo exportamos para llamarlo en app
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)


export { ChangeAlertWithStorageListener }

