import React, { useState } from "react";
import Checkmark from "../utilities/icons/checkmark.png";
import GreyCheckmark from "../utilities/icons/grey-checkmark.png";
import GreyDelete from "../utilities/icons/grey-delete.png";
import RedDelete from "../utilities/icons/red-delete.png";
import LtRedDelete from "../utilities/icons/ltred-delete.png";
import LtGrnCheckmark from "../utilities/icons/ltgrn-checkmark.png";

// on todo click -> turn green

function ToDo({ text }) {
    const [complete, setComplete] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [hover, setHover] = useState(false);
 
    function deleteClick() {
        setDeleted(true);
    }

    function todoHover() {
      setHover(!hover);
    }

    return (
      <div>
        {deleted ? (
          <div></div>
        ) : (
          <div
            className={` todo ${complete ? "complete" : "not-complete"} `}
            onClick={() => setComplete(!complete)}
            onMouseOver={() => todoHover()}
            onMouseOut={() => todoHover()}
          >
            <p>{text}</p>

            <div className="todo-buttons">
              {/* <div className="checkmark-wrapper"> */}
              {complete ? (
                <img className="checkmark" src={Checkmark} alt="checkmark" />
              ) : (
                <img
                  className="checkmark grey-checkmark"
                  src={hover ? LtGrnCheckmark : GreyCheckmark}
                  alt="grey checkmark"
                />
              )}
              {/* </div> */}
              <img
                className={"delete-button"}
                src={hover ? LtRedDelete : GreyDelete}
                alt="Delete"
                onClick={() => deleteClick()}
                onMouseOver={(e) => (e.currentTarget.src = RedDelete)}
                onMouseOut={(e) => (e.currentTarget.src = GreyDelete)}
              />
            </div>
          </div>
        )}
      </div>
    );
}

export default ToDo;