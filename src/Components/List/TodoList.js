const TodoList = ({ todos, title, handleDelete}) => {


  return (
    <div className="todo-list">
      <h2>{ title }</h2>
      {todos.map(todo => (
        <ul class="no-bullets">
          <li className="todo-item" key={todo.id} >
            <input type="checkbox" id="list-item" name="list-item" value="list-item" /> { todo.title } <br/>
            <button onClick={() => handleDelete(todo.id)}>Delete todo</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
 
export default TodoList;