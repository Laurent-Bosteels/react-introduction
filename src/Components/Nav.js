import React from 'react'

function Nav({inputTodo, handleAddTodo, handleClearTodos}) {
    return (

        <nav className="navbar ">
        <div className="container-fluid">
          <span className="navbar-brand">Todos</span>
          <form className="d-flex form-custom">
            <input className="form-control me-2 rounded-pill" type="text" ref={inputTodo} placeholder="Add a new todo" required/>
            <button className="btn btn-add rounded-pill" type="submit" onClick={handleAddTodo}>Add</button>
            <button className="btn btn-clear rounded-pill" type="submit" onClick={handleClearTodos}>Clear</button>
          </form>
        </div>
      </nav>

    )
}

export default Nav
