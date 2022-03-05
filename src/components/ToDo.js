import React from "react";

function ToDO() {
//  const { description, id, completed } = todo
    
    // function handleCompleted(completed) {
    //     // persist changes on server
    //     fetch(`/todos/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ todo: { completed: completed } })
    //     })
    //         .then(r => r.json())
    //         .then(data => onUpdateTodo(data.todo.id, data.todo.completed))
    //     // then use onUpdateTodo to update todo in state
    // }
    
    // function handleDelete() {
    //     // persist changes on server
    //     fetch(`/todos/${id}`, {
    //         method: "DELETE"
    //     })
        // then use onDeleteTodo to remove todo from state
        // onDeleteTodo(id)
    // }
    
    return (
        <li>
            <strong>{"description"}</strong>
            <label>
                Completed?
                <input
                    type="checkbox"
                    // onChange={e => handleCompleted(e.target.checked)}
                    // checked={completed}
                />
            </label>
            <button onClick={"click"}>Delete</button>
        </li>
    )
}


export default ToDO;