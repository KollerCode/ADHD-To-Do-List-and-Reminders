import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onDeleteToDo, onUpdateToDo }) {
  const filterToDo = (todo) => {
    if (todos && todos.filter(todo.future === true)) {
        return { ...todo, future: true };
      } else {
        return todos && todos.map(todo);
      }
 }
  
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