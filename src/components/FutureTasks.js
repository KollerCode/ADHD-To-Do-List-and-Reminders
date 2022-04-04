import React, { useState } from "react";
import ToDo from "./ToDo";

function FutureTasks({ todos, onDeleteToDo, onUpdateToDo}) {
  console.log(todos)
  
  const visibleFutureToDo = todos.filter(
    (todo) => todo.future
  );
  // iterate over visible todos and map them then make the same function in future tasks
  return (
    <div className="future-tasks">
      <h1>My To-Do's</h1>
      <ol>
        {visibleFutureToDo.map((todo) => (
          <u>
            <ToDo
              key={todo.id}
              todo={todo}
              urgency={todo.future}
              onDeleteToDo={onDeleteToDo}
              onUpdateToDo={onUpdateToDo}
            />
          </u>
        ))}
      </ol>
    </div>
  );
}

export default FutureTasks