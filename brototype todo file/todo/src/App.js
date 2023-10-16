import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  const addtodo = () => {
    setToDos([...toDos, { list: toDo, id: Date.now(), status : false}]);
    setToDo("");
  };
  const onDelete = (id) => {
    setToDos(toDos.filter((to) => to.id !== id));
  };
  const oncomplete = (id) => {
    let complete = toDos.map((list) => {
      if (list.id === id) {
        return ({ ...list, status : !list.status });
      }
      return list
    });
    setToDos(complete)
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addtodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((to) => {
          return (
            <div className="todo">
              <div className="left">
                <p id={to.status ? 'item-list' : ''}>{to.list}</p>
              </div>
              <div className="right">
                <i
                  class="fa-solid fa-check"
                  title="complete"
                  onClick={() =>oncomplete(to.id)}
                ></i>
                
                <i
                  className="fas fa-times"
                  onClick={() => onDelete(to.id)}
                  title="delete"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
