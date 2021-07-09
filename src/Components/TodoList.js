import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodo, listTitle, listCount}) {
  return (

      <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item list-group-header d-flex justify-content-between align-items-center">
          {listTitle} 
          <span className="badge badge-pill badge-primary">
          {listCount}
          </span>
          </li>

      {todos.map(todo => {
        
        return <TodoItem toggleTodo={toggleTodo} todo={todo}/>
        
      })}
      </ul>
    </div>
  )
}