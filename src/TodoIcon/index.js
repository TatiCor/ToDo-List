import { ReactComponent as CheckSVG } from './CheckIcon.svg';
import { ReactComponent as DeleteSVG} from './DeleteIcon.svg';
import './TodoIcon.css'

const iconTypes = {
    "check": (color)=> <CheckSVG className="icon-svg" fill={color}/>,
    "delete": (color)=> <DeleteSVG className="icon-svg" fill={color}/>,
}

function TodoIcon({type, onClick, color}){
    return(
        <span
            className={`icon-container icon-container-${type} `}
            onClick={onClick}                   > 
            {iconTypes[type](color)}
            
        </span>
    );
}

export { TodoIcon };

// Este archivo simula "una librería" donde se importan nuestros icons