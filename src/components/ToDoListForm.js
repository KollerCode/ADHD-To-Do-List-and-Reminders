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
   fetch("http://localhost:4000/todos")
     .then((r) => r.json())
     .then((data) => setToDos(data));
 }, []);
  
  function addToDo(newToDo) {
    const updatedToDos = [...todos, newToDo];
    setToDos(updatedToDos);
  };

  function deleteToDo(id) {
     const updatedTodos = todos.filter((todo) => todo.id !== id);
     setToDos(updatedTodos);
   }

  function updateToDo(id, completed) {
     const updatedToDos = todos.map((todo) => {
       if (todo.id === id) {
         return { ...todo, completed };
       } else {
         return todo;
       }
    });
     setToDos(updatedToDos);
  }

  return (
    <div className="task-lister">
      <NewToDo onAddToDo={addToDo} />
      <ToDoList todos={todos} onDeleteToDo={deleteToDo} onUpdateToDo={updateToDo}/>
    </div>
  )
}


export default ToDoListForm;