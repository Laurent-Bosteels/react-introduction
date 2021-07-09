import React from 'react'

export default function Todo({todo, toggleTodo}) {
  function handleToDoClick(){
    toggleTodo(todo.id)
  }

  return (
      <div className="list-text">
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleToDoClick}/>
      </label> <span>{todo.name}</span>
      </div>
  )
}