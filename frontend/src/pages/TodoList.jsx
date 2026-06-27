import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (title.trim() === "") return;

    await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  const toggleTodo = async (todo) => {
    await fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });

    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });

    fetchTodos();
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={addTodo}>Add Todo</button>

      <hr />

      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.completed ? "✅ Completed" : "❌ Pending"}</p>

          <button onClick={() => toggleTodo(todo)}>Toggle Status</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>

          <Link to={`/todo?id=${todo.id}`}>
            <button>View Details</button>
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default TodoList;