# Ziptrrip Todo Application

## Overview
This project is a multi-page Todo application built using React for the frontend and Node.js with Express for the backend.

## Features

### Frontend
- Multi-page React application
- Todo List page
- Add new todo
- Delete todo
- Toggle todo status (Pending/Completed)
- View individual todo details
- Uses React Router for navigation

### Backend
- Node.js + Express REST API
- CRUD operations for todos
- Stores data in todos.json
- Endpoints:
  - GET /todos
  - GET /todos?id=<id>
  - POST /todos
  - PUT /todos/:id
  - DELETE /todos/:id

## Technologies Used

- React
- React Router DOM
- Node.js
- Express.js
- JavaScript
- Vite

## Project Structure

```
frontend/
backend/
```

## How to Run

### Backend

```bash
cd backend
npm install
node server.js
```

Runs on:

```
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

## Functionalities

- Add Todo
- View Todo List
- View Todo Details
- Update Todo Status
- Delete Todo
- File-based data storage
