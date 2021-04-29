import React, { useState } from "react";
import Checkmark from "../utilities/icons/checkmark.png";
import GreyCheckmark from "../utilities/icons/grey-checkmark.png";
import GreyDelete from "../utilities/icons/grey-delete.png";
import Delete from "../utilities/icons/delete.png";

// on todo click -> turn green

function ToDo({ text }) {
    const [complete, setComplete] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [hoverDelete, setHoverDelete] = useState(false);
 
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
              {/* <div className="checkmark-wrapper"> */}
              {complete ? (
                <img className="checkmark" src={Checkmark} alt="checkmark" />
              ) : (
                <img
                  className="checkmark grey-checkmark"
                  src={GreyCheckmark}
                  alt="grey checkmark"
                />
              )}
              {/* </div> */}
              <img
                className="delete-button"
                src={GreyDelete}
                alt="Delete"
                onClick={() => deleteClick()}
                onMouseOver={e => (e.currentTarget.src = Delete)}
                onMouseOut={e => (e.currentTarget.src = GreyDelete)
                }
              />
            </div>
          </div>
        )}
      </div>
    );
}

export default ToDo;