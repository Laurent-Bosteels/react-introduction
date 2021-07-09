/* REACT IMPORT */
import React, {useState, useRef, useEffect} from 'react';

/* COMPONENT IMPORT */
import TodoList from './TodoList'
import Nav from './Nav';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Main() {

    // useState = setting up the state for the application
    // Storing the todos inside of a state, so it will rerender the todos for us
    // So, everytime we change it do it will rerender our component tree

    // It returns an array and we can destructure this array
    // First element is the todos element, second element is a function that allows us to update them
    // = Object destructuring 

  const [todos, setTodos] = useState([])

    // useRef allows us to reference elements inside of our html  (needed for the input)
  const inputTodo = useRef()

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

  // useRef allows us to reference elements inside of our html
  function handleAddTodo(e){
    const name = inputTodo.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uniqueId(), name: name, complete:false}]
    })

    inputTodo.current.value = null
    // the input refreshes empty on submit
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    }

  return (
    <>
    <div className="App">

    <Nav inputTodo={inputTodo} handleAddTodo={handleAddTodo} handleClearTodos={handleClearTodos} />

      <div className="wrapper">
        <div className="container-fluid">
            <div className="row">

            <div className="col-md-6">
                <ul className="list-group">
                <li className="list-group-item list-group-header d-flex justify-content-between align-items-center">  Not completed <span className="badge badge-pill badge-primary">{todos.filter(todo => !todo.complete).length}</span></li>
                  
                  {/* Passing the todos to our todo list = props 
                  All of the components have props, which we can pass to them just like we can pass attributes to html
                  
                  Line code explained: We have a prop todos on our TodoList and want to pass the todos variable to that prop*/}

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
    </>

  );
}

export default Main;