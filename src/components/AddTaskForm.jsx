import React from "react";
import { useState, useEffect } from "react";
import "./AddTaskForm.css";
import toast from "react-hot-toast";

const AddTaskForm = ({ onAddTask, taskToEdit }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    description: "",
    completed: false,
    id: new Date().getTime(),
  });
  useEffect(() => {
    if (taskToEdit) {
      setInputValues(taskToEdit);
    }
  }, [taskToEdit]);
  const handleValidation = (inputValues) => {
    if (
      inputValues.name.trim() === "" ||
      inputValues.description.trim() === ""
    ) {
      toast.error("Please fill in all fields");
      return false;
    }

    return true;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const success = handleValidation(inputValues);
    if (!success) {
      return;
    }
    const timestamp = new Date().getTime();
    setInputValues({ ...inputValues, id: timestamp });
    onAddTask(inputValues);
    toast.success("Task added successfully");
    // Clear the input fields
    setInputValues({
      name: "",
      description: "",
      completed: false,
      id: new Date().getTime(),
    });
  };
  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div className="input-task">
        <label htmlFor="inputTask">Task name</label>
        <input
          id="todo-text"
          type="text"
          placeholder="Enter task name"
          value={inputValues.name}
          onChange={(e) => {
            setInputValues({ ...inputValues, name: e.target.value });
          }}
        />
        <label htmlFor="task-description">Task Description</label>
        <textarea
          id="task-description"
          placeholder="Enter task description"
          value={inputValues.description}
          onChange={(e) => {
            setInputValues({ ...inputValues, description: e.target.value });
          }}
        ></textarea>
      </div>
      <button className="add-btn">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
