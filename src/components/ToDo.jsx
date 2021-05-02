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
    const [checkHover, setCheckHover] = useState(false);
    const [deleteHover, setDeleteHover] = useState(false);
 
    function deleteClick() {
        setDeleted(true);
    }

    function todoHover() {
      setHover(!hover);
    }

    function toDeleteHover() {
      setDeleteHover(!deleteHover);
    }

    function toCheckHover() {
      setCheckHover(!checkHover);
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
                  src={
                    checkHover ? Checkmark : hover ? LtGrnCheckmark : GreyCheckmark
                  }
                  alt="grey checkmark"
                  onMouseOver={() => toCheckHover()}
                  onMouseOut={() => toCheckHover()}
                />
              )}
              {/* </div> */}
              <img
                className={"delete-button"}
                src={deleteHover ? RedDelete : hover ? LtRedDelete : GreyDelete}
                alt="Delete"
                onClick={() => deleteClick()}
                onMouseOver={() => toDeleteHover()}
                onMouseOut={() => toDeleteHover()}
              />
            </div>
          </div>
        )}
      </div>
    );
}

export default ToDo;