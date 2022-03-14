import React, { useState } from "react";

function Dumps({ dump, onUpdateDump, onDeleteDump }) {
  const { id, description } = dump;

  function handleDelete() {
    fetch(`http://localhost:4000/dumps/${id}`, {
      method: "DELETE",
    });
    onDeleteDump(id);
  }

  return (
    <ul>
      <strong>{description}</strong>
      <button classname="delete-task" onClick={handleDelete}>
        Delete Me!
      </button>
    </ul>
  );
}

export default Dumps;