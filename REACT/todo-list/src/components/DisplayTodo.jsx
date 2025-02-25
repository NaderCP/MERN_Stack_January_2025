import React from 'react'

const DisplayTodo = ({todo, taskStatus, deleteTodo}) => {
  return (
   
    <ul className="space-y-2">
      {todo.map((todo, index) => (
        <div key={index} className="flex justify-between items-center p-2 bg-white shadow rounded">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>taskStatus(index)}
            />
            <span className={todo.completed ? "text-decoration-line-through" : ""}>{todo.todo}</span>
          </div>
          <button onClick={() => deleteTodo(index)} className="btn btn-dark rounded-pill btn-sm text-white px-2 py-1 ">
            Delete
          </button>
        </div>
      ))}
    </ul>
  )
}

export default DisplayTodo