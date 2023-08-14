import "./App.css";
// import {Login , onSearch} from "./components/Login";
import { useState } from "react";
// console.log("value====>" , onSearch)

function App() {
  const [todo, satTodo] = useState([]);
  const [value, satvalue] = useState("");
  return (
    
    <div>
      <h1 className="todo-heading">TODO LIST</h1>
      
        <input value={value} onChange={(e)=> satvalue(e.target.value)} type="text" />
      <button onClick={() => {
        satTodo([...todo, value])
        satvalue('')
      }
         }>Add Todo</button>

          <ul>
            {todo.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>
    
  );
}

export default App;
