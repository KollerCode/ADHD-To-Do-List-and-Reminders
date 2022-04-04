import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Dumps({ dump, onUpdateDump, onDeleteDump }) {
  const { id, description } = dump;

  function handleDelete() {
    fetch(`http://localhost:4000/dumps/${id}`, {
      method: "DELETE",
    });
    onDeleteDump(id);
  }

  return (
    <li>
      <strong className="dumps-description">{description}</strong>
      <Button classname="delete-task" onClick={handleDelete}>
        Delete Me!
      </Button>
    </li>
  );
}

export default Dumps;