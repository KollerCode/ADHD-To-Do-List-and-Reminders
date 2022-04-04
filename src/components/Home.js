import React from "react";
import ToDoListForm from "./ToDoListForm";

function Home({ todos, onDeleteToDo, onUpdateToDo }) {
// COMPONENT NOT IN USE ATM
  return (
    <div>
    <div className="main-form">
      <ToDoListForm
        // todos={todos}
        // onDeleteToDo={onDeleteToDo}
        // onUpdateToDo={onUpdateToDo}
      />
    </div>
    <div>
        {/* future break checker */}
      </div>
      </div>
  );
}

export default Home;