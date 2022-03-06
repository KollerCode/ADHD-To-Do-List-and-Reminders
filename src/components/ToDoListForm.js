import React, { useState, useEffect } from "react"
import NewToDo from "./NewToDo"
import ToDoList from "./ToDoList";


// Todo Deliverables:
// - Add element to array: use spread operator!
//  - Remove element to array: use filter!
// - Update element in array: use map!

function ToDoListForm() {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then((response) => response.json())
      .then((data) => setToDos(data.todos));
  }, []);
  
  function addToDo(newToDo) {
    const updatedToDos = [...todos, newToDo];
    setToDos(updatedToDos);
  };

  return (
    <div className="task-lister">
      <NewToDo onAddTodo={addToDo} />
      <ToDoList todos={todos} />
    </div>
  )
}


export default ToDoListForm;