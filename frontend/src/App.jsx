import { Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetails from "./pages/TodoDetails";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todos" />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/todo" element={<TodoDetails />} />
    </Routes>
  );
}

export default App;