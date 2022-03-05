import React, { useState } from "react"
import NewToDO from "./NewToDo"
import ToDO from "./ToDo";
import { form } from "react-bootstrap"

// Todo Deliverables:
// - Add element to array: use spread operator!
// - Remove element to array: use filter!
// - Update element in array: use map!
// */

function ToDoList() {
    // const [toDos, setToDos] = useState("");
    // const [newToDoDescription, setNewToDoDescription] = useState("");

      function addTodo(e) {
        e.preventDefault();
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
          <h2>Add Todos</h2>
          <form>
            <label>
              What do you have to do today?
              <input
              //             type="text"
              //             value={newTodoDescription}
              //             onChange={(e) => setNewToDoDescription(e.target.value)}
              />
            </label>
            <input type="submit" />
            {/* <input class="form-control" type="text" placeholder="Default input">
                  </input> */}
          </form>
          <form>
            <div class="form-group row">
              <label
                for="colFormLabelLg"
                class="col-sm-2 col-form-label col-form-label-lg"
              >
                Tasks
              </label>
              <div class="col-sm-10">
                <input
                  type="Tasks"
                  class="form-control form-control-lg"
                  id="colFormLabelLg"
                  placeholder="What do you have to do today?"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          <h2>My Todos</h2>
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