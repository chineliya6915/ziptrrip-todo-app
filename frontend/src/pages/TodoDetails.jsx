import { Link, useSearchParams } from "react-router-dom";

function TodoDetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="container">
      <h1>Todo Details</h1>

      <div className="todo-card">
        <h2>Todo ID: {id}</h2>
        <p>This page displays details of a single todo item.</p>
        <p>The todo id is received using query parameter.</p>
      </div>

      <Link to="/todos">
        <button>Back to Todo List</button>
      </Link>
    </div>
  );
}

export default TodoDetails;