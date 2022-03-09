import React from "react";

function ToDo({ todo, onUpdateToDo, onDeleteToDo }) {
  const { id, description, completed } = todo;

  console.log(onUpdateToDo)
    
    function handleCompleted(completed) {
        // persist changes on server
        fetch(`http://localhost:4000/todos/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
                  completed: completed,
                //   urgent: false,
                //   wait: false,
          }),
        })
          .then((r) => r.json())
            .then((data) =>  onUpdateToDo(data.todo.id, data.todo.completed)
            //   console.log(
            // onUpdateToDo(
            // data.todo.id,
            // data.todo.completed,
            // data.todo.urgent,
            // data.todo.wait
            // ))
          );
    }
    function handleDelete() {
      // persist changes on server
      fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });
    //   then use onDeleteTodo to remove todo from state
      onDeleteToDo(id);
    }
    
    return (
      <li>
        <strong>{description}</strong>
        <label>
          Completed?
          <input
            type="checkbox"
            onChange={(e) => handleCompleted(e.target.checked)}
            // checked={completed}
          />
            </label>
        <label>
          Urgent
          <input
            type="checkbox"
            onChange={(e) => handleCompleted(e.target.urgent)}
            // checked={completed}
          />
        </label>
        <label>
          Can Wait
          <input
            type="checkbox"
            onChange={(e) => handleCompleted(e.target.wait)}
            // checked={completed}
          />
            </label> 
        {/* <button onClick={"click"}>Delete</button> */}
      </li>
    );
}

    export default ToDo;