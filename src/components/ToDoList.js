import React, { useState } from "react"
import NewToDO from "./NewToDo"
import ToDO from "./ToDo";
import { form } from "react-bootstrap"

// Todo Deliverables:
// - Add element to array: use spread operator!
//  - Remove element to array: use filter!
// - Update element in array: use map!

function ToDoList() {
    const [toDos, setToDos] = useState([]);
    // const [newToDoDescription, setNewToDoDescription] = useState("");

      function addTodo() {
        // // e.preventDefault();
        // const updatedTodos = [...toDos, newTodo];
        // setTodos(updatedTodos);
    //     const newTodo = {
    //       id: getNextId(),
    //       description: newToDoDescription,
    //       completed: false,
        };
    //       const updatedTodos = [...toDos, newTodo]
    //       setToDos(updatedTodos)
    
    //     console.log("createTodo", newTodo);
    //   }
  
    //     function deleteToDo(id) {
    //         const updatedToDos = todos.filter(todo => todo.id !== id)
    //         setToDos(updatedToDos)
    //     }
    // // - iterate over the elements in our todo array
    // // - check if the ID matches
    // // - if it does, return an updated todo o
    // // - otherwise, return the original todo
    //     function updateToDo(id, completed) {
    //         const updateToDos = todos.map(todo => {
    //           if (todo.id === id) {
    //               return { ...todo,completed }
    //           } else {
    //              return todo 
    //           }
    //         })
    //         setToDos(updateToDos)
    //     }
    
      return (
        <div className="App">
          <h2>Tasks</h2>
          {/* <NewTodo onAddTodo={addTodo} /> */}
          <ToDO />
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
          <ul>
            {/* //         {toDos.map((todo) => ( */}
            {/* //           <li key={todo.id}>
    //             <strong>{todo.description}</strong>
    //             <label>
    //               Completed?
    //               <input */}
            {/* //                 type="checkbox"
    //                 onChange={(e) => updateToDo(todo.id, e.target.checked)}
    //                 checked={todo.completed}
    //               />
    //             </label>
    //             <button onClick={() => deleteToDo(todo.id)}>Delete</button>
    //           </li> */}
            {/* //         ))} */}
          </ul>
        </div>
      );
}

export default ToDoList;