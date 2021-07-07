import { useState } from "react";
import TodoList from "./TodoList";

const ListItem = () => {
  const [todos, setTodos] = useState([
    { title: 'My First Todo', id: 1},
    { title: 'My Second Todo', id: 2},
    { title: 'My Third Todo', id: 3}
  ])

  const handleDelete = (id) => {
    const newTodos = todos.filter(blog => blog.id !== id);
    setTodos(newTodos);
  }

  return (

    <div className="home">
      <TodoList todos={todos} title="All todos" handleDelete={handleDelete}/>
    </div>

  );
}
 
export default ListItem;