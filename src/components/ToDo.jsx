import React, { useState } from "react";

// on todo click -> turn green

function ToDo() {
    const [green, setGreen] = useState(false);

    return (
        <div className={` todo ${green ? 'green' : 'white'} `} onClick={() => setGreen(!green)}>
            <p>Walk dog</p>
        </div>
    )
}

export default ToDo;