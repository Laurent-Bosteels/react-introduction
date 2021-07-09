/* REACT IMPORT */
import React, {useState, useRef, useEffect} from 'react';

/* COMPONENT IMPORT */
import TodoList from './TodoList'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Main() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  /*   ID Randomizer function*/  
  let uniqueId = (function () {
    let id = Math.floor(Math.random() * Math.floor(Math.pow(2, 32) - 1));
    return function () {
        return id++
      };
  })();

  // Storing the todos
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // Loading the todos
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  
  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uniqueId(), name: name, complete:false}]
    })

    todoNameRef.current.value = null
    // the input refreshes empty on submit
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    }

    function Nav() {
      return (
        
      <nav className="navbar ">
        <div className="container-fluid">
          <span className="navbar-brand">Todos</span>
          <form className="d-flex form-custom">
            <input className="form-control me-2 rounded-pill" type="text" ref={todoNameRef} placeholder="Add a new todo" required/>
            <button className="btn btn-add rounded-pill" type="submit" onClick={handleAddTodo}>Add</button>
            <button className="btn btn-clear rounded-pill" type="submit" onClick={handleClearTodos}>Clear</button>
          </form>
        </div>
      </nav>

      );
    }

  return (
    <>
    <div className="App">

    <Nav />

      <div className="wrapper">
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="row">

            <div className="col-md-6">
                <ul className="list-group">
                <li className="list-group-item list-group-header d-flex justify-content-between align-items-center">  Not completed <span className="badge badge-pill badge-primary">{todos.filter(todo => !todo.complete).length}</span></li>
                  <TodoList todos={todos.filter((todo) => todo.complete === false)} toggleTodo={toggleTodo} />
                </ul>
              </div>

              <div className="col-md-6">
                <ul className="list-group">
                <li className="list-group-item list-group-header d-flex justify-content-between align-items-center">  Completed <span className="badge badge-pill badge-primary">{todos.filter(todo => todo.complete).length}</span></li>
                <TodoList todos={todos.filter((todo) => todo.complete === true)} toggleTodo={toggleTodo} />
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
    </>

  );
}

export default Main;