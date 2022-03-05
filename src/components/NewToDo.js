import React, { useState } from "react";
import { form } from "react-bootstrap";

function NewToDO({ onAddToDo }) {
        const [description, setDescription] = useState("");

        function handleSubmit(e) {
          e.preventDefault();
          const apiDataForTodo = {
            todo: {
              description: description,
              completed: false,
              urgent: "foo",
              wait: "foo",
            },
          };
          // persist todo on server
          fetch("/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(apiDataForTodo),
          })
            .then((response) => response.json())
            .then((data) => onAddToDo(data));
          // then use onAddTodo to add todo to state
        }
    return (
      <div className="App">
        <h2>Tasks</h2>
        {/* <NewTodo onAddTodo={addTodo} /> */}
        {/* <TodoList
            todos={todos}
            onDeleteTodo={deleteTodo}
            onUpdateTodo={updateTodo}
          /> */}
        <form>
          <div class="form-group row">
            <label
              for="colFormLabelLg"
              class="col-sm-2 col-form-label col-form-label-lg"
            >
              Let's get our tasks for the day!
            </label>
            <div class="col-sm-10">
              <input
                type="Tasks"
                class="form-control form-control-lg"
                id="colFormLabelLg"
                placeholder="Write away!"
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

export default NewToDO;