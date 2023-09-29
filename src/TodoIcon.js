import { ReactComponent as CheckSVG } from './CheckIcon.svg';
import { ReactComponent as DeleteSVG} from './DeleteIcon.svg';


const iconTypes = {
    "check": <CheckSVG/>,
    "delete": <DeleteSVG/>,
}

function TodoIcon({type, onClick}){
    return(
        <span
            className={`icon icon-svg icon-${type} `}
            onClick={onClick}> 
            {iconTypes[type]}
            
        </span>
    );
}

export { TodoIcon };