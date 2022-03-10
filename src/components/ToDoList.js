import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onDeleteToDo, onUpdateToDo }) {
 
  
  return (
    <div>
      <h2>My Todos</h2>
      <ol>
        {todos && todos.map((todo) => (
            <ToDo key={todo.id}
                todo={todo}
                onDeleteToDo={onDeleteToDo}
                onUpdateToDo={onUpdateToDo} />
        ))}
      </ol>
    </div>
  );
}

export default ToDoList 