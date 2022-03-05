import React, { useState, useEffect } from "react"
import NewToDO from "./NewToDo"
import ToDoList from "./ToDoList";


// Todo Deliverables:
// - Add element to array: use spread operator!
//  - Remove element to array: use filter!
// - Update element in array: use map!

function ToDoListForm() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then((response) => response.json())
      .then((data) => setToDos(data.todos));
  }, []);
  
  function addTodo(newTodo) {
    const updatedTodos = [...toDos, newTodo];
    setToDos(updatedTodos);
  };

  return (
    <div className="App">
      {/* <NewTodo onAddTodo={addTodo} /> */}
      {/* <TodoList todos={todos} onDeleteTodo={""} /> */}
    </div>
  )
}


export default ToDoListForm;