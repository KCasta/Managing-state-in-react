import React from "react";
import "./Task.css";
import { useTodoConext } from "../context/TodoContenxt";
import toast from "react-hot-toast";
const Task = ({ task, editTask }) => {
  const { tasks, setTasks } = useTodoConext();

  // create a function to remove a task from the tasks array
  const removeHandler = () => {
    // filter out the task that needs to be removed
    const filtereedTasks = tasks.filter((eachTask) => {
      return eachTask.id !== task.id;
    });
    // update the tasks array with the filtered tasks
    setTasks(filtereedTasks);
    toast.success("Task removed successfully");
  };
  const toggleHandler = () => {
    const updatedTasks = tasks.map((eachTask) => {
      if (eachTask.id === task.id) {
        return { ...eachTask, completed: !eachTask.completed };
      }
      return eachTask;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="tasks-list">
      <div className="tasks-description">
        <h3 className="tasks-item">{task.name}</h3>
        <p className="tasks-item">{task.description}</p>
      </div>
      <div className="task-actions"></div>
      <button
        className="edit-button"
        onClick={() => {
          editTask(task);
        }}
      >
        Edit
      </button>
      <button className="remove-button" onClick={removeHandler}>
        Remove
      </button>
      <label htmlFor="">
        {task.completed ? `Mark as undone` : `Mark as done`}
      </label>
      <input
        className="checkbox-input"
        type="checkbox"
        checked={task.completed}
        onChange={toggleHandler}
      />
    </div>
  );
};

export default Task;
