import React from "react";

function ToDo({ toDo, onUpdateTodo }) {
  const { id, description, urgent, wait, completed } = toDo;
    
    function handleCompleted(completed) {
        // persist changes on server
        fetch(`http://localhost:4000/todos/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            toDo: {
              completed: completed,
              urgent: urgent,
              wait: wait,
            },
          }),
        })
          .then((r) => r.json())
          .then((data) =>
            onUpdateTodo(
              data.todo.id,
              data.todo.completed,
              data.todo.urgent,
              data.todo.wait
            )
          );
        }
    
    return (
      <li>
        <strong>{description}</strong>
        <label>
          Completed?
          <input
            type="checkbox"
            onChange={(e) => handleCompleted(e.target.checked)}
            checked={completed}
          />
            </label>
        <label>
          Urgent
          <input
            type="checkbox"
            onChange={(e) => handleCompleted(e.target.urgent)}
            checked={completed}
          />
        </label>
        <label>
          Can Wait
          <input
            type="checkbox"
            onChange={(e) => handleCompleted(e.target.wait)}
            checked={completed}
          />
            </label>
      
        {/* <button onClick={"click"}>Delete</button> */}
      </li>
    );
}

    export default ToDo;