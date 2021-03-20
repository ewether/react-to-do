import React, { useState } from "react";

// on todo click -> turn green

function ToDo({ text }) {
    const [complete, setComplete] = useState(false);

    return (
        <div className={` todo ${complete ? 'complete' : 'not-complete'} `} onClick={() => setComplete(!complete)}>
            <p>{text}</p>

            <div className="todo-buttons">
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
            </div>
        </div>
    )
}

export default ToDo;