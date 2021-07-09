import React from 'react'

export default function TodoItem({todo, toggleTodo}) {
  function handleToDoClick(){
    toggleTodo(todo.id)
  }

  return (
    
      <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">{todo.name}
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleToDoClick}/>
      </label> 
      </li>

  )
}