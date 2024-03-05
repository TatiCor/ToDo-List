import './ToDoSearchStyle.css';
import { SlMagnifier } from "react-icons/sl";


function ToDoSearch({searchValue, setSearchValue}) {

    return (
        <div className='container-input'>
            <input
                placeholder='Search task'
                className='TodoSearch'
                value={searchValue}
                onChange={(event) => {
                setSearchValue(event.target.value);
                }}
                
            />
            <SlMagnifier className='search-icon'/>
        </div>
    );
}

export { ToDoSearch };
