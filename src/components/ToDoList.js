import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onDeleteToDo, onUpdateToDo }) {
 
  
  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {todos && todos.map((todo) => (
            <ToDo key={todo.id}
                todo={todo}
                onDeleteToDo={onDeleteToDo}
                onUpdateToDo={onUpdateToDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList 