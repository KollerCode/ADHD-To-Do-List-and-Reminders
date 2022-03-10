import React, { useState } from "react";

function BrainDump() {
  const [description, setDescription] = useState("");
  // function handleSubmit(e) {
  //         e.preventDefault();
  //         };
const getBrainDumps = 
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
}

export default BrainDump