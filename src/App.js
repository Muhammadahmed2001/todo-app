import "./App.css";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [todo, satTodo] = useState(["1234", "5678"]);
  console.log(todo, satTodo);
  return (
    <div className="container">
      <h1 className="todo-heading">TODO LIST</h1>
      <div className="todo-card">
        <Login />
        <div>
          <ul>
            {todo.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
