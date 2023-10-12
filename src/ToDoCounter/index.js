import './ToDoCounterStyle.css'

function ToDoCounter({total, completed}){
    return (
        <div className='container'>
            <h1>TASKLIST</h1>
            <h2>
                Has completado {completed} de {total} ToDos
            </h2>
        </div>

    )
}

export { ToDoCounter };

