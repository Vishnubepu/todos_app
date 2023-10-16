import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  const addtodo = () => {
    setTodos([...toDos,{list:toDo, id:Date.now(),status:false}]);
    setTodo("");
  };
  const ondelete=(id)=>{
    setTodos(toDos.filter((to)=>to.id !==id))

  };
  const oncomplete = (id) => {
    let complete = toDos.map((list) => {
      if (list.id === id) {
        return ({ ...list, status : !list.status });
      }
      return list
    });
    setTodos(complete)
  };
 

  return (
    <div>
      <div class="container">
        <div class="input-group">
          <input
            value={toDo}
            type="text"
            placeholder="🖊️ Add item..."
            onChange={(e) => setTodo(e.target.value)}
          ></input>
        </div>
        <button onClick={addtodo}>ADD</button>
      </div>
      <div class="text-card">
        {toDos.map((to) => {
          return (
            <div class="card">
              <h1 id={to.status ? 'item-list' : ''}>{to.list}</h1>
              <div class="icons">
                <i class="fa-solid fa-trash-can" onClick={()=>ondelete(to.id)}></i>
                <i class="fa-solid fa-check" onClick={()=>oncomplete(to.id)}></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
