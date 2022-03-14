import React, { useState, useEffect } from "react";
import { form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function NewDump({ onAddDump }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/dumps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
      }),
    })
      .then((r) => r.json())
      .then((data) => onAddDump(data));
  }
  return (
    <div className="form">
      <h2>Brain Dump</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group row">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            Think of something and don't want to forget it? Dump it here!
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              value={description}
              placeholder="Write away!"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewDump;