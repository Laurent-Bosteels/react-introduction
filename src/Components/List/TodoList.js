import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {
  return (

    // Inside an array (todos) we can loop over them using todos.map

      todos.map(todo => {

        // For each one of our todos we want to return a todo element
        // key = unique key needed for react to know how to update them properly
        return <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
          <Todo toggleTodo={toggleTodo} todo={todo}/>
          </li>
      })
  )
}