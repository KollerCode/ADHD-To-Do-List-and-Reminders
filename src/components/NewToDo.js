import React, { useState } from "react";
import { form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function NewToDO({ onAddToDo }) {
        const [description, setDescription] = useState("");

        function handleSubmit(e) {
          e.preventDefault();
          const apiDataForTodo = {
              description: description,
              completed: false,
              urgent: false,
              wait: false,
          };
          // persist todo on server
           fetch("http://localhost:4000/todos", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(apiDataForTodo),
           })
             .then((r) => r.json())
             .then((data) => onAddToDo(data));
          // then use onAddTodo to add todo to state
        }
    return (
      <div className="form">
        <h1>Task Lister</h1>
        <form onSubmit={handleSubmit}>
          <div class="row row-cols-lg-auto g-3 align-items-center">
            <label
              for="colFormLabelLg"
              class="col-form-label-lg">
              What tasks do you have to accomplish?
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control form-control-lg"
                id="colFormLabelLg"
                value={description}
                placeholder="Tisk, Task, Type here!"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button type="submit" class="btn btn-primary">
              Add Task
            </Button>
          </div>
        </form>
      </div>
    );
}

export default NewToDO;