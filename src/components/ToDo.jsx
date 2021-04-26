import React, { useState } from "react";

// on todo click -> turn green

function ToDo({ text }) {
    const [complete, setComplete] = useState(false);
    const [deleted, setDeleted] = useState(false);
 
    function deleteClick() {
        setDeleted(true);
    }

    return (
      <div>
        {deleted ? (
          <div></div>
        ) : (
          <div
            className={` todo ${complete ? "complete" : "not-complete"} `}
            onClick={() => setComplete(!complete)}
          >
            <p>{text}</p>

            <div className="todo-buttons">
              <button className="edit-button">Edit</button>
              <button className="delete-button" onClick={() => deleteClick()}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
}

export default ToDo;