import React, { useState, useEffect } from "react"
import NewToDo from "./NewToDo"
import ToDo from "./ToDo";


// Todo Deliverables:
// - Add element to array: use spread operator!
//  - Remove element to array: use filter!
// - Update element in array: use map!

function ToDoListForm({ todos, onUpdateToDo, onDeleteToDo }) {
 
  const visibleToDo = todos.filter((todo) => !todo.future);

return(
  <div className="task-lister">
      <h1>My To-Do's</h1>
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


export default ToDoListForm;
