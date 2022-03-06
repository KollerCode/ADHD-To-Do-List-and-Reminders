import React from "react";

function ToDO({ toDo }) {
 
    
    function handleCompleted(completed) {

    }
    
    
    
    return (
        <li>
            <strong>"description"</strong>
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