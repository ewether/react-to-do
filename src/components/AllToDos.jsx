import React, { useState } from "react";
import ToDo from './ToDo'
import AddTask from "../utilities/icons/add-task.png";

function AllToDos() {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([
        'Walk dog',
    ])    
    const [showForm, setShowForm] = useState(false);
    const [iconClick, setIconClick] = useState(false);
    const [iconHover, setIconHover] = useState(false);

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
        setShowForm(!showForm);
    }

    function onIconClick() {
        setIconClick(!iconClick);
        setTimeout(() => {
          setShowForm(!showForm);
        }, 500);
    }

    return (
      <div className="main-wrapper">
        <h1>Tasks</h1>

        <section className="todos-wrapper">
          {todos.map((todo) => (
            <ToDo text={todo} />
          ))}
        </section>

        {showForm ? 
            <form
            onSubmit={handleSubmit}
            className={`form ${showForm ? "show-form" : "hide-form"}`}
            >
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
        :
            <div className="new-todo">
                <img
                className={`add-task-icon ${
                showForm
                    ? "hide-add-task"
                    : iconClick
                    ? "icon-click"
                    : iconHover
                    ? "icon-hover"
                    : "show-add-task"
                }`}
                src={AddTask}
                alt="Add task"
                onClick={() => onIconClick()}
                onMouseOver={() => setIconHover(!iconHover)}
                onMouseOut={() => setIconHover(!iconHover)}
                />
            </div>
        }

      </div>
    );
}

export default AllToDos;