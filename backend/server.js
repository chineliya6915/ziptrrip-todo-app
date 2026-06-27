const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const filePath = "./todos.json";

function readTodos() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

app.get("/todos", (req, res) => {
  res.json(readTodos());
});

app.post("/todos", (req, res) => {
  const todos = readTodos();

  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    completed: false,
    createdAt: new Date().toLocaleString()
  };

  todos.push(newTodo);
  writeTodos(todos);

  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todos = readTodos();
  const id = Number(req.params.id);

  const index = todos.findIndex(todo => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos[index] = { ...todos[index], ...req.body };
  writeTodos(todos);

  res.json(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
  let todos = readTodos();
  const id = Number(req.params.id);

  todos = todos.filter(todo => todo.id !== id);
  writeTodos(todos);

  res.json({ message: "Todo deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});