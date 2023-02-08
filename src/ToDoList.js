import React, { useState } from "react";
import "./App.css";

export default function ToDoList() {

    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");

    // To add a new task to the list
    const addTask = (event) => {
        event.preventDefault();
        setTask([...task, input]);
        setInput("");
    }

    // To delete a task from the list
    const deleteTask = (event) => {
        const newTask = [...task];
        newTask.splice(event, 1);
        setTask(newTask);

    };


  return (
    <div className="form">
      <div className="form-content">
        <h1>todos</h1>

        <form onSubmit={addTask}>
          <input value={input} className="input" placeholder="Add Task" 
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="add-button" type="submit">Add</button>
        </form>

        <ul>
        {task.map((tasks, index) => (
          <li key={index}>{tasks}
             <button className="delete-button" onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
