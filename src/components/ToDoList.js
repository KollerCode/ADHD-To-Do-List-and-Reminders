import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos }) {
  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {/* {todos.map((todo) => ( */}
          <ToDo
            // key={todo.id}
            // todo={todo}
          />
        )}
      </ul>
    </div>
  );
}

export default ToDoList 