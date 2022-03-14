import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onDeleteToDo, onUpdateToDo }) {
 
  
  return (
    <div>
      <h1>My To-Do's</h1>
      <ol>
        {todos && todos.map((todo) => (
            <u><ToDo key={todo.id}
                todo={todo}
                onDeleteToDo={onDeleteToDo}
                onUpdateToDo={onUpdateToDo} /></u>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList 