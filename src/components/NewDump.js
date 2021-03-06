import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
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
    <div className="braindump-form">
      <h2>Brain Dump</h2>
      <Form onSubmit={handleSubmit}>
        <div class="row row-cols-lg-auto g-3 align-items-center">
          <label
            for="colFormLabelLg"
            class="col-form-label-lg"
          >
            Think of something and don't want to forget it? Dump it here!
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control-lg"
              id="colFormLabelLg"
              value={description}
              placeholder="Write away!"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {""}
        </div>
      </Form>
    </div>
  );
}

export default NewDump;