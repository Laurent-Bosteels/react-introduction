import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {
  return (
      todos.map(todo => {
        return <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center"><Todo toggleTodo={toggleTodo} todo={todo}/></li>
      })
  )
}