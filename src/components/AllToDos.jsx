import React from "react";
import ToDo from './ToDo'

function AllToDos() {
    return (
        <div className="main-wrapper">
            <h1>To Do List</h1>

            <div className="new-todo">
                <form>
                    <label>
                        <input type="text" name="todo" placeholder="Enter a new to do ..." />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default AllToDos;