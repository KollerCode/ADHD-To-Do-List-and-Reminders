import React, { useState } from "react";
import NewDump from "./NewDump";

function BrainDump({  }) {
  const [description, setDescription] = useState("");
  // function handleSubmit(e) {
  //         e.preventDefault();
  //         };

  fetch("http://localhost:4000/dumps", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
    body: JSON.stringify({ description: description }),
           })
             .then((r) => r.json())
            //  .then((data) => onAddDumps(data));
          // then use onAddTodo to add todo to state
  return (
    <div className="task-lister">
      {/* <NewDump onAddDump={onAddDump} />
      <ToDoList
        todos={todos}
        onDeleteToDo={deleteToDo}
      /> */}
    </div>
  );
}

export default BrainDump