import './ToDoSearchStyle.css'
function ToDoSearch(){
    return (
        <div className='container-input'>
            <input placeholder="Buscar tarea" className='TodoSearch' onChange={
                (event) => {
                    console.log('Escribiste en TodoSearch');
                    console.log(event.target);
                    console.log(event.target.value);
                }
            }/>
        </div>
    )
}

export { ToDoSearch };