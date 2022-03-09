import React, { useState } from "react";
import { form } from "react-bootstrap";

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
        <h2>Tasks</h2>
        {/* <NewToDo onAddTodo={addToDo} /> */}
        {/* <TodoList
            todos={todos}
            onDeleteTodo={deleteTodo}
            onUpdateTodo={updateTodo}
          /> */}
        <form onSubmit={handleSubmit}>
          <div class="form-group row">
            <label
              for="colFormLabelLg"
              class="col-sm-2 col-form-label col-form-label-lg">
              Let's get our tasks for the day!
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

export default NewToDO;