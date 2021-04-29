import React, { useState } from "react";
import ToDo from './ToDo'
import AddTask from "../utilities/icons/add-task.png";

function AllToDos() {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([
        'Walk dog',
    ])    

    const addTodo = (text) => {
        const newTodos = [...todos, text];
        setTodos(newTodos);
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        const userInput = value;
        e.preventDefault();
        addTodo(userInput);
        setValue('');
    }

    return (
      <div className="main-wrapper">
        <h1>Tasks</h1>

        <section className="todos-wrapper">
          {todos.map((todo) => (
            <ToDo text={todo} />
          ))}
        </section>
        <div className="new-todo">
          <img className="add-task-icon" src={AddTask} alt="Add task" />
          <form onSubmit={handleSubmit}>
            <label>
              <input
                value={value}
                onChange={handleChange}
                type="text"
                name="todo"
                placeholder="Enter a new task ..."
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
}

export default AllToDos;