import React, { useState } from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onDeleteToDo, onUpdateToDo }) {
// COMPONENT NOT IN USE ATM
  const visibleToDo = todos.filter(
    (todo) => !todo.future
  );

  function visibleFutureToDo() {
    todos.filter((todo) => todo.future);
    
  }

  // iterate over visible todos and map them then make the same function in future tasks
  return (
    <div>
      <h1 className="title-to-do">My To-Do's</h1>
      <ol>
        {visibleToDo.map((todo) => (
            <u><ToDo
              key={todo.id}
              todo={todo}
              urgency={todo.future}
              onDeleteToDo={onDeleteToDo}
              onUpdateToDo={onUpdateToDo} /></u>  
        ))}
      </ol>
    </div>
  );
}

export default ToDoList 