import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Setup Vite + React", completed: true },
    { id: 2, text: "Create CI/CD Pipeline", completed: true },
    { id: 3, text: "Deploy to Production", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue.trim(),
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="app">
      <header className="header">
        <h1>⚡ Vite Todo App</h1>
        <p>Lightning fast CI/CD with Vite</p>
        <div className="stats">
          <span className="badge">
            {completedCount}/{todos.length} completed
          </span>
          <span className="badge success">⚡ Vite Powered</span>
        </div>
      </header>

      <main className="main">
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button type="submit" className="add-btn">
            Add Todo
          </button>
        </form>

        <div className="todo-list">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className="toggle-btn"
                aria-label={`Mark ${todo.text} as ${
                  todo.completed ? "incomplete" : "complete"
                }`}
              >
                {todo.completed ? "✅" : "⭕"}
              </button>

              <span className="todo-text">{todo.text}</span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
                aria-label={`Delete ${todo.text}`}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <div className="empty-state">
            <p>🎉 All done! Add a new todo above.</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Built with Vite ⚡ + React • Deployed via GitHub Actions</p>
        <p>Version: {import.meta.env.VITE_APP_VERSION || "1.0.0"}</p>
        <p>
          Commit: {import.meta.env.VITE_COMMIT_SHA?.substring(0, 7) || "dev"}
        </p>
      </footer>
    </div>
  );
}

export default App;
