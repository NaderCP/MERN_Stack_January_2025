import React from 'react'

const DisplayTodo = ({todos, dispatch}) => {
  return (
    <div className='container'>
        <ul className="space-y-2 unstyled">
            {todos.map((todo, index)=>(
                //<div className="flex justify-between items-center p-2 bg-white shadow rounded">
                    <li key={index} className="flex items-center gap-2 list-unstyled ">
                        <div className='d-inline-flex p-2 justify-content-between gap-4 align-items-center'>
                            <h3>{todo.text}</h3>
                            <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}/>
                            <button className='btn btn-danger btn-sm'onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>delete</button>
                        </div>
                    </li>

                //</div>
            ))}
            
        </ul>

    </div>
  )
}

export default DisplayTodo