import "./App.css";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [todo,satTodo] = useState(["ahmed"]);
  console.log(todo,satTodo)
  return (
    <div className="container">
      <h1 className="todo-heading">TODO LIST</h1>
      <div className="todo-card">
        <Login />
        <div>
          <ul>
            <li>ahmed</li>
            <li>samad</li>
            <li>rehman</li>
            <li>karim</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
